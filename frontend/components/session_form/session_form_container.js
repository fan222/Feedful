import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {

  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
