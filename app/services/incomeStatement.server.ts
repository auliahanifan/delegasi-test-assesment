import axios from "axios";
import { DelegasiResponseDto } from "~/dtos/delegasiResponse.dto";
import { InsightDto } from "~/dtos/insight.dto";
import { TableDto } from "~/dtos/table.dto";
import { CONSTANTA, mapIncomeStatementData } from "./helper.server";

const INCOME_STATEMENT_URL = `${CONSTANTA.URL.MAIN}/laporan_laba_rugi`;

export async function getIncomeStatementData(): Promise<TableDto> {
  const response = await axios.get<DelegasiResponseDto>(INCOME_STATEMENT_URL);

  return mapIncomeStatementData(response.data);
}

export async function getIncomeStatementInsights(): Promise<InsightDto[]> {
  const result: InsightDto[] = [];
  // Hard Code
  // To Do: Make logic for get insights / interpretation from real balance sheet
  result.push({
    status: "ok",
    message: "Perusahaan kamu dalam posisi untung.",
    data: {
      label: "Keuntungan",
      value: "Rp 150.0000",
    },
  });
  result.push({
    status: "warning",
    message: "HPP saat ini 54%, yuk turunkan",
    data: {
      label: "Persentase HPP Aman",
      value: "55%",
    },
  });

  result.push({
    status: "danger",
    message: "Diskon kamu terlalu besar!",
    data: {
      label: "Pesentase Diskon ",
      value: "40%",
    },
  });

  return result;
}
