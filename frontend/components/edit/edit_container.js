import {connect} from 'react-redux';
import Edit from './edit';
import {createCollection, updateCollection, deleteCollection}
        from '../../actions/collections_actions';

const mapStateToProps = ({feeds, collections}) => ({
  feeds: feeds,
  collections: collections
});

const mapDispatchToProps = dispatch => ({
  updateCollection: collection => dispatch(updateCollection(collection)),
  deleteCollection: collection => dispatch(deleteCollection(collection))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
