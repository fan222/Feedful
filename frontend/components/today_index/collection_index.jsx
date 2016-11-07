import React from 'react';
import { withRouter } from 'react-router';

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (Object.keys(this.props.feeds).length === 1) {
      return <h3>Loading</h3>;
    } else {
      return (
        <div className="collection-index">
          <div className="collection-index-title">{this.props.collection.name}</div>
        </div>
      );
    }
  }
}

export default withRouter(CollectionIndex);
