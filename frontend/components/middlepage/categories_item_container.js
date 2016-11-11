import { connect } from 'react-redux';
import CategoriesItem from './categories_item';
import {createCollection, updateCollection}
        from '../../actions/collections_actions';

const mapStateToProps = (state, { params, location }) => ({
  feeds: state.feeds,
  categories: state.categories,
  categoriesId: params.catId,
  collections: state.collections,
  pageType: location.pathname.slice(6, 9)
});

const mapDispatchToProps = (dispatch) => ({
  createCollection: collection => dispatch(createCollection(collection)),
  updateCollection: collection => dispatch(updateCollection(collection))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesItem);
