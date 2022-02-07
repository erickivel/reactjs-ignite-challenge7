import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";


import Background from '../../public/images/Background.png';
import AirplaneImg from '../../public/images/Airplane.svg';

export function Banner() {






  const isLargerThan990 = useBreakpointValue({
    base: false,
    lg: true
  })

  const isLargerThan480 = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Box position="relative" height={isLargerThan480 ? 325 : 163} >
      <Box width="100vw" position="absolute" top="0" overflow="hidden">
        <Image src={Background} alt="Céu" layout="fixed" height={isLargerThan480 ? 325 : 163} width={2100} />
      </Box>
      <Flex maxWidth={1160} mx="auto" height="100%" width="100vw" align="center" justify={isLargerThan990 ? 'space-between' : 'center'} position="relative">
        <Box maxWidth={524} ml={isLargerThan480 ? "2rem" : "0"} mx={isLargerThan480 ? "" : "1rem"}>
          <Text fontSize={["xl", "3xl", "4xl"]} color="gray.50" fontWeight="medium">5 Continentes,</Text>
          <Text fontSize={["xl", "3xl", "4xl"]} color="gray.50" fontWeight="medium">infinitas possibilidades.</Text>
          <Text fontSize={["sm", "lg", "xl"]} color="gray.100" fontWeight="normal">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Box>


        {isLargerThan990 && (
          <Box width={416} display="block" position="absolute" zIndex="1" bottom="-2rem" right="1rem">
            <Image src={AirplaneImg} alt="Avião" layout="responsive" />
          </Box>
        )}

      </Flex>
    </Box >
  );
}