import React from 'react';
import { withRouter } from 'react-router';
import SidebarCollectionItem from './sidebar_collection_item';


class SidebarCollection extends React.Component {
  constructor(props) {
    super(props);
  }


  collections() {
    if (Object.keys(this.props.feeds).length === 1) {
      return  <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
              </div>;
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
