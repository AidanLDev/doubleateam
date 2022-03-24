import { Box } from '@chakra-ui/react';
import Head from 'next/head';

export default function BlogLayout({ children }) {
  return (
    <Box maxW="36rem" p="0 1rem" m="3rem auto 6rem">
      <Head>
        <meta
          name='description'
          content='Double A Teams blog posts'
        />
      </Head>
      {children}

    </Box>
  )
}