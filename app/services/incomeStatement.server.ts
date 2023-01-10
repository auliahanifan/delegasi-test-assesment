import axios from "axios";
import type { DelegasiResponseDto } from "~/dtos/delegasiResponse.dto";
import type { InsightDto } from "~/dtos/insight.dto";
import type { TableDto } from "~/dtos/table.dto";
import { LAPORAN_LABA_RUGI_JSON } from "./dummy.server";
import { CONSTANTA, mapIncomeStatementData } from "./helper.server";

const INCOME_STATEMENT_URL = `${CONSTANTA.URL.MAIN}/laporan_laba_rugi`;

export async function getIncomeStatementData(): Promise<TableDto> {
  return axios
    .get<DelegasiResponseDto>(INCOME_STATEMENT_URL)
    .then((res) => mapIncomeStatementData(res.data))
    .catch((err) => {
      console.error(err);
      return mapIncomeStatementData(LAPORAN_LABA_RUGI_JSON);
    });
}

export async function getIncomeStatementInsights(
  filterStatus: string | null
): Promise<InsightDto[]> {
  const result: InsightDto[] = [];
  // Hard Code
  // To Do: Make logic for get insights / interpretation from real balance sheet
  if (filterStatus === null || filterStatus === "ok") {
    result.push({
      status: "ok",
      message: "Perusahaan kamu dalam posisi untung.",
      messageHtml: "",
      data: {
        label: "Keuntungan",
        value: "Rp 150.0000",
      },
    });
  }

  if (filterStatus == null || filterStatus === "warning") {
    result.push({
      status: "warning",
      message: "HPP saat ini 54%, yuk turunkan",
      messageHtml: "",
      data: {
        label: "Persentase HPP Aman",
        value: "55%",
      },
    });
  }

  if (filterStatus == null || filterStatus === "danger") {
    result.push({
      status: "danger",
      message: "Diskon kamu terlalu besar!",
      messageHtml: "",
      data: {
        label: "Pesentase Diskon ",
        value: "40%",
      },
    });
  }

  return result.map((data) => {
    data.messageHtml = data.message;
    return data;
  });
}
