import { useLoaderData } from "@remix-run/react";
import BalanceSheetMainComponent from "~/components/balanceSheet/main.component";
import MainLayout from "~/layouts/main.layout";
import { getBalanceSheetData } from "~/services/balanceService.server";

export async function loader() {
  const table = await getBalanceSheetData();
  return { table };
}

export default function IncomeStatementPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <MainLayout>
      <BalanceSheetMainComponent table={data.table} indexTab={0} />
    </MainLayout>
  );
}
