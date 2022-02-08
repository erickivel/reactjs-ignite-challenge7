import { Flex, Switch, useColorMode, useMediaQuery, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Image from "next/image";

import DarkLogo from '../../public/images/Dark-Logo.svg';
import LightLogo from '../../public/images/Light-Logo.svg';

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLargeThemeChangeButton = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <Flex maxWidth={1160} height={100} mx="auto" justify='center' align='center' position="relative">
      <Flex>
        <Image src={colorMode === 'dark' ? DarkLogo : LightLogo} alt="World Trip" layout="fixed" />
      </Flex>
      {isLargeThemeChangeButton ? (
        <Flex align="center" position="absolute" right="1rem">
          <MoonIcon w={6} h={6} />
          <Switch mt="0.2rem" ml="1rem" isChecked={colorMode === 'dark' ? true : false} onChange={toggleColorMode} size="lg" colorScheme="yellow" />
        </Flex>
      ) : (
        <Flex align="center" position="absolute" right="1rem">
          <IconButton
            isActive={colorMode === 'dark' ? true : false}
            onClick={toggleColorMode}
            aria-label="Dark Mode"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          />
        </Flex >
      )}
    </Flex>
  );
}