import React from 'react';
import { Link, withRouter} from 'react-router';

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const handleLogin = (router) => (e) => {
  e.preventDefault();
  router.push("/login");
};

const welcomePage = (router) => (
	<hgroup className="header-group">
    <h3>Welcome!</h3>
    <button className="header-button" onClick={handleLogin(router)}>Log In</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout, router}) => (
  currentUser ? personalGreeting(currentUser, logout) : welcomePage(router)
);

export default withRouter(Greeting);
