import styled from "styled-components";

export const TransactionHistoryTable = styled.table`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const HeaderContainer = styled.thead``;
export const TableHeadStroke = styled.tr`
  display: flex;

  background-color: #038cfc;
  min-height: 50px;
  align-items: center;
`;
export const HeadItem = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  outline: 1px solid #ffffff;
  min-height: 50px;
  flex-basis: calc(100% / 3);
  text-transform: uppercase;
  font-size: 20px;
`;
export const TransactionContainer = styled.tbody``;

export const TableStroke = styled.tr`
  display: flex;

  background-color: #dfebf5;
  min-height: 50px;
  align-items: center;
  &:hover {
    background-color: #b3d6f2;
  }
`;
export const TableItem = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5e6266;
  outline: 1px solid #ffffff;
  min-height: 50px;
  flex-basis: calc(100% / 3);
  font-size: 20px;
`;
