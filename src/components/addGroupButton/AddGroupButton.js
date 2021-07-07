import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './AddGroupButton.module.scss';
import { Add } from '../icons/Icons';

class AddGroupButton extends Component {
  render() {
    const { className, iconWidth, iconHeight, ...rest } = this.props;

    return (
      <div className={`${styles.addGroupButton} ${className}`} {...rest}>
        <Add style={{ fontSize: iconWidth }} />
      </div>
    );
  }
}

AddGroupButton.propTypes = {
  className: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
};

export default AddGroupButton;
