import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			formType: "login",
			class1: "tab clearfix",
			class2: "tab active clearfix"
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
		if (this.state.formType === 'login') {
			this.props.login({user});
		} else {
			this.props.signup({user});
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

	setclass1() {
		if (this.state.class1 === "tab clearfix") {
			this.setState({class1: "tab active clearfix",class2: "tab clearfix", formType: "signup"});
		}
	}

	setclass2() {
		if (this.state.class2 === "tab clearfix") {
			this.setState({class2: "tab active clearfix", class1: "tab clearfix",formType: "login"});
		}
	}

	render() {
		return (
			<div className="log-form">
				<ul className="tab-group clearfix">
					<li className={this.state.class1}><a onClick={this.setclass1.bind(this)}>Sign Up</a></li>
					<li className={this.state.class2}><a onClick={this.setclass2.bind(this)}>Log In</a></li>
				</ul>
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box" className="sign-in">
							<h1 className="modal-h1">Welcome to Feedful!</h1>
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

							<div>{this.renderErrors()}</div>
		    			<div className="submit">
								<input type="submit" className="button button-block" value={this.state.formType} name="commit"/>
							</div>
					</form>
				</div>
			</div>
		);
	}
}


export default withRouter(SessionForm);
