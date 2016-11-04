import { connect } from 'react-redux';
import { logout} from '../../actions/session_actions';
import MiddlePage from './middlepage';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
});

const mapDispatchToProps = (dispatch) => ({
    logout: user => dispatch(logout(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiddlePage);
