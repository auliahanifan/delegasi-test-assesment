import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import BalanceSheetSection from "./balanceSheetSection.component";
import IncomeStatementSection from "./incomeStatementSection.component";

export default function DashboardSection() {
  return (
    <Tabs size="md" variant="enclosed">
      <TabList>
        <Tab>Laporan Neraca</Tab>
        <Tab>Laporan Laba Rugi</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <BalanceSheetSection />
        </TabPanel>
        <TabPanel>
          <IncomeStatementSection />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
