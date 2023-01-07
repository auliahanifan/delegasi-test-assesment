import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Heading,
} from "@chakra-ui/react";
import { FC, ReactNode, useState } from "react";
import { TableDto } from "~/dtos/table.dto";
import { convertNumber } from "~/utils";

const IncomeStatementTableComponent: FC<{ children?: ReactNode }> = (props) => {
  const [data, setData] = useState<TableDto>(props.data);

  return (
    <Box width="100%">
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
                        fontWeight: "bold",
                        color: "#868B8E",
                        width: "100px",
                        maxWidth: "150px",
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap",
                      }}
                    >{`${firstLevelRow.label}`}</Td>
                    <Td
                      style={{
                        padding: "1px",
                        fontWeight: "bold",
                        color: "#868B8E",
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
                        color: "#868B8E",
                      }}
                    >
                      <Td
                        style={{ padding: "1px", wordBreak: "break-word" }}
                      >{`${secondLevelRow.label}`}</Td>
                      <Td
                        style={{ padding: "1px", color: "#868B8E" }}
                        isNumeric
                      >
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
    </Box>
  );
};

export default IncomeStatementTableComponent;
