import { connect } from 'react-redux';
import { logout} from '../../actions/session_actions';
import MiddlePage from './middlepage';
import { fetchAllCollections } from '../../actions/collections_actions';
import { fetchAllArticles } from '../../actions/articles_actions';



const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
});
const mapDispatchToProps = (dispatch) => ({
    logout: user => dispatch(logout(user)),
    fetchAllCollections: () => dispatch(fetchAllCollections()),
    fetchAllArticles: () => dispatch(fetchAllArticles())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiddlePage);
