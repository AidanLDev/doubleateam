import { Box } from '@chakra-ui/react';

export default function HomeBackground() {
  return (
    <Box
      bg='main'
      bgImage='url(/images/IstanbulHagiaSopia.png)'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      h='100vh'
      w='100%'
      pos='absolute'
      zIndex='10'
      backgroundSize='cover'
      borderBottom='2px solid red'
    />
  );
}
