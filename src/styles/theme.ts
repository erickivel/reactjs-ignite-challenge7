import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { GlobalProps } from '@emotion/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      "500": "#47585B",
      "300": "#999999",
      "100": "#DADADA",
      "50": "#F5F8FA"
    },
    yellow: {
      "500": "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('gray.50', 'gray.900')(props),
        color: mode('gray.500', 'gray.50')(props)
      }
    })
  }
})

