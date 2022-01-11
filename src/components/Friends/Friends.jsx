import {
  FriendListContacts,
  Item,
  Status,
  Avatar,
  Name,
} from "./Friends.styled";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <FriendListContacts>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <Item key={id}>
          <Status className={isOnline ? "green" : "red"}>{isOnline}</Status>

          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </Item>
      ))}
    </FriendListContacts>
  );
}

FriendList.propTypes = {
  isOpen: PropTypes.bool,
  searchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
