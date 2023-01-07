import { DelegasiResponseDto } from "~/dtos/delegasiResponse.dto";
import { TableDto } from "~/dtos/table.dto";

export const CONSTANTA = {
  URL: {
    MAIN: "https://my-json-server.typicode.com/Delegasi-Tech/data-dummy",
  },
  CREDIT: {
    BALANCE_SHEET: {
      "depresiasi & amortisasi": true,
      "akun hutang": true,
      "kewajiban lancar lainnya": true,
      "kewajiban jangka panjang": true,
    },
    INCOME_STATEMENT: {
      "diskon penjualan": true,
      refund: true,
      "harga pokok penjualan": true,
      beban: true,
      "biaya sewa": true,
      listrik: true,
      "beban lainnya": true,
      "beban pajak": true,
    },
  },
};
export function mapBalanceSheetData(data: DelegasiResponseDto): TableDto {
  return mapData(data, CONSTANTA.CREDIT.BALANCE_SHEET);
}
export function mapIncomeStatementData(data: DelegasiResponseDto): TableDto {
  return mapData(data, CONSTANTA.CREDIT.INCOME_STATEMENT);
}

export function mapData(
  data: DelegasiResponseDto,
  creditObject: object
): TableDto {
  const mapped: TableDto = {
    label: data.label,
    isCredit: data.label.toLowerCase() in creditObject ? false : true,
    value: data.value,
    details:
      data.children !== undefined
        ? data.children.map((data) => mapData(data, creditObject))
        : data.details?.map((data) => mapData(data, creditObject)),
    month: data.month,
  };
  return mapped;
}
