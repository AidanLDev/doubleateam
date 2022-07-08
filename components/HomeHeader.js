import Link from 'next/link';
import { Text, Heading, Box } from '@chakra-ui/react';

export default function HomeHeader() {
  return (
    <Box p='180px 6%' zIndex='20' pos='relative' bottom='75px'>
      <Link href='/posts/' passHref>
        <Text color='primary' fontSize='26px' p='0 0 0 8px'>
          <a>Blogs</a>
        </Text>
      </Link>
      <Heading as='h1' fontSize='11vw' color='primary' cursor='default'>
        Double A Team
      </Heading>
    </Box>
  );
}
