import React from 'react';
import $ from 'jquery';


class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  insertContent() {
    let $content = $(".article-detail-content");
    let str;
    if (this.props.article.summary === "none") {
      str = this.props.article.content;
    } else {
      str = this.props.article.summary;
    }
    let html = $.parseHTML(str);
    debugger;
    $content.append(html);
  }

  render() {
    return(
      <div className="article-detail">
        <div className="article-detail-title">{this.props.article.title}</div>
        <div className="article-detail-author">By {this.props.article.author}</div>
        <div className="article-detail-published">{this.props.article.published.slice(0,10)}</div>
        <div className="article-detail-content"></div>
        {this.insertContent()}
        <a href={this.props.article.url} className="article-detail-url">VISIT WEBSITE</a>
      </div>
    );
  }
}

export default ArticleDetail;
