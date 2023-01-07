import { useLoaderData } from "@remix-run/react";
import IncomeStatementInsightsComponent from "~/components/incomeStatement/insights.component";
import { getIncomeStatementInsights } from "~/services/incomeStatement.server";

export async function loader() {
  const insight = await getIncomeStatementInsights();
  return { insight };
}

export default function IncomeStatementInsightOutletPage() {
  const data = useLoaderData<typeof loader>();

  return <IncomeStatementInsightsComponent data={null} />;
}
