import {
  StatisticsSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled";

export default function Statistics({ title, stats }) {
  console.log(stats);
  return (
    <StatisticsSection>
      <Title>{title}</Title>

      <StatList>
        {stats.map((el) => (
          <Item>
            <Label>{el.label}</Label>
            <Percentage>{el.percentage} %</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
}
