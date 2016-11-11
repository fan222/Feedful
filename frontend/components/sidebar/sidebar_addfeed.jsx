import React from 'react';
import { withRouter } from 'react-router';
import SidebarAddfeedCollection from './sidebar_addfeed_collection';
import SidebarAddfeedNewCollection from './sidebar_addfeed_newcol';


class SidebarAddfeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className='sidebar-addfeed'>
        <div>{this.props.feed.name}</div>
        <SidebarAddfeedNewCollection
          createCollection={this.props.createCollection}/>
        <ul className="sidebar-addfeed-ul">
            {Object.keys(this.props.collections).map(colId => (
              <li key={colId}>
                <SidebarAddfeedCollection feed={this.props.feed}
                  collection={this.props.collections[colId]}
                  updateCollection={this.props.updateCollection}/>
              </li>
            )
          )}
        </ul>
      </aside>
    );
  }
}

export default withRouter(SidebarAddfeed);
