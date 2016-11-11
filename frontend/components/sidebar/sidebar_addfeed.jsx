import React from 'react';
import { withRouter } from 'react-router';



class SidebarAddfeed extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <aside className='sidebar-addfeed'>
        <div>{this.props.feed.name}</div>
        <ul>
            {Object.keys(this.props.collections).map(colId => (
              <li key={colId}>
                {this.props.collections[colId].name}
              </li>
            )
          )}
        </ul>
      </aside>
    );
  }
}

export default withRouter(SidebarAddfeed);
