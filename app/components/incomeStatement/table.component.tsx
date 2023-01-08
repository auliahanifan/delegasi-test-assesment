import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react";
import type { FC } from "react";
import { useState } from "react";
import type { TableDto } from "~/dtos/table.dto";
import { convertNumber } from "~/utils";

const IncomeStatementTableComponent: FC<{ data: TableDto }> = (props) => {
  const [data, setData] = useState<TableDto>(props.data);

  return (
    <Box width="100%">
      {data == null ? (
        <Text> Can't fetch data </Text>
      ) : (
        <TableContainer>
          <Table
            variant="simple"
            margin="10px 0px"
            width="100%"
            style={{ tableLayout: "fixed" }}
          >
            <Thead>
              <Tr>
                <Th>{data.label}</Th>
                <Th isNumeric>{data?.month}</Th>
              </Tr>
            </Thead>
            {data.details?.map((firstLevelRow) => {
              return (
                <Tbody>
                  {
                    <Tr style={{ padding: "2px" }}>
                      <Td
                        style={{
                          padding: "1px",
                          fontWeight: 500,
                          width: "100px",
                          maxWidth: "150px",
                          wordWrap: "break-word",
                          whiteSpace: "pre-wrap",
                        }}
                      >{`${firstLevelRow.label}`}</Td>
                      <Td
                        style={{
                          padding: "1px",
                          fontWeight: 500,
                          width: "100px",
                          maxWidth: "150px",
                          wordWrap: "break-word",
                        }}
                        isNumeric
                      >
                        {convertNumber(
                          firstLevelRow.value,
                          firstLevelRow.isCredit
                        )}
                      </Td>
                    </Tr>
                  }
                  {firstLevelRow.details?.map((secondLevelRow) => {
                    return (
                      <Tr
                        style={{
                          padding: "2px",
                        }}
                      >
                        <Td
                          style={{ padding: "1px", wordBreak: "break-word" }}
                        >{`${secondLevelRow.label}`}</Td>
                        <Td style={{ padding: "1px" }} isNumeric>
                          {convertNumber(
                            secondLevelRow.value,
                            secondLevelRow.isCredit
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              );
            })}
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default IncomeStatementTableComponent;
