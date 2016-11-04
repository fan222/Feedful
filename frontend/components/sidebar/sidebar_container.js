import {connect} from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
