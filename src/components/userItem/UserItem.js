import React from 'react';
import styles from './UserItem.module.scss';
import PropTypes from 'prop-types';
import Image from '../image/Image';

const UserItem = props => {
  const {
    user: {
      // id, userId,
      avatar,
      name,
      email,
    },
  } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image imageUrl={avatar} className={styles.avatar} />
      </div>
      <div className={styles.content}>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default UserItem;
