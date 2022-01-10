import styled from "styled-components";

export const FriendListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 40px;
  align-items: center;
`;
export const Item = styled.li`
  padding: 10px 10px 10px 30px;
  min-width: 500px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  &:hover {
    background-color: #b2d6f7;
    box-shadow: 12px 12px 10px 4px rgba(0, 0, 0, 0.5);
  }
`;
export const Status = styled.span`
  & {
    width: 20px;
    height: 20px;
    display: block;
    border-radius: 100%;
  }
  &.green {
    background-color: green;
  }
  &.red {
    background-color: red;
  }
`;
export const Avatar = styled.img`
  outline: 1px solid #fff;
  border-radius: 6px;
  margin: 0 10px 0 10px;
  box-shadow: 9px 9px 7px 2px rgba(0, 0, 0, 0.3);
`;
export const Name = styled.p`
  font-size: 22px;
  font-weight: bold;
`;
