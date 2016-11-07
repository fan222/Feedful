import { connect } from 'react-redux';
import CollectionIndex from './collection_index';

const mapStateToProps = (state, { params, location }) => ({
  feeds: state.feeds,
  collection: state.collections[params.colId]
});


const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionIndex);
