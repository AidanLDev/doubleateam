import { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import BackHomeLink from '../BackHomeLink';
import Signature from '../Signature';
import StraightLineProgress from '../scrollProgress/StraightLineProgress';
import SEO from '../SEO';

import styles from './styles.module.scss';

export default function BlogLayout({ title, description, children, postUrl }) {
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
      <SEO
        title={title}
        description={description}
        url={`https://doubleateam.co.uk/posts/${postUrl}`}
        image='/images/IstanbulHagiaSopia.jpg'
      />
      <StraightLineProgress />
      <BackHomeLink blog />
      {children}
      <Signature />
      <BackHomeLink />
    </Box>
  );
}
