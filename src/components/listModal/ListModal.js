import React from 'react';
import styles from './ListModal.module.scss';
import Modal from '../modal/Modal';
import Card from '../card/Card';
import CloseButton from '../modal/closeButton/CloseButton';
import PropTypes from 'prop-types';

const ListModal = props => {
  const { title, isOpen, onRequestClose, items, renderItem, isFetching } = props;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Card className={styles.card}>
        <Card.Header className={styles.cardHeader}>
          <Card.Title size="medium">{title}:</Card.Title>
          <CloseButton onClick={onRequestClose} />
        </Card.Header>
        <Card.Body className={styles.cardBody}>
          {isFetching && <p>Loading...</p>}

          {items.map((item, key) => {
            return (
              <div key={key} className={styles.reactionItemWrapper}>
                {renderItem(item)}
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </Modal>
  );
};

ListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  items: PropTypes.array,
  renderItem: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default ListModal;
