import { Box } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      bg='main'
      bgImage='url(/images/IstanbulHagiaSopia.jpg)'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      h='100vh'
      w='100%'
      pos='absolute'
      zIndex='-1'
      backgroundSize='cover'
      borderBottom='2px solid'
    />
  );
}
