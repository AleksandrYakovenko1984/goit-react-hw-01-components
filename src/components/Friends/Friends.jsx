import { FriendListContacts, Item } from "./Friends.styled";

export default function FriendList({ friends }) {
  return (
    <FriendListContacts>
      {friends.map((friend) => (
        <Item>
          <span class="status">{friends.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friend.name}</p>
        </Item>
      ))}
    </FriendListContacts>
  );
}
