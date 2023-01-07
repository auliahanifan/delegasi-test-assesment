export type TableDto = {
  label: string;
  value: BigInteger;
  month: string;
  details?: Array<TableDto>;
  children?: Array<TableDto>;
};
