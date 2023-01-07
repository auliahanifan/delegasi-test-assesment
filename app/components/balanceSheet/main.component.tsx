import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const BalanceSheetMainComponent: FC<{ children?: ReactNode }> = () => {
  return (
    <Box width="100%">
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
            <p>Tabel</p>
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
