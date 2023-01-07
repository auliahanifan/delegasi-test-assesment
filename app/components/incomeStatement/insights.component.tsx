import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { useState } from "react";
import type { InsightDto } from "~/dtos/insight.dto";
import InsightCardComponent from "../common/insightCard/main.component";

const IncomeStatementInsightsComponent: FC<{ data: InsightDto[] }> = (
  props
) => {
  const [data, setData] = useState<InsightDto[]>(props.data);

  if (data === undefined) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  } else if (data == null) {
    return <Text> Can't fetch data </Text>;
  }

  return (
    <Box width="100%">
      {data.map((insight) => (
        <InsightCardComponent data={insight} />
      ))}
    </Box>
  );
};

export default IncomeStatementInsightsComponent;
