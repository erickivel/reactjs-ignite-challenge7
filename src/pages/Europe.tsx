import { Box, Flex, Heading, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { Header } from "../components/Home/Header"

import EuropeImg from '../public/images/EuropeContinent.jpg';

export default function ContinentPage() {
  const [mounted, setMounted] = useState(false)
  const textColor = useColorModeValue("gray.500", "gray.50");

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? (
    <>
      <Header />

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

      <Flex mt="5rem" maxW={1160} width="100%" mx="auto" justify="space-between" align="center">
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
            <Text fontSize="2xl" fontWeight="semibold" color={textColor}>cidades +100</Text>
          </Flex>
        </HStack>
      </Flex>
    </>
  ) : null;
}