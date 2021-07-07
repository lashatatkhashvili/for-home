import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import styles from './RoomsTableItem.module.scss';
import Image from '../image/Image';
import { Edit, DeleteOutline } from '../icons/Icons';
import AccessControl from '../../hoc/accessControl/AccessControl';
import { ADMIN, COMMUNITYMANAGER, SUPER_ADMIN } from '../../constants/roles';

class RoomsItem extends Component {
  render() {
    const {
      // t,
      room,
      onEdit,
      onRemove,
      className,
    } = this.props;

    return (
      <div className={`${styles.roomsItem} ${className}`}>
        <div className={styles.roomsItemContainer}>
          <Image imageUrl={room.image} className={styles.roomsTableItemImage} />
          <div className={styles.roomsItemDescription}>
            <span className={styles.roomTableItemDescription}>{room.name}</span>

            <div className={styles.roomsItemButtons}>
              <AccessControl allowedRoles={[SUPER_ADMIN, ADMIN, COMMUNITYMANAGER]}>
                <Edit style={{ fontSize: 18, color: '#fff' }} className={styles.editIcon} onClick={onEdit} />
              </AccessControl>

              <AccessControl allowedRoles={[SUPER_ADMIN, ADMIN, COMMUNITYMANAGER]}>
                <DeleteOutline
                  style={{ fontSize: 18, color: '#fff' }}
                  className={styles.deleteIcon}
                  onClick={onRemove}
                />
              </AccessControl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation('translations')(withRouter(RoomsItem));
