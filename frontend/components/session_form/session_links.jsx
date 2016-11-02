import React from 'react';
import { Link } from 'react-router';

class SessionLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class1: "tab clearfix",
      class2: "tab active clearfix"
    };
  }

  setclass1() {
    if (this.state.class1 === "tab clearfix") {
      this.setState({class1: "tab active clearfix",class2: "tab clearfix"});
    }
  }

  setclass2() {
    if (this.state.class2 === "tab clearfix") {
      this.setState({class2: "tab active clearfix", class1: "tab clearfix"});
    }
  }
  render () {
    return (
    <ul className="tab-group clearfix">
      <li className={this.state.class1}><a href="#signup" onClick={this.setclass1.bind(this)}>Sign Up</a></li>
      <li className={this.state.class2}><a href="#login" onClick={this.setclass2.bind(this)}>Log In</a></li>
    </ul>
    );
  }
}

export default SessionLinks;
