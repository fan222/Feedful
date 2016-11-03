import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: "8px 10px 34px rgba(0, 0, 0, .5)",
    border: 'none',
    padding: "0"
  }
};


class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div>
        <h3>Welcome</h3>
        <button className='login/signup' onClick={this.openModal}>Log In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >
          <SessionFormContainer closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
