import { connect } from 'react-redux';
import FeedDetail from './feeddetail';

const mapStateToProps = (state, { params, location }) => ({
  feeds: state.feeds[params.feedId]
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedDetail);
