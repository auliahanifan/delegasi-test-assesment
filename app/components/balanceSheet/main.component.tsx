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
  CircularProgress,
} from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import { FC, ReactNode, useState } from "react";
import { InsightDto } from "~/dtos/insight.dto";
import { TableDto } from "~/dtos/table.dto";
import BalanceSheetTableComponent from "./table.component";

const BalanceSheetMainComponent: FC<{ children?: ReactNode }> = (props) => {
  const [table, setTable] = useState<TableDto>(props?.table);
  const [insight, setInsight] = useState<InsightDto[]>(props?.insight);
  const [indexTab, setIndexTab] = useState<number>(props?.indexTab);
  let navigate = useNavigate();

  return (
    <Box width="100%" margin="5px 0px 40px 0px">
      <Box justifyContent="center">
        <Heading as="h4" size="md" textAlign="center" margin="10px 0px">
          Laporan Neraca
        </Heading>
      </Box>

      <Tabs
        size="md"
        variant="enclosed"
        index={indexTab}
        onChange={(index: number) => {
          setIndexTab(index);
          if (index == 0) {
            navigate("/balance-sheet");
          } else {
            navigate("/balance-sheet/insights");
          }
        }}
      >
        <TabList>
          <Tab>Tabel</Tab>
          <Tab>Insights</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {table !== undefined ? (
              <BalanceSheetTableComponent data={table} />
            ) : (
              <Center>
                <CircularProgress isIndeterminate color="green.300" />
              </Center>
            )}
          </TabPanel>
          <TabPanel>{props.children}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default BalanceSheetMainComponent;
