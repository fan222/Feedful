import React from 'react';
import Plus from 'react-icons/lib/fa/plus';
import { withRouter } from 'react-router';

class FeedBlock extends React.Component {
    constructor(props) {
      super(props);
    }

  handleLi(id) {
    return (e) => {
      this.props.router.push(`/home/feeds/${id}`);
    };
  }

  plus(collections, feed) {
    let added = <Plus />;
    Object.keys(collections).forEach(colId => {
      if (collections[colId].feeds_ids.includes(feed.id)) {
        added = <div className="feedblock-added">Added</div>;
      }
    });
    return added;
  }

  render() {
    return (
    <div className="feedblock">
      <div className="clearfix">
        <h5 className="feedblock-title">{this.props.feed.name}</h5>
        <div className="feedblock-plus" onClick={this.props.onClick}>
          {this.plus(this.props.collections, this.props.feed)}
        </div>
      </div>
        <p className="feedblock-des" >{this.props.feed.description}</p>
        <img className="feedblock-img"
          src={this.props.feed.articles[1].image}
          alt={this.props.feed.articles[1].title}></img>
        <div className="feedblock-detail"
              onClick={this.handleLi(this.props.feed.id)}>More Detail</div>
    </div>
  );
  }
}

export default withRouter(FeedBlock);
