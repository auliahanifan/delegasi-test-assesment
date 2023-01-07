import { useLoaderData } from "@remix-run/react";
import IncomeStatementMainComponent from "~/components/incomeStatement/main.component";
import MainLayout from "~/layouts/main.layout";
import { getIncomeStatementData } from "~/services/incomeStatement.server";

export async function loader() {
  const data = await getIncomeStatementData();
  return data;
}

export default function IncomeStatementPage() {
  const data = useLoaderData<typeof loader>();
  console.log(data);

  return (
    <MainLayout>
      <IncomeStatementMainComponent data={data} />
    </MainLayout>
  );
}
