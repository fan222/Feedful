import React from 'react';
import Hamburger from 'react-icons/lib/fa/bars';
import LoginModal from '../login/login_modal';
import { withRouter } from 'react-router';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sideContent = this.sideContent.bind(this);
    this.footer = this.footer.bind(this);
  }

  sideContent() {
    let buttonText = 'Start';
    let sideContent;
    if (!this.props.loggedIn) {
      sideContent = <LoginModal />;
      return sideContent;
    } else {
      sideContent = (<button className='explore-button' onClick={this.handleExp()}>Explore</button>);
      return sideContent;
    }
  }

  handleExp() {
    return (e) => {
      e.preventDefault();
      this.props.router.push(`/home/categories/1`);
    };
  }

  footer() {
    let footer;
    if (this.props.loggedIn) {
      footer = <footer className='sidebar-footer'>
        <button className='logout-button' onClick={this.props.logout}>Logout</button>
      </footer>;
    }
    return footer;
  }


  render() {
    return (
      <aside className='sidebar'>
        <div className='sidebar-tabs'>
          <div>
            <div className='hamburger-icon'>
              <Hamburger />
            </div>
          </div>
            <div className='sidebar-content-container'>
              {this.sideContent()}
            </div>
        </div>
        {this.footer()}
      </aside>
    );
  }
}

export default withRouter(Sidebar);
