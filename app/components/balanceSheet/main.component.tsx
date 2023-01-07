import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Center,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import { InsightDto } from "~/dtos/insight.dto";
import { TableDto } from "~/dtos/table.dto";
import InsightCardComponent from "../common/insightCard.component";
import BalanceSheetInsightsComponent from "./insights..component";
import BalanceSheetTableComponent from "./table.component";

const BalanceSheetMainComponent: FC<{ children?: ReactNode }> = (props) => {
  const [table, setTable] = useState<TableDto>(props.table);
  const [insight, setInsight] = useState<InsightDto[]>(props.insight);

  return (
    <Box width="100%" margin="5px 0px 40px 0px">
      <Box justifyContent="center">
        <Heading as="h4" size="md" textAlign="center" margin="10px 0px">
          Laporan Neraca
        </Heading>
      </Box>

      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Tabel</Tab>
          <Tab>Insights</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BalanceSheetTableComponent data={table} />
          </TabPanel>
          <TabPanel>
            <BalanceSheetInsightsComponent data={insight} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default BalanceSheetMainComponent;
