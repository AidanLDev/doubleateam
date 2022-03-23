import Link from 'next/link';
import { Text, Heading, Box } from '@chakra-ui/react';

export default function HomeHeader() {
  return (
    <Box p="180px 6%">
      <Link href='/posts/' passHref>
        <Text color='primary'>
          <a>Blogs</a>
        </Text>
      </Link>
      <Heading as='h1' fontSize="11vw" color='primary'>
        Double A Team
      </Heading>
    </Box>
  )
}
