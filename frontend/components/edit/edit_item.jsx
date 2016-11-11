import React from 'react';
import Clear from 'react-icons/lib/md/clear';

class EditItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete() {
    return e => {
      this.props.deleteCollection(this.props.collection);
    };
  }

  handleUpdate(feedId) {
    return e => {
      this.props.updateCollection({name: this.props.collection.name,
                id: this.props.collection.id,
                feedAdd: "none",
                feedRemove: feedId});
    };
  }

  render() {
    return (
      <div className="edititem">
        <div className="clearfix edititem-head">
          <div className="edititem-name">{this.props.collection.name}</div>
          <div className="edititem-delete" onClick={this.handleDelete()}>
            <Clear />
          </div>
        </div>
        <ul className="edititem-ul">
          {
            this.props.collection.feeds_ids.map(feedId => (
              <li className="edititem-li clearfix" key={feedId}>
                <div className="edititem-li-feed">{this.props.feeds[feedId].name}</div>
                <div className="edititem-li-update" onClick={this.handleUpdate(feedId)}>
                  <Clear />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default EditItem;
