import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import type { FC, ReactNode } from "react";
import { useState } from "react";
import type { InsightDto } from "~/dtos/insight.dto";
import type { TableDto } from "~/dtos/table.dto";
import IncomeStatementTableComponent from "./table.component";

type IncomeStatementMainComponentProps = {
table: TableDto,
indexTab: number,
children?: ReactNode
}
const IncomeStatementMainComponent: FC<IncomeStatementMainComponentProps> = (props) => {
  const [table, _] = useState<TableDto>(props.table);
  const [indexTab, setIndexTab] = useState<number>(props?.indexTab);
  let navigate = useNavigate();

  return (
    <Box width="100%" margin="5px 0px 40px 0px">
      <Box justifyContent="center">
        <Heading as="h4" size="md" textAlign="center" margin="10px 0px">
          Laporan Laba Rugi
        </Heading>
      </Box>

      <Tabs
        size="md"
        variant="enclosed"
        index={indexTab}
        onChange={(index: number) => {
          setIndexTab(index);
          if (index == 0) {
            navigate("/income-statement");
          } else {
            navigate("/income-statement/insights");
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
              <IncomeStatementTableComponent data={table} />
            ) : (
              <Center>
                <Spinner size="xl" />
              </Center>
            )}
          </TabPanel>
          <TabPanel>{props.children}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default IncomeStatementMainComponent;
