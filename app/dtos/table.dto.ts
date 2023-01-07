export type TableDto = {
  label: string;
  value: number;
  month: string;
  details: Array<TableDto>;
  isCredit: boolean;
};
