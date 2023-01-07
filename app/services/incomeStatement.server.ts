import axios from "axios";
import { TableDto } from "~/dtos/table.dto";
import helper from "./helper.server";

const INCOME_STATEMENT_URL = `${helper.url.main}/laporan_laba_rugi`;

export function getIncomeStatementData(): Promise<TableDto> {
  return axios.get<TableDto>(INCOME_STATEMENT_URL).then((data) => data.data);
}
