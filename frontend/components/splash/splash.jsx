import React from 'react';
import {withRouter} from 'react-router';
import LoginModal from '../login/login_modal';
import Feeds from 'react-icons/lib/md/print';
import Col from 'react-icons/lib/md/settings';
import Artic from 'react-icons/lib/md/control-point';


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
      content=  <div className="splash-content">
                  <div className="splash-head">feedful</div>
                  <div className="splash-top">
                    <h1 className="splash-top-head">Welcome to feedful</h1>
                    <div className="splash-top-description">The content you need for work and fun.</div>
                    <div className="splash-login">
                      <LoginModal />
                    </div>
                    <img src="https://res.cloudinary.com/cloudfan/image/upload/v1480894429/splash_gipyh5.gif"
                      alt="feedful-screenshot"
                      className="feedful-screenshot"></img>
                  </div>
                  <div className="splash-middle">
                    <div className="splash-middle-head">Read, Matters</div>
                    <div className="splash-middle-features">
                      <div className="splash-middle-feature-icon">
                        <Feeds />
                      </div>
                      <div className="splash-middle-feature-name">Your Feeds</div>
                      <div className="splash-middle-feature-content">Catch every update from website your are interested, whether it's about motorcycle or coding.</div>
                    </div>
                    <div className="splash-middle-features">
                      <div className="splash-middle-feature-icon">
                        <Col />
                      </div>
                      <div className="splash-middle-feature-name">Your Collections</div>
                      <div className="splash-middle-feature-content">Create and manage your collection, and go all the way to your content.</div>
                    </div>
                    <div className="splash-middle-features">
                      <div className="splash-middle-feature-icon">
                        <Artic />
                      </div>
                      <div className="splash-middle-feature-name">Your Articles</div>
                      <div className="splash-middle-feature-content">Save your favorite ariticles and go back to them easily.</div>
                    </div>
                  </div>
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
