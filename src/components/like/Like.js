import React from 'react';

import styles from './Like.module.scss';

const Like = props => {
  const { isLiked, onLike } = props;

  return (
    <div className={styles.likeWrapper} onClick={onLike}>
      <i className={isLiked ? styles.liked : styles.notliked} />
      <span className={styles.like}>Like</span>
    </div>
  );
};

export default Like;
