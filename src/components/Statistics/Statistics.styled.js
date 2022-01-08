import styled from "styled-components";

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 350px;
  outline: 1px solid tomato;
`;

export const Title = styled.h2`
  padding: 19px 73px;

  font-weight: bold;
  text-transform: uppercase;
  background-color: #ffffff;
`;

export const StatList = styled.ul`
  background-color: blue;
  display: flex;
  min-width: 100%;
`;

export const Item = styled.li`
  min-height: 70px;
  flex-basis: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 1px solid red;
`;

export const Label = styled.span`
  color: #ffffff;
`;

export const Percentage = styled.span`
  color: #ffffff;
  font-size: 24px;
`;
