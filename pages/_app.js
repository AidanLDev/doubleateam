import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    main: '#F6F4F1',
    primary: '#FF0000',
    secondary: '#48AAF4',
  },
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
