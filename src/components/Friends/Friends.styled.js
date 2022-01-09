import styled from "styled-components";

export const FriendListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const Item = styled.li`
  padding: 10px 10px 10px 30px;
  max-width: 500px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: yellow;
  }
`;
