import React from 'react';
import Liked from 'react-icons/lib/fa/heart';
import Unliked from 'react-icons/lib/fa/heart-o';


class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  dangerHtml(article) {
    let text;
    if (article.summary === "none") {
      text = article.content;
    } else {
      text = article.summary;
    }
    return ({__html: text});
  }

  favoriteButton() {
    let button = <Unliked />;
    Object.keys(this.props.articles).forEach(aId => {
      if (this.props.articles[aId].title === this.props.article.title) {
        button = <Liked />;
      }
    });
    return button;
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      let liked = false;
      let id;
      Object.keys(this.props.articles).forEach(aId => {
        if (this.props.articles[aId].title === this.props.article.title) {
          liked = true;
          id = aId;
        }
      });
      if (liked) {
        this.props.deleteArticle(id);
      } else {
        this.props.createArticle({title: this.props.article.title, author: this.props.article.author,
                                  feed_id: this.props.article.feed_id, url: this.props.article.url,
                                  entry_id: this.props.article.entry_id, published: this.props.article.published,
                                  image: this.props.article.image});
      }
    };
  }


  render() {
    return(
      <div className="article-detail">
        <div className="article-detail-main">
          <div className="article-detail-title">{this.props.article.title}</div>
          <div className="clearfix">
            <div className="article-detail-author">By {this.props.article.author}</div>
            <div className="article-detail-published">{this.props.article.published.slice(0,10)}</div>
            <div className="article-detail-favorite" onClick={this.handleClick()}>
              {this.favoriteButton()}
            </div>
          </div>
          <div className="article-detail-content">
            <div dangerouslySetInnerHTML={this.dangerHtml(this.props.article)}/>
          </div>
          <a target="_blank" href={this.props.article.url} className="article-detail-url">VISIT WEBSITE</a>
        </div>
      </div>
    );
  }
}

export default ArticleDetail;
