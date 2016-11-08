import { connect } from 'react-redux';
import { logout} from '../../actions/session_actions';
import MiddlePage from './middlepage';
import { fetchAllCollections } from '../../actions/collections_actions';



const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
});
const mapDispatchToProps = (dispatch) => ({
    logout: user => dispatch(logout(user)),
    fetchAllCollections: () => dispatch(fetchAllCollections())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiddlePage);
