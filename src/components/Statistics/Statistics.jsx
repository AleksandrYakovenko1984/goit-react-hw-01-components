import {
  StatisticsSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      <Title>{title}</Title>

      <StatList>
        {stats.map((el) => (
          <Item className={el.percentage > 17 ? "green" : "red"}>
            <Label>{el.label}</Label>
            <Percentage>{el.percentage} %</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
}
