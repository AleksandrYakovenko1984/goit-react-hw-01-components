import Profile from "./components/Profile";
import user from "./components/user.json";
import { GlobalStyle } from "./components/GlobalStyles";
export default function App() {
  return (
    <>
      <GlobalStyle />
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
