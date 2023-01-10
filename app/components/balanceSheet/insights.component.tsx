import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import type { InsightDto } from "~/dtos/insight.dto";
import InsightCardComponent from "../common/insightCard/main.component";

const BalanceSheetInsightsComponent: FC<{
  data: InsightDto[];
  filterStatus: string;
}> = (props) => {
  let navigate = useNavigate();

  const [data, setData] = useState<InsightDto[] | undefined | null>(
    props?.data
  );

  const [filterStatus, setFilterStatus] = useState(props.filterStatus);
  const [keyword, setKeyword] = useState<string>("");

  const [statuses, setStatuses] = useState<{ label: string; value: string }[]>([
    { label: "Tampilkan Semua Insight", value: "null" },
    { label: "Tampilkan Insight Aman", value: "ok" },
    { label: "Tampilkan Insight Hati-hati", value: "warning" },
    { label: "Tampilkan Insight Bahaya", value: "danger" },
  ]);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    const filteredData = props.data.filter((insight) =>
      insight.message
        .toLocaleLowerCase()
        .includes(keyword.toLocaleLowerCase() ?? "")
    );
    setData(
      filteredData.length === 0
        ? null
        : filteredData.map((data) => {
            const messageCopy = `${data.message}`
              .replace("</strong>", "")
              .replace("<strong>", "");
            const loweredKeyWord = keyword.toLowerCase();

            if (keyword !== "") {
              const init = messageCopy.slice(
                0,
                messageCopy.toLowerCase().indexOf(loweredKeyWord)
              );
              const mid = messageCopy.slice(
                messageCopy.toLowerCase().indexOf(loweredKeyWord),
                messageCopy.toLowerCase().indexOf(loweredKeyWord) +
                  keyword.length
              );
              const end = messageCopy.slice(
                messageCopy.toLocaleLowerCase().indexOf(loweredKeyWord) +
                  keyword.length
              );

              data.messageHtml = `${init}<strong style="background-color:#b1f2ff">${mid}</strong>${end}`;
            } else {
              data.messageHtml = messageCopy;
            }

            return data;
          })
    );
  }, [keyword]);

  const onChangeStatus = (newVal: string) => {
    setFilterStatus(newVal);
    setData([]);

    const BASE_ROUTE: string = "/balance-sheet/insights";

    switch (newVal) {
      case "null":
        navigate(BASE_ROUTE);
        break;
      default:
        navigate(`${BASE_ROUTE}?status=${newVal}`);
        break;
    }
  };

  const onChangeKeyword = (newVal: string) => {
    setKeyword(newVal);
    setData([]);
  };

  if (data === undefined) {
    return (
      <Box>
        <Center>
          <Spinner size="xl" />
        </Center>
      </Box>
    );
  } else if (data === null) {
    return (
      <Box>
        <InputGroup size="md" margin="0px 5px 5px 5px">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Cari Kata Kunci"
            onChange={(event) => {
              onChangeKeyword(event.target.value);
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" disabled>
              Cari
            </Button>
          </InputRightElement>
        </InputGroup>
        <Center padding="40px">
          <Text> Insight Tidak Ditemukan </Text>
        </Center>
      </Box>
    );
  }
  return (
    <Box width="100%">
      <InputGroup size="md" margin="0px 5px 5px 5px">
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Cari Kata Kunci"
          onChange={(event) => {
            onChangeKeyword(event.target.value);
          }}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" disabled>
            Cari
          </Button>
        </InputRightElement>
      </InputGroup>
      <Select
        margin="0px 5px 10px 5px"
        value={filterStatus}
        onChange={(e) => onChangeStatus(e.target.value)}
      >
        {statuses.map((data) => (
          <option value={data.value}>{data.label}</option>
        ))}
      </Select>
      {data.length === 0 ? (
        <Center>
          <Spinner size="xl" />
        </Center>
      ) : null}
      {data.map((insight) => (
        <InsightCardComponent data={insight} />
      ))}
    </Box>
  );
};

export default BalanceSheetInsightsComponent;
