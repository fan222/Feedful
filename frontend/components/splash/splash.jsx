import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
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

export default Splash;
