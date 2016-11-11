import React from 'react';
import { withRouter } from 'react-router';
import EditItem from './edit_item';


class Edit extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (Object.keys(this.props.feeds).length === 1) {
      return <div className="sk-cube-grid">
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
    return (
        <div className="edit">
          <div className="edit-title">Organize My Feedful</div>
          <ul className="edit-ul clearfix">
            {
              Object.keys(this.props.collections).map(colId => (
                <li className="edit-li" key={colId}>
                  <EditItem collection={this.props.collections[colId]}
                            feeds={this.props.feeds}
                            updateCollection={this.props.updateCollection}
                            deleteCollection={this.props.deleteCollection}/>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
  }
}

export default withRouter(Edit);
