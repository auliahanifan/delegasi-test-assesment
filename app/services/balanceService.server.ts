import axios from "axios";
import type { DelegasiResponseDto } from "~/dtos/delegasiResponse.dto";
import type { InsightDto } from "~/dtos/insight.dto";
import type { TableDto } from "~/dtos/table.dto";
import { LAPORAN_NERACA_JSON } from "./dummy.server";
import { CONSTANTA, mapBalanceSheetData } from "./helper.server";

const BALANCE_SHEET_URL = `${CONSTANTA.URL.MAIN}/laporan_neraca`;

export async function getBalanceSheetData(): Promise<TableDto> {
  return axios
    .get<DelegasiResponseDto>(BALANCE_SHEET_URL)
    .then((res) => mapBalanceSheetData(res.data))
    .catch((err) => {
      console.error(err);
      return mapBalanceSheetData(LAPORAN_NERACA_JSON);
    });
}

export async function getBalanceSheetInsights(
  filterStatus: string | null
): Promise<InsightDto[]> {
  const result: InsightDto[] = [];
  // Hard Code
  // To Do: Make logic for get insights / interpretation from real balance sheet
  if (filterStatus === null || filterStatus === "ok") {
    result.push({
      status: "ok",
      message: "Perusahaan kamu mampu menutupi kewajiban lancar dengan aman.",
      messageHtml: "",
      data: {
        label: "Rasio Aman",
        value: "1.5",
      },
    });
  }

  if (filterStatus === null || filterStatus === "warning") {
    result.push({
      status: "warning",
      message:
        "Perusahaan butuh tambahan kas untuk menutupi kewajiban jangka pendek.",
      messageHtml: "",
      data: {
        label: "Rasio Kas",
        value: "0.5",
      },
    });
  }

  if (filterStatus === null || filterStatus === "danger") {
    result.push({
      status: "danger",
      message: "Perusahaan terlalu banyak utang berbunga.",
      messageHtml: "",
      data: {
        label: "Debt to asset ratio ",
        value: "1.5",
      },
    });
  }

  return result.map((data) => {
    data.messageHtml = data.message;
    return data;
  });
}
