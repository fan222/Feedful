import React from 'react';
import { withRouter } from 'react-router';

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  sortArticles(collection, feeds) {
    let articles = [];
    let date = new Date();
    let dateTod = date.toISOString().slice(0,10);
    date.setDate(date.getDate() - 1);
    let dateYes = date.toISOString().slice(0,10);
    date.setDate(date.getDate() - 1);
    let dateBefYes = date.toISOString().slice(0,10);
    [dateTod, dateYes, dateBefYes].forEach(d => {
      collection.feeds_ids.forEach(feedId => {
        let innerArticles = feeds[feedId].articles;
        Object.keys(innerArticles).forEach(aId => {
          if (innerArticles[aId].published.slice(0,10) === d){
            articles.push(innerArticles[aId]);
          }
          }
        );
      });
    });
    return articles;
  }

  render() {
    if (Object.keys(this.props.feeds).length === 1) {
      return <h3>Loading</h3>;
    } else {
      let articles = this.sortArticles(this.props.collection, this.props.feeds);
      return (
        <div className="collection-index">
          <div className="collection-index-title">{this.props.collection.name}</div>
          <ul className="collection-index-ul">
            {
              articles.map((article, idx) => (
                <li className="collection-index-li" key={idx}>{article.title}</li>
              ))
            }
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(CollectionIndex);
