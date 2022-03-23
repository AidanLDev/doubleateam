import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "@fontsource/aldrich";
import "@fontsource/open-sans";


// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  fonts: {
    heading: 'Aldrich, sans-serif',
    body: 'Open Sans, sans-serif'
  },
  colors: {
    main: '#F6F4F1',
    primary: '#FF0000',
    secondary: '#48AAF4',
  }
});

// 3. Pass the `theme` prop to the `ChakraProvider`

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
