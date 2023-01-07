import { Box, Center, Spinner, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { useState } from "react";
import type { InsightDto } from "~/dtos/insight.dto";
import InsightCardComponent from "../common/insightCard/main.component";

const BalanceSheetInsightsComponent: FC<{ data?: InsightDto[] }> = (props) => {
  const [data, setData] = useState<InsightDto[] | undefined | null>(
    props?.data
  );

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
      {data.map((insight) => (
        <InsightCardComponent data={insight} />
      ))}
    </Box>
  );
};

export default BalanceSheetInsightsComponent;
