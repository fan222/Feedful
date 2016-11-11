import {connect} from 'react-redux';
import Edit from './edit';

const mapStateToProps = ({feeds, collections}) => ({
  feeds: feeds,
  collections: collections
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
