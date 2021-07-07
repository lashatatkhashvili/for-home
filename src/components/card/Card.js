import React from 'react';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';
import CardHeader from './cardHeader/CardHeader';
import CardTitle from './cardTitle/CardTitle';
import CardBody from './cardBody/CardBody';
import CardFooter from './cardFooter/CardFooter';

const Card = props => {
  const { children, className } = props;
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

Card.propTypes = {
  className: PropTypes.string,
};

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
