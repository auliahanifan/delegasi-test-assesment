import { useLoaderData } from "@remix-run/react";
import BalanceSheetInsightsComponent from "~/components/balanceSheet/insights..component";
import { getBalanceSheetInsights } from "~/services/balanceService.server";

export async function loader() {
  const insight = await getBalanceSheetInsights();
  return { insight };
}

export default function IncomeStatementInsightPage() {
  const data = useLoaderData<typeof loader>();

  return <BalanceSheetInsightsComponent data={data.insight} />;
}
