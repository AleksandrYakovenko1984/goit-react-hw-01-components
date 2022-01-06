import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 900px;
  overflow: auto;
  background-color: #bbe6f0;
`;
export const Description = styled.div`
  padding: 50px 0 50px 0;
  min-width: 420px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: center;
  border-bottom: 1px solid #bbe6f0;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #e9f5f7;
  min-width: 420px;
  min-height: 120px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;
export const ImgAvatar = styled.img`
  border-radius: 100px; /* Радиус скругления */
  border: 3px solid gray; /* Параметры рамки */
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.3); /* Параметры тени */
  width: 200px;
  margin-bottom: 50px;
  /* width: auto;
height: 100%;
margin: auto;
max-width: 100%;
max-height: 100%; */
`;
export const Name = styled.p`
  font-weight: bold;
  font-size: 26px;
`;
export const Tag = styled.p`
  font-weight: normal;
  font-size: 20px;
  color: gray;
`;
export const Location = styled.p`
  font-weight: normal;
  font-size: 20px;
  color: gray;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 0 15px;
  &::after {
    content: " ";
    border-right: 1px solid #000;
  }
`;

export const Label = styled.span`
  font-weight: normal;
  font-size: 20px;
  color: gray;
`;
export const Quantity = styled.span`
  font-weight: bold;
  font-size: 22px;
  color: #000;
`;
