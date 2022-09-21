import { Flex } from '@chakra-ui/react';
import React from 'react';
import Links from '../Nav/Links';

import styles from './Styles.module.scss';
import ToggleLang from '../Nav/ToggleLang';
import useIsMobile from '../../hooks/useIsMobile';

export default function HomeLinks() {
  const isMobile = useIsMobile();
  return (
    <Flex
      className={styles.topbarContainer}
      zIndex={100}
      align='center'
      w={isMobile ? '80%' : '30%'}
      p='20px 0'
    >
      <Links isHome />
      <ToggleLang />
    </Flex>
  );
}
