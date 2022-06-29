import { Text, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from 'react';

export default function CardTitle({ titleText, fontSize, pos }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 575px)');

  useEffect(() => {
    setIsMobile(mediaQuery);
  }, [mediaQuery]);
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
  )
}