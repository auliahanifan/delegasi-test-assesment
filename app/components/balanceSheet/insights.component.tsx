import { Box, Center, Select, Spinner, Text } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import type { InsightDto } from "~/dtos/insight.dto";
import InsightCardComponent from "../common/insightCard/main.component";

const BalanceSheetInsightsComponent: FC<{
  data: InsightDto[];
  filterStatus: string;
}> = (props) => {
  let navigate = useNavigate();

  const [data, setData] = useState<InsightDto[] | undefined | null>(
    props?.data
  );
  const [filterStatus, setFilterStatus] = useState(props.filterStatus);

  const [statuses, setStatuses] = useState<{ label: string; value: string }[]>([
    { label: "Tampilkan Semua Insight", value: "null" },
    { label: "Tampilkan Insight Aman", value: "ok" },
    { label: "Tampilkan Insight Hati-hati", value: "warning" },
    { label: "Tampilkan Insight Bahaya", value: "danger" },
  ]);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const onChangeStatus = (newVal: string) => {
    setFilterStatus(newVal);
    setData([]);

    const BASE_ROUTE: string = "/balance-sheet/insights";

    switch (newVal) {
      case "null":
        navigate(BASE_ROUTE);
        break;
      default:
        navigate(`${BASE_ROUTE}?status=${newVal}`);
        break;
    }
  };

  if (data == undefined) {
    return (
      <Box>
        <Center>
          <Spinner size="xl" />
        </Center>
      </Box>
    );
  } else if (data == null) {
    return (
      <Box>
        <Text> Can't fetch data </Text>
      </Box>
    );
  }
  return (
    <Box width="100%">
      <Select
        margin="0px 5px 10px 5px"
        value={filterStatus}
        onChange={(e) => onChangeStatus(e.target.value)}
      >
        {statuses.map((data) => (
          <option value={data.value}>{data.label}</option>
        ))}
      </Select>
      {data.length === 0 ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : null}
      {data.map((insight) => (
        <InsightCardComponent data={insight} />
      ))}
    </Box>
  );
};

export default BalanceSheetInsightsComponent;
