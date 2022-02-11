import Image from "next/image";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

interface CityCardProps {
  cityName: string;
  countryName: string;
  cityImage: StaticImageData;
  countryIcon: StaticImageData;
}

export function CityCard({
  cityName,
  countryName,
  cityImage,
  countryIcon
}: CityCardProps) {
  return (
    <Flex w={256} direction="column" align="center" justify="center" >
      <Box w="100%">
        <Image src={cityImage} alt={cityName} layout="responsive" />
      </Box>
      <Flex
        px="1.5rem"
        w="100%"
        py="1.125rem"
        align="center"
        justify="space-between"
        border="1px solid"
        borderTop="none"
        borderColor="yellow.500"
        borderRadius="0 0 0.5rem 0.5rem"
      >
        <Stack spacing={3}>
          <Text fontSize="xl" fontWeight="semibold">{cityName}</Text>
          <Text color="gray.300">{countryName}</Text>
        </Stack>
        <Box width={30}>
          <Image src={countryIcon} alt={countryName} layout="responsive" />
        </Box>
      </Flex>
    </Flex>
  );
}