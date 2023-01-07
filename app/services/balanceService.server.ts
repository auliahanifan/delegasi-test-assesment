import axios from "axios";
import { DelegasiResponseDto } from "~/dtos/delegasiResponse.dto";
import { TableDto } from "~/dtos/table.dto";
import { CONSTANTA, mapBalanceSheetData } from "./helper.server";

const BALANCE_SHEET_URL = `${CONSTANTA.URL.MAIN}/laporan_neraca`;

export async function getBalanceSheetData(): Promise<TableDto> {
  const response = await axios.get<DelegasiResponseDto>(BALANCE_SHEET_URL);

  return mapBalanceSheetData(response.data);
}
