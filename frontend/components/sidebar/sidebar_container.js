import {connect} from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ({session, feeds, collections}) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
  feeds: feeds,
  collections: collections
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
