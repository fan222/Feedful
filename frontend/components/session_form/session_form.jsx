import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionLinks from './session_links';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="log-form">
			<SessionLinks />
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box" className="sign-in">
						<h1>Welcome to Feedful!</h1>

							<div className="input">
								<label>
		              Username
		            </label>
									<input type="text"
										value={this.state.username}
										onChange={this.update("username")}
										className="login-input" />
							</div>

							<div className="input">
								<label>
		              Password
		            </label>
									<input type="password"
										value={this.state.password}
										onChange={this.update("password")}
										className="login-input" />
						  </div>

							<p>{this.renderErrors()}</p>
		    			<div className="submit">
								<input type="submit" className="button button-block" value={this.props.formType} name="commit"/>
							</div>
					</form>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
