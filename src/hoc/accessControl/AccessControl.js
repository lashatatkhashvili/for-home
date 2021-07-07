import React from 'react';
import PropTypes from 'prop-types';
import * as roles from '../../constants/roles';
import { selectRoleId } from '../../reducers/auth/auth.selectors';
import { connect } from 'react-redux';

const AccessControl = props => {
  const { allowedRoles, roleId, children } = props;

  return !allowedRoles || allowedRoles.includes(roleId) ? children : null;
};

AccessControl.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.oneOf(Object.values(roles))),
  children: PropTypes.element,
};

const mapStateToProps = state => {
  return {
    roleId: selectRoleId(state),
  };
};

export default connect(mapStateToProps)(AccessControl);
