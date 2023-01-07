import { useLoaderData } from "@remix-run/react";
import IncomeStatementMainComponent from "~/components/incomeStatement/main.component";
import MainLayout from "~/layouts/main.layout";
import {
  getIncomeStatementData,
  getIncomeStatementInsights,
} from "~/services/incomeStatement.server";

export async function loader() {
  const table = await getIncomeStatementData();
  return { table };
}

export default function IncomeStatementPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <MainLayout>
      <IncomeStatementMainComponent table={data.table} indexTab={0} />
    </MainLayout>
  );
}
