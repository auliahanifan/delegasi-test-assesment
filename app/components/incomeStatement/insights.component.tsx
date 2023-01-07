import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";
import { useState } from "react";
import type { InsightDto } from "~/dtos/insight.dto";
import InsightCardComponent from "../common/insightCard/main.component";

const IncomeStatementInsightsComponent: FC<{ data: InsightDto[] }> = (
  props
) => {
  const [data, setData] = useState<InsightDto[]>(props.data);

  return (
    <Box>
      {data !== undefined ? (
        <Box width="100%">
          {data.map((insight) => (
            <InsightCardComponent data={insight} />
          ))}
        </Box>
      ) : data == null ? (
        <Text> Can't fetch data </Text>
      ) : (
        <Center>
          <Spinner size="xl" />
        </Center>
      )}
    </Box>
  );
};

export default IncomeStatementInsightsComponent;
