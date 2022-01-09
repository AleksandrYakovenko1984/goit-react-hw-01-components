import { GlobalStyle } from "./components/GlobalStyles";
import user from "./components/user.json";
import data from "./components/data.json";
import friends from "./components/friends.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friends/Friends";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
}
