import React from 'react';
import PropTypes from 'prop-types';
import * as franc from 'franc';
// import ReactDOMServer from 'react-dom/server';
import {
  // extractContent,
  extractTextFromElement,
  isRTL,
} from '../../utils/helpers';

const AutoDirection = props => {
  const { component: Component, children, ...rest } = props;
  const childrenText = extractTextFromElement(children);
  const language = franc(childrenText);

  const isTextRTL = isRTL(language);
  return (
    <Component {...rest} dir={isTextRTL ? 'rtl' : 'ltr'}>
      {children}
    </Component>
  );
};

AutoDirection.defaultProps = {
  component: 'div',
};

AutoDirection.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
};

export default AutoDirection;
