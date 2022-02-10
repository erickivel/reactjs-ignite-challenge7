import { Box, Flex, HStack, Text, useColorModeValue, Tooltip, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons"

export function Info() {
  const textColor = useColorModeValue("gray.500", "gray.50");
  const [isLargerThan1090] = useMediaQuery('(min-width: 1090px)');

  return (
    <Flex mt="5rem" direction={isLargerThan1090 ? 'row' : 'column'} maxW={1160} width="100%" mx="auto" justify="space-between" align="center">
      <Box maxW={600} w="100%">
        <Text
          textAlign="justify"
          fontSize="2xl"
          fontWeight="medium"
          color={textColor}
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Box>
      <HStack spacing={10}>
        <Flex direction="column" align="center" justify="center">
          <Text fontSize="5xl" fontWeight="semibold" color="yellow.500">50</Text>
          <Text fontSize="2xl" fontWeight="semibold" color={textColor}>países</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Text fontSize="5xl" fontWeight="semibold" color="yellow.500">60</Text>
          <Text fontSize="2xl" fontWeight="semibold" color={textColor}>línguas</Text>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Text fontSize="5xl" fontWeight="semibold" color="yellow.500">27</Text>
          <Flex align="center" justify="center">
            <Text mr="0.5rem" fontSize="2xl" fontWeight="semibold" color={textColor}>cidades +100</Text>
            <Tooltip label="125 cidades">
              <InfoOutlineIcon color="gray.300" w="16px" h="16px" />
            </Tooltip>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  );
}