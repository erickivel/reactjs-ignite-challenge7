import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import EuropeImg from '../../public/images/Europe/EuropeContinent.jpg';

export function Banner() {
  return (
    <Flex direction="column" justify="flex-end" position="relative" height={500}>
      <Box zIndex={-1} position="absolute" top="0" height={500} overflow="hidden" filter="brightness(0.7)" >
        <Image
          src={EuropeImg}
          alt="Europa"
          layout="intrinsic"
        />
      </Box>

      <Box maxW={1160} zIndex={1} w="100%" mx="auto">
        <Text
          mb="3.7rem"
          fontSize="5xl"
          fontWeight="semibold"
          color="gray.50"
        >
          Europa
        </Text>
      </Box>
    </Flex >
  );
}