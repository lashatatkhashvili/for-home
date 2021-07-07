import React, { Component } from 'react';
import styles from './WizardSteps.module.scss';
import {ExpandMore} from '../icons/Icons';
import PropTypes from 'prop-types';

class WizardSteps extends Component {
  handleChange = key => {
    const { onChange } = this.props;
    if (onChange) onChange(key);
  };

  render() {
    const { steps, active } = this.props;

    return (
      <div className={styles.wrapper}>
        {steps.map((step, index) => {
          return (
            <div
              key={index}
              className={`${styles.stepWrapper} ${step.key === active ? styles.active : null}`}
              onClick={() => this.handleChange(step.key)}
            >
              <div className={styles.stepNumber}>{index + 1}</div>
              {step.key === active && <div className={styles.stepTitle}>{step.title}</div>}

              {steps.length > index + 1 && (
                <ExpandMore  className={styles.stepArrowRight} />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

WizardSteps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      title: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func,
  active: PropTypes.any,
};

export default WizardSteps;
