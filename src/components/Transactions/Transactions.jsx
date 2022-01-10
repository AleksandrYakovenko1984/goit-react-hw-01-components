import {
  TransactionHistoryTable,
  HeaderContainer,
  TableHeadStroke,
  HeadItem,
  TransactionContainer,
  TableStroke,
  TableItem,
} from "./Transactions.styled";

export default function TransactionHistory({ items }) {
  console.log(items);
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
        {items.map((item) => (
          <TableStroke key={item.id}>
            <TableItem>{item.type}</TableItem>
            <TableItem>{item.amount}</TableItem>
            <TableItem>{item.currency}</TableItem>
          </TableStroke>
        ))}
      </TransactionContainer>
    </TransactionHistoryTable>
  );
}
