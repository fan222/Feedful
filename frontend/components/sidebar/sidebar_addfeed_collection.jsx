import React from 'react';
import { withRouter } from 'react-router';
import Check from 'react-icons/lib/md/check-circle';


class SidebarAddfeedCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  button() {
    if (this.props.collection.feeds_ids.includes(this.props.feed.id)) {
      return <Check />;
    }
  }

  handleClick() {
    return e => {
      e.preventDefault();
      if (this.props.collection.feeds_ids.includes(this.props.feed.id)) {
        this.props.updateCollection({ name: this.props.collection.name, id: this.props.collection.id,
                                      feedAdd: "none", feedRemove: this.props.feed.id});
      } else {
        this.props.updateCollection({ name: this.props.collection.name, id: this.props.collection.id,
                                      feedAdd: this.props.feed.id, feedRemove: "none"});
      }
    };
  }

  render() {
    return (
      <div className='sidebar-addfeed-collection clearfix' onClick={this.handleClick()}>
        <div className="sidebar-addfeed-collection-name">{this.props.collection.name}</div>
        <div className="sidebar-addfeed-collection-button">
          {this.button()}
        </div>
      </div>
    );
  }
}

export default withRouter(SidebarAddfeedCollection);
