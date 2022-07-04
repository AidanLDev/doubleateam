import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.scss';
import '@fontsource/aldrich';
import '@fontsource/open-sans';
import '@fontsource/nerko-one';
import '@fontsource/aguafina-script';

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  fonts: {
    heading: 'nekro-one, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  colors: {
    main: '#F6F4F1',
    primary: '#FF0000',
    secondary: '#48AAF4',
  },
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
