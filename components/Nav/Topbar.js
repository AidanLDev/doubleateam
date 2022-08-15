import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import Links from './Links';
import useIsMobile from '../../hooks/useIsMobile';

import styles from './styles.module.scss';

export default function Topbar() {
  const isMobile = useIsMobile();

  return (
    <Flex className={styles.topbarContainer}>
      {!isMobile && (
        <Box flexGrow={1}>
          <Link href='/' passHref>
            <Text className={styles.logo}>AA</Text>
          </Link>
        </Box>
      )}
      <Links />
    </Flex>
  );
}
