import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import { FC, ReactNode } from "react";

const HomeMainComponent: FC<{ children?: ReactNode }> = () => {
  let navigate = useNavigate();

  return (
    <Box margin="5px 0px 40px 0px">
      <Box justifyContent="center">
        <Heading as="h4" size="md" textAlign="center" margin="10px 0px">
          Beranda
        </Heading>
        <Heading as="h6" size="xs" textAlign="center" margin="10px 0px">
          Hai! Yuk cek laporan keuangan sekarang.
        </Heading>
        <Center margin="10px 0px">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
            textAlign="center"
            onClick={() => navigate("/balance-sheet")}
          >
            Cek Laporan Neraca
          </Button>
        </Center>
        <Center>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
            textAlign="center"
            onClick={() => navigate("/income-statement")}
          >
            Cek Laporan Laba Rugi
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default HomeMainComponent;
