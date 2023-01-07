import { Outlet } from "@remix-run/react";
import IncomeStatementMainComponent from "~/components/incomeStatement/main.component";
import MainLayout from "~/layouts/main.layout";

export default function IncomeStatementInsightPage() {
  return (
    <MainLayout>
      <IncomeStatementMainComponent indexTab={1}>
        <Outlet />
      </IncomeStatementMainComponent>
    </MainLayout>
  );
}
