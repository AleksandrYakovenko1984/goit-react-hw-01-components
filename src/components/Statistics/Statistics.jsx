import {
  StatisticsSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from "./Statistics.styled";
import PropTypes from "prop-types";

export default function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} className={percentage > 17 ? "green" : "red"}>
            <Label>{label}</Label>
            <Percentage>{percentage} %</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  isOpen: PropTypes.bool,
  searchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
