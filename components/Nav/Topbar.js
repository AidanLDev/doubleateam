import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import Links from './Links';
import useIsMobile from '../../hooks/useIsMobile';

import styles from './styles.module.scss';
import ToggleLang from './ToggleLang';

export async function getStaticProps() {
  return {
    props: {
      isHome,
    },
  };
}

export default function Topbar({ isHome }) {
  const isMobile = useIsMobile();

  return (
    <Flex className={styles.topbarContainer} zIndex={20}>
      {!isMobile && !isHome && (
        <Box flexGrow={1}>
          <Link href='/' passHref>
            <Text className={styles.logo}>AA</Text>
          </Link>
        </Box>
      )}

      <Links />
      <ToggleLang />
    </Flex>
  );
}
