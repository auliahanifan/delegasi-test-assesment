import axios from "axios";
import { DelegasiResponseDto } from "~/dtos/delegasiResponse.dto";
import { TableDto } from "~/dtos/table.dto";
import { CONSTANTA, mapData } from "./helper.server";

const INCOME_STATEMENT_URL = `${CONSTANTA.URL.MAIN}/laporan_laba_rugi`;

export async function getIncomeStatementData(): Promise<TableDto> {
  const response = await axios.get<DelegasiResponseDto>(INCOME_STATEMENT_URL);

  return mapData(response.data);
}
