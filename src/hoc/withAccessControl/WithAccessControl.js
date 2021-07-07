import React from 'react';
import { connect } from 'react-redux';
import { selectRoleId } from '../../reducers/auth/auth.selectors';
import PropTypes from 'prop-types';
import * as roles from '../../constants/roles';

const withAccessControl = allowedRoles => {
  return WrappedComponent => {
    const DummyComponentForRedux = props => {
      const { roleId, ...restProps } = props;

      return !allowedRoles || allowedRoles.includes(roleId) ? <WrappedComponent {...restProps} /> : null;
    };

    const mapStateToProps = state => {
      return {
        roleId: selectRoleId(state),
      };
    };

    return connect(mapStateToProps)(DummyComponentForRedux);
  };
};

withAccessControl.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.oneOf(Object.values(roles))),
};

export default withAccessControl;

// withAccessControl([ADMIN, HR, COMMUNITYMANAGER])(SomeComponentToWrap);
