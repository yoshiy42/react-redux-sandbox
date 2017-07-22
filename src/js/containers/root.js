import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Root from 'components/root';
import * as RootActions from 'actions/root';

const mapStateToProps = state => ({
  root: state.Root
});

const mapDispatchToProps = dispatch => ({
  rootActions: bindActionCreators(RootActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
