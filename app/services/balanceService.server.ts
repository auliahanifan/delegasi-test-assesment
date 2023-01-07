import axios from "axios";
import { TableDto } from "~/dtos/table.dto";
import helper from "./helper.server";

const BALANCE_SHEET_URL = `${helper.url.main}/laporan_neraca`;

export function getBalanceSheetData(): Promise<TableDto> {
  return axios.get<TableDto>(BALANCE_SHEET_URL).then((data) => data.data);
}
