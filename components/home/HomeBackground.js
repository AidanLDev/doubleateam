import { memo } from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import useIsMobile from '../../hooks/useIsMobile';

export default memo(function HomeBackground() {
  const isMobile = useIsMobile();
  return (
    <Box
      position='absolute'
      width='100%'
      height='100vh'
      borderBottom='2px solid red'
    >
      <Image
        src={`/images/IstanbulHagiaSopia${
          isMobile ? 'Mobile' : ''
        }.webp`}
        alt='Hagia Sopia home image'
        layout='fill'
        priority
      />
    </Box>
  );
})
