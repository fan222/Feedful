class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :fetch_parse

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

  def fetch_parse(feed)
    begin
      feed_detail = Feedjira::Feed.fetch_and_parse(feed.url)
      articles = {}
      num = 0
      feed_detail.entries.each_with_index do |article, idx|
        break if num >=10
        num += 1
        author = article.author ? article.author : "anonymity"
        summary= article.summary ? article.summary : "none"
        content= article.content ? article.content : "none"
        article_obj = {
          title: article.title,
          author: author,
          feed_id: feed.id,
          url: article.url,
          entry_id: article.entry_id,
          published: article.published,
          image: get_image(article),
          summary: summary,
          content: content
        }
        articles[idx] = article_obj
      end
      articles
    rescue
      dummy_articles = {
        1 => {
          title: "No article fetched",
          author: "none",
          feed_id: "none",
          url: "none",
          entry_id: "none",
          published: "none",
          image: "none",
          summary: "none",
          content: "none"
        }
      }
    end
  end

  def get_image(article)
    image_src = nil
    if article.image
      image_src = article.image
    elsif get_src(article.summary)
      image_src = get_src(article.summary)
    elsif get_src(article.content)
      image_src = get_src(article.content)
    end
    image_src
  end

  def get_src(string)
    suppress(Exception) do
      /src="([^"]+)"/.match(string)[1]
    end
  end
end
