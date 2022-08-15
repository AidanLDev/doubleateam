import { Box } from '@chakra-ui/react';
import React from 'react';

import styles from './styles.module.scss';

export default function Card({ children }) {
  return (
    <Box
      p={5}
      shadow='lg'
      borderWidth='1px'
      width='100%'
      className={styles.cardContainer}
    >
      {children}
    </Box>
  );
}
