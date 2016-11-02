import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <ul className="login-signup" class="tab-group">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </ul>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
