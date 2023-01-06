import { Box, Flex, Text } from "@chakra-ui/react";
import DashboardSection from "~/components/dashboard/dashboardSection.component";

export default function DashboardContainer() {
  return (
    <Flex height="calc(100vh - 50px)">
      <DashboardSection />
    </Flex>
  );
}
