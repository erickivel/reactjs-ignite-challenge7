import { Box, Flex, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react";

import { Banner } from "../components/Home/Banner";
import { ChooseContinent } from "../components/Home/ChooseContinent";

import { Header } from "../components/Home/Header"
import { TravelTypes } from "../components/Home/TravelTypes";


export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const textColor = useColorModeValue("gray.500", "gray.50");

  return mounted ? (
    <Box overflow="hidden">
      <Header />

      <Banner />

      <TravelTypes />

      <Flex mt="3.25rem" direction="column" align="center" justify="center">
        <Text fontSize={isLargerThan770 ? "4xl" : "xl"} fontWeight="medium" color={textColor}>Vamos nessa?</Text>
        <Text fontSize={isLargerThan770 ? "4xl" : "xl"} fontWeight="medium" color={textColor}>Então escolha seu continente</Text>
      </Flex>

      <ChooseContinent />
    </Box>
  ) : null;
}
