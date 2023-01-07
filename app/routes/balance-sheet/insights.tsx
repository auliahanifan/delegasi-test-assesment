import { Outlet, useLoaderData } from "@remix-run/react";
import BalanceSheetMainComponent from "~/components/balanceSheet/main.component";
import MainLayout from "~/layouts/main.layout";
import { getBalanceSheetInsights } from "~/services/balanceService.server";

export async function loader() {
  const insight = await getBalanceSheetInsights();
  return { insight };
}

export default function BalanceSheetInsightPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <MainLayout>
      <BalanceSheetMainComponent indexTab={1}>
        <Outlet />
      </BalanceSheetMainComponent>
    </MainLayout>
  );
}
