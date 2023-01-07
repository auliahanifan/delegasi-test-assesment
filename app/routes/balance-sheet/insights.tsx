import { Outlet } from "@remix-run/react";
import BalanceSheetMainComponent from "~/components/balanceSheet/main.component";
import MainLayout from "~/layouts/main.layout";

export default function BalanceSheetInsightPage() {
  return (
    <MainLayout>
      <BalanceSheetMainComponent indexTab={1}>
        <Outlet />
      </BalanceSheetMainComponent>
    </MainLayout>
  );
}
