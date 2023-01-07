import { useLoaderData } from "@remix-run/react";
import IncomeStatementMainComponent from "~/components/incomeStatement/main.component";
import MainLayout from "~/layouts/main.layout";
import {
  getIncomeStatementData,
  getIncomeStatementInsights,
} from "~/services/incomeStatement.server";

export async function loader() {
  const table = await getIncomeStatementData();
  const insight = await getIncomeStatementInsights();
  return { table, insight };
}

export default function IncomeStatementPage() {
  const data = useLoaderData<typeof loader>();
  console.log(data);

  return (
    <MainLayout>
      <IncomeStatementMainComponent table={data.table} insight={data.insight} />
    </MainLayout>
  );
}
