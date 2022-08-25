import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

export default function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    setIsTablet(mediaQuery);
  }, [mediaQuery]);

  return isTablet;
}
