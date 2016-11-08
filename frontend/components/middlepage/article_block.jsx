import React from 'react';

class ArticleBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  parseSummary(article) {
    let text;
    if (article.summary === "none") {
      text = article.content;
    } else {
      text = article.summary;
    }
    let result = text.replace(/<(?:.|\n)*?>/gm, '')
                                  .split(" ").slice(0, 35).join(" ") + "...";
    result = result.replace(/&nbsp;/g, ' ');
    result = result.replace(/&#8217;/g, "'");
    result = result.replace(/&#8216;/g, "'");
    result = result.replace(/&#038;/g, '&');
    result = result.replace(/&#36;/g, '$');
    result = result.replace(/&#8230;/g, '...');
    return result;
  }

  render () {
    return (
      <div className="article-block clearfix" onClick={this.props.onClick}>
        <div className="article-published">{this.props.article.published.slice(0,10)}</div>
        <img src={this.props.article.image} className="article-img"></img>
        <div className="article-title">{this.props.article.title}</div>
        <div className="article-content">{this.parseSummary(this.props.article)}</div>
      </div>
    );
  }
}

export default ArticleBlock;
