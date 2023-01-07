import { useLoaderData } from "@remix-run/react";
import BalanceSheetMainComponent from "~/components/balanceSheet/main.component";
import MainLayout from "~/layouts/main.layout";
import {
  getBalanceSheetData,
  getBalanceSheetInsights,
} from "~/services/balanceService.server";

export async function loader() {
  const table = await getBalanceSheetData();
  const insight = await getBalanceSheetInsights();
  return { table, insight };
}

export default function IncomeStatementPage() {
  const data = useLoaderData<typeof loader>();
  console.log(data);

  return (
    <MainLayout>
      <BalanceSheetMainComponent table={data.table} insight={data.insight} />
    </MainLayout>
  );
}
