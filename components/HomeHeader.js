import { Heading, Box } from '@chakra-ui/react';

export default function HomeHeader() {
  return (
    <Box p='180px 6%' zIndex='20' pos='relative' bottom='75px'>
      <Heading as='h1' fontSize='11vw' color='primary' cursor='default'>
        Double A Team
      </Heading>
    </Box>
  );
}
