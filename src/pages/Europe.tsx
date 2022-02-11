import { Box, Flex, SimpleGrid, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { Banner } from "../components/Continents/Banner";
import { CityCard } from "../components/Continents/CityCard";
import { Info } from "../components/Continents/Info";

import { Header } from "../components/Home/Header"

import GreatBritainImg from "../public/images/Europe/GreatBritainIcon.png";
import LondonImg from "../public/images/Europe/London.png";
import FranceImg from "../public/images/Europe/FranceIcon.png";
import ParisImg from "../public/images/Europe/Paris.png";
import ItalyImg from "../public/images/Europe/ItalyIcon.png";
import RomeImg from "../public/images/Europe/Rome.png";
import CzechRepublicImg from "../public/images/Europe/CzechRepublicIcon.png";
import PragueImg from "../public/images/Europe/Prague.png";
import NetherlandsImg from "../public/images/Europe/NetherlandsIcon.png";
import AmsterdamImg from "../public/images/Europe/Amsterdam.png";

export default function ContinentPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { colorMode } = useColorMode()

  const [isLargerThan1160] = useMediaQuery('(min-width: 1160px)');
  const [isLargerThan560] = useMediaQuery('(min-width: 600px)');


  return mounted ? (
    <>
      <Header />

      <Banner />

      <Box
        maxW={1160}
        w="100%"
        mx="auto"
        mb="5rem"
      >
        <Info />

        <Text mt="5rem" ml={isLargerThan1160 ? "0" : "2rem"} fontSize="4xl" fontWeight="medium" color={colorMode === 'dark' ? "gray.50" : "gray.500"}>Cidades +100</Text>

        <Flex direction={isLargerThan560 ? "column" : "row"} justify={isLargerThan560 ? "left" : "center"} width="100%">
          <SimpleGrid ml={isLargerThan1160 ? "0" : "2rem"} mt="2.5rem" minChildWidth="256px" spacing="2.8rem">
            <CityCard
              cityName="Londres"
              countryName="Reino Unido"
              cityImage={LondonImg}
              countryIcon={GreatBritainImg}
            />

            <CityCard
              cityName="Paris"
              countryName="França"
              cityImage={ParisImg}
              countryIcon={FranceImg}
            />

            <CityCard
              cityName="Roma"
              countryName="Itália"
              cityImage={RomeImg}
              countryIcon={ItalyImg}
            />
            <CityCard
              cityName="Praga"
              countryName="República Tcheca"
              cityImage={PragueImg}
              countryIcon={CzechRepublicImg}
            />
            <CityCard
              cityName="Amsterdã"
              countryName="Holanda"
              cityImage={AmsterdamImg}
              countryIcon={NetherlandsImg}
            />
          </SimpleGrid>
        </Flex>
      </Box>
    </>
  ) : null;
}