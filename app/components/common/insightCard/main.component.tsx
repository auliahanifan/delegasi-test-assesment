import { Box, Heading, Center, Badge, Divider, Text } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";
import { useState } from "react";
import type { InsightDto } from "~/dtos/insight.dto";

const InsightCardComponent: FC<{ data: InsightDto }> = (props) => {
  const [data, setData] = useState<InsightDto>(props.data);

  return (
    <Center>
      {data.message == undefined ? (
        <Text> Can't fetch data </Text>
      ) : (
        <Box border="1px" width="95%" padding="10px" margin="2px 0px">
          {data.status == "ok" ? (
            <Badge colorScheme="green">AMAN</Badge>
          ) : data.status == "warning" ? (
            <Badge colorScheme="yellow">HATI HATI</Badge>
          ) : (
            <Badge colorScheme="red">BAHAYA</Badge>
          )}

          <Text dangerouslySetInnerHTML={{ __html: data.messageHtml }}></Text>
          {data.data != undefined ? (
            <Box>
              <Divider orientation="horizontal" margin="5px 0px" />
              <Text>{data.data.label}</Text>
              <Heading as="h3" size="lg">
                {data.data.value}
              </Heading>
            </Box>
          ) : null}
        </Box>
      )}
    </Center>
  );
};

export default InsightCardComponent;
