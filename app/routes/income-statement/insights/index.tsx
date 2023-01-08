import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import IncomeStatementInsightsComponent from "~/components/incomeStatement/insights.component";
import { getIncomeStatementInsights } from "~/services/incomeStatement.server";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const filterStatus = url.searchParams.get("status");
  const insight = await getIncomeStatementInsights(filterStatus);
  return { insight, filterStatus };
}

export default function IncomeStatementInsightOutletPage() {
  const dataLoader = useLoaderData<typeof loader>();

  return (
    <IncomeStatementInsightsComponent
      data={dataLoader.insight}
      filterStatus={`${dataLoader.filterStatus}`}
    />
  );
}
