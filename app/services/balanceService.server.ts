import axios from "axios";
import { DelegasiResponseDto } from "~/dtos/delegasiResponse.dto";
import { TableDto } from "~/dtos/table.dto";
import helper from "./helper.server";

const BALANCE_SHEET_URL = `${helper.url.main}/laporan_neraca`;

function mapData(data: DelegasiResponseDto): TableDto {
  const mapped: TableDto = {
    label: data.label,
    isCredit: data.label.toLowerCase() in helper.credit ? false : true,
    value: data.value,
    details:
      data.children !== undefined
        ? data.children.map(mapData)
        : data.details?.map(mapData),
    month: data.month,
  };
  return mapped;
}

export async function getBalanceSheetData(): Promise<TableDto> {
  const response = await axios.get<DelegasiResponseDto>(BALANCE_SHEET_URL);

  return mapData(response.data);
}
