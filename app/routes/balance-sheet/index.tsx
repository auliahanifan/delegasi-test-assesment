import { useLoaderData } from "@remix-run/react";
import BalanceSheetMainComponent from "~/components/balanceSheet/main.component";
import MainLayout from "~/layouts/main.layout";
import { getBalanceSheetData } from "~/services/balanceService.server";

export async function loader() {
  const data = await getBalanceSheetData();
  return data;
}

export default function IncomeStatementPage() {
  const data = useLoaderData<typeof loader>();
  console.log(data);

  return (
    <MainLayout>
      <BalanceSheetMainComponent />
    </MainLayout>
  );
}
