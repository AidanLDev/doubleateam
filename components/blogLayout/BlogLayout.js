import { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import Head from 'next/head';
import BackHomeLink from '../BackHomeLink';
import styles from './styles.module.scss';

export default function BlogLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 575px)');

  useEffect(() => {
    setIsMobile(mediaQuery);
  }, [mediaQuery]);

  return (
    <Box
      maxW={isMobile ? '80%' : '55rem'}
      p='20px 2rem'
      m='3rem auto 6rem'
      className={styles.blogLayout}
    >
      <Head>
        <meta name='description' content='Double A Teams blog posts' />
      </Head>
      <BackHomeLink blog />
      {children}
      <BackHomeLink />
    </Box>
  );
}
