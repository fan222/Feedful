import React from 'react';
import { withRouter } from 'react-router';
import SidebarCollectionItem from './sidebar_collection_item';


class SidebarCollection extends React.Component {
  constructor(props) {
    super(props);
  }


  collections() {
    if (Object.keys(this.props.feeds).length === 1) {
      return <div>Loading</div>;
    } else {
      return (<ul className="sidebar-collection-ul">
        {Object.keys(this.props.collections).map(collectionId => (
          <li className="sidebar-collection-li" key={collectionId}>
            <SidebarCollectionItem
              collection={this.props.collections[collectionId]}
              feeds={this.props.feeds}/>
          </li>
          )
        )
        }
      </ul>);
    }
  }

  render() {
    return (
      <div className="sidebar-collection">
        <div className="sidebar-collection-title">My Feeds</div>
          {this.collections()}
      </div>
    );
  }
}

export default withRouter(SidebarCollection);
