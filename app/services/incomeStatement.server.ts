import axios from "axios";
import { DelegasiResponseDto } from "~/dtos/delegasiResponse.dto";
import helper from "./helper.server";

const INCOME_STATEMENT_URL = `${helper.url.main}/laporan_laba_rugi`;

export function getIncomeStatementData(): Promise<DelegasiResponseDto> {
  return axios
    .get<DelegasiResponseDto>(INCOME_STATEMENT_URL)
    .then((res) => res.data);
}
