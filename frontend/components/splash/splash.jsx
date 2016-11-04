import React from 'react';
import {withRouter} from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.loggedIn){
      this.props.router.push('/home');
    }
  }

  splashPage() {
    let content;
    if (!this.props.loggedIn) {
      content= <div className="splash-content">
                      <h2>Welcome to Feedful</h2>
                    </div>;
      return content;
    }
  }

  render() {
    return (
      <div className="splash">
        {this.splashPage()}
      </div>
    );
  }
}

export default withRouter(Splash);
