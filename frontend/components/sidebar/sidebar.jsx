import React from 'react';
import { withRouter } from 'react-router';

import Hamburger from 'react-icons/lib/fa/bars';
import LoginModal from '../login/login_modal';
import SidebarCollection from './sidebar_collection';



class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarButton = this.sideBarButton.bind(this);
    this.footer = this.footer.bind(this);
  }

  sideBarButton() {
    let buttonText = 'Start';
    let sideBarButton;
    if (!this.props.loggedIn) {
      sideBarButton = <LoginModal />;
      return sideBarButton;
    } else {
      sideBarButton = (<button className='explore-button'
                        onClick={this.handleExp()}>Explore</button>);
      return sideBarButton;
    }
  }

  handleExp() {
    return (e) => {
      e.preventDefault();
      this.props.router.push(`/home/categories/2`);
    };
  }

  footer() {
    let footer;
    if (this.props.loggedIn) {
      footer = <footer className='sidebar-footer'>
        <button className='logout-button'
                onClick={this.props.logout}>Logout</button>
      </footer>;
    }
    return footer;
  }

  sidebarCol() {
    if (this.props.loggedIn) {
      return <SidebarCollection feeds={this.props.feeds}
              collections={this.props.collections}/>;
    }
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
              <div className='sidebar-content-buttons'>
                {this.sideBarButton()}
              </div>
                {this.sidebarCol()}
            </div>
        </div>
        {this.footer()}
      </aside>
    );
  }
}

export default withRouter(Sidebar);
