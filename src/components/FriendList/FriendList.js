import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
          {isOnline ? (
            <span className={css.status}>{isOnline}</span>
          ) : (
            <span className={css.isOffline}>{isOnline}</span>
          )}
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
