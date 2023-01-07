import axios from "axios";
import { DelegasiResponseDto } from "~/dtos/delegasiResponse.dto";
import { InsightDto } from "~/dtos/insight.dto";
import { TableDto } from "~/dtos/table.dto";
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

export async function getBalanceSheetInsights(): Promise<InsightDto[]> {
  const result: InsightDto[] = [];
  // Hard Code
  // To Do: Make logic for get insights / interpretation from real balance sheet
  result.push({
    status: "ok",
    message: "Perusahaan kamu mampu menutupi kewajiban lancar dengan aman.",
    data: {
      label: "Rasio Aman",
      value: "1.5",
    },
  });

  result.push({
    status: "warning",
    message:
      "Perusahaan butuh tambahan kas untuk menutupi kewajiban jangka pendek.",
    data: {
      label: "Rasio Kas",
      value: "0.5",
    },
  });

  result.push({
    status: "danger",
    message: "Perusahaan terlalu banyak utang berbunga.",
    data: {
      label: "Debt to asset ratio ",
      value: "1.5",
    },
  });

  return result;
}
