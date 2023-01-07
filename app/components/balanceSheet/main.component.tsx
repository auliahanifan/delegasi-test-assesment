import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import BalanceSheetTableComponent from "./table.component";

const BalanceSheetMainComponent: FC<{ children?: ReactNode }> = (props) => {
  const [data, setData] = useState(props.data);

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
            <BalanceSheetTableComponent data={data} />
          </TabPanel>
          <TabPanel>
            <p>Insights</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default BalanceSheetMainComponent;
