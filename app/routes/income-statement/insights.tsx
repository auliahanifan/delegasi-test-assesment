import { Outlet, useLoaderData } from "@remix-run/react";
import IncomeStatementMainComponent from "~/components/incomeStatement/main.component";
import MainLayout from "~/layouts/main.layout";
import { getBalanceSheetInsights } from "~/services/balanceService.server";

export async function loader() {
  const insight = await getBalanceSheetInsights();
  return { insight };
}

export default function IncomeStatementInsightPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <MainLayout>
      <IncomeStatementMainComponent indexTab={1}>
        <Outlet />
      </IncomeStatementMainComponent>
    </MainLayout>
  );
}
