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
  display: flex;
  align-items: center;
  &:hover {
    background-color: #b2d6f7;
    box-shadow: 12px 12px 10px 4px rgba(0, 0, 0, 0.5);
  }
`;
export const Status = styled.span`
  &::before {
    content: " ";
    background-color: red;
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 100%;
  }
`;
export const Avatar = styled.img`
  outline: 2px solid #78adde;
  border-radius: 6px;
  margin: 0 10px 0 10px;
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
`;
