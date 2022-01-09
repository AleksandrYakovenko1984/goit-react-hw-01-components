import {
  FriendListContacts,
  Item,
  Status,
  Avatar,
  Name,
} from "./Friends.styled";

export default function FriendList({ friends, isOnline = false }) {
  return (
    <FriendListContacts>
      {friends.map((friend) => (
        <Item>
          <Status>{friends.isOnline}</Status>
          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </FriendListContacts>
  );
}
