import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 575px)');

  useEffect(() => {
    setIsMobile(mediaQuery);
  }, [mediaQuery]);

  return isMobile;
}
