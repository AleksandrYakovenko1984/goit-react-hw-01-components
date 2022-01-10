import {
  FriendListContacts,
  Item,
  Status,
  Avatar,
  Name,
} from "./Friends.styled";

export default function FriendList({ friends }) {
  console.log(friends[1].isOnline);
  return (
    <FriendListContacts>
      {friends.map((friend) => (
        <Item>
          <Status className={friend.isOnline ? "green" : "red"}>
            {friend.isOnline}
          </Status>

          <Avatar src={friend.avatar} alt="User avatar" width="48" />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </FriendListContacts>
  );
}
