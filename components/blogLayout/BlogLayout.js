import React from 'react';
import { Box } from '@chakra-ui/react';
import Signature from '../Signature';
import StraightLineProgress from '../scrollProgress/StraightLineProgress';
import SEO from '../SEO';
import useIsMobile from '../../hooks/useIsMobile';

import styles from './styles.module.scss';
import Footer from '../Footer';
import Topbar from '../Nav/Topbar';

export default function BlogLayout({ title, description, children, postUrl }) {
  const isMobile = useIsMobile();

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
          url={`https://doubleateam.co.uk/posts/${postUrl}`}
          image='/images/IstanbulHagiaSopia.jpg'
        />
        <StraightLineProgress />
        {children}
        <Signature />
      </Box>
      <Footer />
    </>
  );
}
