import React from 'react';
import Hamburger from 'react-icons/lib/fa/bars';
import LoginModal from '../greeting/login_modal';


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
    }
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
        <div>
          <div className='hamburger-icon'>
            <Hamburger />
          </div>
        </div>
        <div className='spacer'></div>
          <div className='sidebar-content-container'>
            {this.sideContent()}
          </div>
        <div className='spacer'></div>
        {this.footer()}
      </aside>
    );
  }
}

export default Sidebar;
