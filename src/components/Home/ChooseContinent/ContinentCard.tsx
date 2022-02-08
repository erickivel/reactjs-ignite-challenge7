import { Box, Flex, Text, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface ContinentCardProps {
  continentName: string;
  description: string;
  link: string;
  image: StaticImageData;
}

export function ContinentCard({
  continentName,
  description,
  link,
  image
}: ContinentCardProps) {
  const [isLargerThan770] = useMediaQuery('(min-width: 770px)');

  const ImageWidth = useBreakpointValue({
    base: 375,
    sm: 375,
    md: 736,
    lg: 960,
    xl: 1240,
    '2xl': 1240,
  })

  const ImageHeight = useBreakpointValue({
    base: 250,
    sm: 250,
    md: 267,
    lg: 350,
    xl: 450,
    '2xl': 450,
  })

  return (
    <Link href={`/${link}`} passHref>
      <Box position="relative">
        <Flex
          w="100%"
          h="100%"
          direction="column"
          justify="center"
          align="center"
          position="absolute"
        >
          <Text
            fontSize={isLargerThan770 ? "5xl" : "2xl"}
            fontWeight="bold"
            color="gray.50"
          >
            {continentName}
          </Text>
          <Text
            mt="1rem"
            fontSize={isLargerThan770 ? "2xl" : "sm"}
            fontWeight="bold"
            color="gray.50"
          >
            {description}
          </Text>
        </Flex>
        <Box>
          <Image
            src={image}
            alt="europe"
            layout="fixed"
            objectFit="cover"
            width={ImageWidth}
            height={ImageHeight}
          />
        </Box>
      </Box>
    </Link>
  );
}