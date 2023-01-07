import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import { InsightDto } from "~/dtos/insight.dto";
import { TableDto } from "~/dtos/table.dto";
import IncomeStatementInsightsComponent from "./insights.component";
import IncomeStatementTableComponent from "./table.component";

const IncomeStatementMainComponent: FC<{ children?: ReactNode }> = (props) => {
  const [table, setTable] = useState<TableDto>(props.table);
  const [insight, setInsight] = useState<InsightDto[]>(props.insight);

  return (
    <Box width="100%" margin="5px 0px 40px 0px">
      <Box justifyContent="center">
        <Heading as="h4" size="md" textAlign="center" margin="10px 0px">
          Laporan Laba Rugi
        </Heading>
      </Box>

      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Tabel</Tab>
          <Tab>Insights</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <IncomeStatementTableComponent data={table} />
          </TabPanel>
          <TabPanel>
            <IncomeStatementInsightsComponent data={insight} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default IncomeStatementMainComponent;
