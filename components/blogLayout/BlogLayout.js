import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Signature from '../Signature';
import StraightLineProgress from '../scrollProgress/StraightLineProgress';
import BlogTitle from '../BlogTitle';
import SEO from '../SEO';
import CopyClipboard from '../CopyClipboard';
import useIsMobile from '../../hooks/useIsMobile';

import styles from './styles.module.scss';
import Footer from '../Footer';
import Topbar from '../Nav/Topbar';

export default function BlogLayout({ title, description, children, postUrl }) {
  const isMobile = useIsMobile();
  const url = `https://doubleateam.co.uk/posts/${postUrl}`;

  return (
    <>
      <Topbar />
      <Box
        maxW={isMobile ? '90%' : '60rem'}
        p='24px 2rem'
        m='2rem auto 2rem'
        className={styles.blogLayout}
      >
        <SEO
          title={title}
          description={description}
          url={url}
          image='/images/IstanbulHagiaSopia.webp'
        />
        <StraightLineProgress />
        <Flex alignItems='baseline' gap='24px'>
          <BlogTitle text={description} />
          <CopyClipboard postUrl={url} />
        </Flex>
        {children}
        <Signature />
      </Box>
      <Footer />
    </>
  );
}
