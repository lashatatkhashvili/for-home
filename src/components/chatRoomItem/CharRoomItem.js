import React from 'react';
// import styles from './ChatRoomItem.module.scss';
// import Image from '../image/Image';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import MaterialTypography from '../materialTypography/MaterialTypography';
import useStyles from './ChatRoomItem.style';
import Badge from '@material-ui/core/Badge';

const ChatRoomItem = props => {
  const { isActive, chatRoom, onClick } = props;
  const { id, userName, userAvatar, unreadCount } = chatRoom;
  const classes = useStyles();

  const handleClick = () => {
    onClick(id);
  };

  return (
    <Grid
      container
      alignItems="center"
      onClick={handleClick}
      classes={{ root: `${classes.chatRoomItem} ${isActive ? classes.active : null}` }}
    >
      <Grid item>
        <Badge
          overlap="circle"
          color="primary"
          badgeContent={unreadCount}
          classes={{ badge: classes.avatarBadge }}
          variant="dot"
        >
          <Avatar alt="avatar" src={userAvatar} classes={{ root: classes.avatar }} />
        </Badge>
      </Grid>

      <Grid item>
        <Box ml={2}>
          <MaterialTypography size="16px" weight="500">
            {userName}
          </MaterialTypography>
        </Box>
      </Grid>
    </Grid>
  );

  // return (
  //   <Grid
  //     container
  //     alignItems="center"
  //     style={{ flexWrap: 'nowrap', background: 'rgba(230, 207, 192, 0.2)', padding: '8px 22px' }}
  //     className={`${styles.chatRoomItem} ${isActive ? styles.active : null}`}
  //     onClick={handleClick}
  //   >
  //     <Grid item className={styles.chatRoomItemImageWrapper}>
  //       <Image
  //         imageUrl={userAvatar}
  //         className={styles.chatRoomItemImage}
  //         style={{ width: '45px', height: '45px', borderRadius: '50%', boxShadow: '0 0 4px 0 rgba(0,0,0,0.08)' }}
  //       />
  //       {unreadCount > 0 && <div className={styles.chatRoomItemUnread}>{unreadCount}</div>}
  //     </Grid>
  //
  //     <Grid item className={styles.chatRoomItemName}>
  //       {userName}
  //     </Grid>
  //   </Grid>
  // );
};

export default ChatRoomItem;
