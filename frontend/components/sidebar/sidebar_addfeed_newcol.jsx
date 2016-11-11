import React from 'react';
import { withRouter } from 'react-router';


class SidebarAddfeedNewCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeName() {
    return e => {
      this.setState({name: e.target.value});
    };
  }

  handleSubmit() {
    event.preventDefault();
    this.props.createCollection(this.state);
    this.setState({name: ""});
  }

  render() {
    return (
      <div className="sidebar-addfeed-newcol">
        <form onSubmit={this.handleSubmit}>
          <input className="sidebar-addfeed-newcol-input"
            type="text"
            placeholder="New Collection"
            value={this.state.name}
            onChange={this.changeName()}/>
          <input className="sidebar-addfeed-newcol-submit" type="submit" value="New"/>
        </form>
      </div>
    );
  }
}

export default SidebarAddfeedNewCollection;
