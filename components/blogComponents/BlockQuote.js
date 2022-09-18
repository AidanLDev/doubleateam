/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box } from '@chakra-ui/react';
import Styles from './Styles.module.scss';

export default function BlockQuote({ quote, by }) {
  return (
    <Box className={Styles.blockQuote}>
      <h1>"{quote}"</h1>
      <h4>&mdash; {by}</h4>
    </Box>
  );
}
