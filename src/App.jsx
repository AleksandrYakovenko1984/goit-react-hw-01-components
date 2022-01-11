import { GlobalStyle } from "./components/GlobalStyles";

import user from "./components/Data/user.json";
import data from "./components/Data/data.json";
import friends from "./components/Data/friends.json";
import transactions from "./components/Data/transactions.json";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friends/Friends";
import TransactionHistory from "./components/Transactions/Transactions";

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

      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
