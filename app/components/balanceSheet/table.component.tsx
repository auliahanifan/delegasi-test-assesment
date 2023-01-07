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
import type { FC } from "react";
import { useState } from "react";
import type { TableDto } from "~/dtos/table.dto";
import { convertNumber } from "~/utils";

const BalanceSheetTableComponent: FC<{ data: TableDto }> = (props) => {
  const [data, setData] = useState<TableDto>(props.data);

  return (
    <Box width="100%">
      {data.details?.map((mainSection) => {
        return (
          <Box>
            <Heading as="h5" size="sm" margin="10px 0px">
              {mainSection.label}
            </Heading>
            {mainSection.details?.map((tbl) => {
              return (
                <TableContainer>
                  <Table variant="simple" margin="10px 0px">
                    <Thead>
                      <Tr>
                        <Th>{tbl.label}</Th>
                        <Th isNumeric>{tbl.month}</Th>
                      </Tr>
                    </Thead>
                    {tbl.details?.map((firstLevelRow) => {
                      return (
                        <Tbody>
                          {
                            <Tr style={{ padding: "2px" }}>
                              <Td
                                style={{
                                  padding: "1px",
                                  fontWeight: "bold",
                                  color: "#868B8E",
                                }}
                              >{`${firstLevelRow.label}`}</Td>
                              <Td
                                style={{
                                  padding: "1px",
                                  fontWeight: "bold",
                                  color: "#868B8E",
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
                              <Tr style={{ padding: "2px", color: "#868B8E" }}>
                                <Td
                                  style={{ padding: "1px" }}
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
                    <Tfoot>
                      <Tr>
                        <Th padding="5px 0px">Total {tbl.label}</Th>
                        <Th padding="5px 0px" isNumeric>
                          {convertNumber(tbl.value, tbl.isCredit)}
                        </Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default BalanceSheetTableComponent;
