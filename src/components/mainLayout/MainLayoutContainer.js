import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { closeSideMenu } from '../../reducers/sideMenu/sideMenu.actions';

const mapStateToProps = state => {
  return {
    isSideMenuOpen: state.sideMenu.isSideMenuOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeSideMenu: () => dispatch(closeSideMenu()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
