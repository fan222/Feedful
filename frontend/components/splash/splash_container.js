import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
