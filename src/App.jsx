import Profile from "./components/Profile/Profile";
import user from "./components/user.json";
import { GlobalStyle } from "./components/GlobalStyles";

import data from "./components/data.json";
import Statistics from "./components/Statistics/Statistics";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
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
