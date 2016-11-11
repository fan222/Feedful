class Api::ArticlesController < ApplicationController
  def create
    @article = Article.new(article_params)
    @article[:user_id] = current_user.id
    if @article.save
      render :show
    else
      render(
        json: ["fail to save article"],
        status: 422
      )
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    render :show
  end

  def show
    @article = Article.find(params[:id])
    render :show
  end

  def index
    if current_user
      @articles = current_user.articles
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :author, :feed_id,
                                    :url, :entry_id, :published,
                                    :image, :summary, :content)
  end
end
