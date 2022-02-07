import { Box, Flex, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { mode } from '@chakra-ui/theme-tools';

import CocktailImg from '../../public/images/cocktail.svg';
import BuildingImg from '../../public/images/building.svg';
import EarthImg from '../../public/images/earth.svg';
import MuseumImg from '../../public/images/museum.svg';
import SurfImg from '../../public/images/surf.svg';

export function TravelTypes() {
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');
  const textColor = useColorModeValue("gray.500", "gray.50");

  return (
    <>
      {
        isLargerThan770 ? (
          <Flex maxWidth={1160} mt="5rem" mx="auto" pb="6rem" position="relative" justify="space-around" _after={{
            "position": "absolute",
            "content": `""`,
            "width": "90px",
            "height": "2px",
            "backgroundColor": "#47585B",
            "bottom": 0,
          }}>
            <Flex direction="column" align="center" justify="center">
              <Image src={CocktailImg} layout="intrinsic" alt="Cocktail" />
              <Text fontSize="2xl" fontWeight="semibold" mt="1.5rem">vida noturna</Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image src={SurfImg} layout="intrinsic" alt="Edifício" />
              <Text fontSize="2xl" fontWeight="semibold" mt="1.5rem">praia</Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image src={BuildingImg} layout="intrinsic" alt="Terra" />
              <Text fontSize="2xl" fontWeight="semibold" mt="1.5rem">moderno</Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image src={MuseumImg} layout="intrinsic" alt="Museu" />
              <Text fontSize="2xl" fontWeight="semibold" mt="1.5rem">clássico</Text>
            </Flex>
            <Flex direction="column" align="center" justify="center">
              <Image src={EarthImg} layout="intrinsic" alt="Prancha de surfe" />
              <Text fontSize="2xl" fontWeight="semibold" mt="1.5rem">e mais...</Text>
            </Flex>
          </Flex >
        ) : (
          <Flex maxWidth={275} mt="2.25rem" mx="auto" pb="2.25rem" flexDirection="column" align="center" justify="center" position="relative" _after={{
            "position": "absolute",
            "content": `""`,
            "width": "90px",
            "height": "2px",
            "backgroundColor": "#47585B",
            "bottom": 0,
          }}>
            <Flex w="100%" justify="space-between" align="center">
              <Flex align="center" justify="center">
                <Box h="8px" w="8px" backgroundColor="yellow.500" borderRadius="50%" />
                <Text ml="0.5rem" fontSize="xl" fontWeight="medium" color={textColor}>vida noturna</Text>
              </Flex>
              <Flex align="center" justify="center">
                <Box h="8px" w="8px" backgroundColor="yellow.500" borderRadius="50%" />
                <Text ml="0.5rem" fontSize="xl" fontWeight="medium" color={textColor}>praia</Text>
              </Flex>
            </Flex>
            <Flex mt="1.7rem" w="100%" justify="space-between" align="center">
              <Flex align="center" justify="center">
                <Box h="8px" w="8px" backgroundColor="yellow.500" borderRadius="50%" />
                <Text ml="0.5rem" fontSize="xl" fontWeight="medium" color={textColor}>moderno</Text>
              </Flex>
              <Flex align="center" justify="center">
                <Box h="8px" w="8px" backgroundColor="yellow.500" borderRadius="50%" />
                <Text ml="0.5rem" fontSize="xl" fontWeight="medium" color={textColor}>clássico</Text>
              </Flex>
            </Flex>
            <Flex mt="1.7rem" align="center" justify="center">
              <Box h="8px" w="8px" backgroundColor="yellow.500" borderRadius="50%" />
              <Text ml="0.5rem" fontSize="xl" fontWeight="medium" color={textColor}>e mais...</Text>
            </Flex>
          </Flex>
        )}

    </>
  );
}