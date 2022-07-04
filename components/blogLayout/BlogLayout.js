import { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import Head from 'next/head';
import BackHomeLink from '../BackHomeLink';
import Signature from '../Signature';
import ScrollProgress from '../scrollProgress/ScrollProgress';

import styles from './styles.module.scss';

export default function BlogLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 575px)');

  useEffect(() => {
    setIsMobile(mediaQuery);
  }, [mediaQuery]);

  return (
    <Box
      maxW={isMobile ? '90%' : '60rem'}
      p='4px 2rem'
      m='2rem auto 2rem'
      className={styles.blogLayout}
    >
      <Head>
        <meta name='description' content='Double A Teams blog posts' />
      </Head>
      <ScrollProgress isMobile={isMobile} />
      <BackHomeLink blog />
      {children}
      <Signature />
      <BackHomeLink />
    </Box>
  );
}
