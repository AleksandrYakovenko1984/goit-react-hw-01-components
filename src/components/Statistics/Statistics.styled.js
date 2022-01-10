import styled from "styled-components";

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  max-width: 350px;
  box-shadow: 9px -10px 7px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.5);
    transition-duration: 1500ms;
  }
`;

export const Title = styled.h2`
  padding: 19px 73px;
  margin-left: auto;
  margin-right: auto;
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

  &.green {
    background-color: green;
  }
  &.red {
    background-color: red;
  }
`;

export const Label = styled.span`
  color: #ffffff;
`;

export const Percentage = styled.span`
  color: #ffffff;
  font-size: 24px;
`;
