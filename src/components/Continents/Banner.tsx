import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import EuropeImg from '../../public/images/Europe/EuropeContinent.jpg';

export function Banner() {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  const [isLargerThan1160] = useMediaQuery('(min-width: 1160px)');

  return (
    <Flex
      direction="column"
      justify={isLargerThan700 ? "flex-end" : "center"}
      align={isLargerThan700 ? "left" : "center"}
      position="relative"
      height={isLargerThan700 ? 500 : 150}
    >
      <Box zIndex={-1} position="absolute" top="0" height={isLargerThan700 ? 500 : 150} overflow="hidden" filter="brightness(0.6)" >
        <Image
          src={EuropeImg}
          alt="Europa"
          layout="intrinsic"
        />
      </Box>

      <Box maxW={1160} zIndex={1} w={isLargerThan700 ? "100%" : "7rem"} mx="auto" pl={isLargerThan1160 ? "0" : isLargerThan700 ? "2rem" : "0rem"}>
        <Text
          mb={isLargerThan700 ? "3.7rem" : "0rem"}
          fontSize={isLargerThan700 ? "5xl" : "3xl"}
          fontWeight="semibold"
          color="gray.50"
        >
          Europa
        </Text>
      </Box>
    </Flex >
  );
}