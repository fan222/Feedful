import React from 'react';
import { withRouter } from 'react-router';
import ArticleBlock from './article_block';

class FeedDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!(this.props.feed)) {
      return <h3>Loading</h3>;
    } else {
      return (
        <div className="feeddetail">
          <h1 className="feeddetail-title">{this.props.feed.name}</h1>
          <div className="feeddetail-main">
            <ul className="feeddetail-ul">
              {Object.keys(this.props.feed.articles).map( articleId =>
                <li className="feeddetail-li" key={articleId}>
                  <ArticleBlock article={this.props.feed.articles[articleId]}/>
                </li>
                )
              }
            </ul>
          </div>
        </div>
        );
    }
  }
}

export default withRouter(FeedDetail);
