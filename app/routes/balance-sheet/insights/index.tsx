import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BalanceSheetInsightsComponent from "~/components/balanceSheet/insights.component";
import { getBalanceSheetInsights } from "~/services/balanceService.server";

async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const filterStatus = url.searchParams.get("status");
  const insight = await getBalanceSheetInsights(filterStatus);
  return { insight, filterStatus };
}

export default function BalanceSheetInsightOutletPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <BalanceSheetInsightsComponent
      data={data.insight}
      filterStatus={`${data.filterStatus}`}
    />
  );
}
