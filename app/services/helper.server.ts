import { DelegasiResponseDto } from "~/dtos/delegasiResponse.dto";
import { TableDto } from "~/dtos/table.dto";

export const CONSTANTA = {
  URL: {
    MAIN: "https://my-json-server.typicode.com/Delegasi-Tech/data-dummy",
  },
  CREDIT: {
    "depresiasi & amortisasi": true,
    "akun hutang": true,
    "kewajiban lancar lainnya": true,
    "kewajiban jangka panjang": true,
  },
};

export function mapData(data: DelegasiResponseDto): TableDto {
  const mapped: TableDto = {
    label: data.label,
    isCredit: data.label.toLowerCase() in CONSTANTA.CREDIT ? false : true,
    value: data.value,
    details:
      data.children !== undefined
        ? data.children.map(mapData)
        : data.details?.map(mapData),
    month: data.month,
  };
  return mapped;
}
