import React from 'react';
import { Link} from 'react-router';
import LoginModal from './login_modal';

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);


const Greeting = ({ currentUser, logout, router}) => (
  currentUser ? personalGreeting(currentUser, logout) : <LoginModal />
);

export default Greeting;
