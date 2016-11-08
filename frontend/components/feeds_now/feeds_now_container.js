import { connect } from 'react-redux';
import FeedsNow from './feeds_now';

const mapStateToProps = (state) => ({
  feeds: state.feeds
});


const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsNow);
