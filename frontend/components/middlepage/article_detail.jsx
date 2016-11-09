import React from 'react';
import $ from 'jquery';


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


  render() {
    return(
      <div className="article-detail">
        <div className="article-detail-main">
          <div className="article-detail-title">{this.props.article.title}</div>
          <div className="clearfix">
            <div className="article-detail-author">By {this.props.article.author}</div>
            <div className="article-detail-published">{this.props.article.published.slice(0,10)}</div>
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
