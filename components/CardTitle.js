import React from 'react';
import { Text } from '@chakra-ui/react';
import useIsMobile from '../hooks/useIsMobile';

export default function CardTitle({ titleText, fontSize, pos }) {
  const isMobile = useIsMobile();

  return (
    <Text
      pos={pos}
      color='primary'
      padding='10px 14px'
      zIndex='10'
      fontSize={fontSize}
      fontWeight='600'
      textShadow='2px 2px #441f1f'
      maxW={isMobile ? '230px' : '500px'}
    >
      {titleText}
    </Text>
  );
}
