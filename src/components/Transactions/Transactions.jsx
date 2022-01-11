import {
  TransactionHistoryTable,
  HeaderContainer,
  TableHeadStroke,
  HeadItem,
  TransactionContainer,
  TableStroke,
  TableItem,
} from "./Transactions.styled";
import PropTypes from "prop-types";

export default function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <HeaderContainer>
        <TableHeadStroke>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </TableHeadStroke>
      </HeaderContainer>

      <TransactionContainer>
        {items.map(({ id, type, amount, currency }) => (
          <TableStroke key={id}>
            <TableItem>{type}</TableItem>
            <TableItem>{amount}</TableItem>
            <TableItem>{currency}</TableItem>
          </TableStroke>
        ))}
      </TransactionContainer>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  isOpen: PropTypes.bool,
  searchable: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
