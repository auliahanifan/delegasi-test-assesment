import { Box, Heading, Center, Badge, Divider, Text } from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import { InsightDto } from "~/dtos/insight.dto";

const InsightCardComponent: FC<{ children?: ReactNode }> = (props) => {
  const [data, setData] = useState<InsightDto>(props.data);

  return (
    <Center>
      <Box border="1px" width="95%" padding="10px">
        {data.status == "ok" ? (
          <Badge colorScheme="green">AMAN</Badge>
        ) : data.status == "warning" ? (
          <Badge colorScheme="yellow">HATI HATI</Badge>
        ) : (
          <Badge colorScheme="red">BAHAYA</Badge>
        )}

        <Text>{data.message}</Text>
        {data.data != undefined ? (
          <Box>
            <Divider orientation="horizontal" margin="5px 0px" />
            <Text>{data.data.label} </Text>
            <Heading as="h3" size="lg">
              {data.data.value}
            </Heading>
          </Box>
        ) : null}
      </Box>
    </Center>
  );
};

export default InsightCardComponent;
