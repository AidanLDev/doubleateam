import { Suspense } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import '../styles/globals.scss';

import '@fontsource/aldrich';
import '@fontsource/open-sans';
import '@fontsource/nerko-one';
import '@fontsource/aguafina-script';
import '@fontsource/abril-fatface';

import {
  translationsEn,
  translationsId,
} from '../lib/translations/Translations';

// Set up i18
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    id: { translation: translationsId },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

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
    <Suspense fallback='loading'>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Suspense>
  );
}

export default MyApp;
