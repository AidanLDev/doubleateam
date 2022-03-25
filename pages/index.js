import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { Box } from '@chakra-ui/react';
import HomeBackground from '../components/HomeBackground';
import HomeHeader from '../components/HomeHeader';
import HomeBlogs from '../components/HomeBlogs';
import { getBlogPostPaths } from '../lib/posts';

export async function getStaticProps() {
  const sortedPaths = getBlogPostPaths();
  return {
    props: {
      sortedPaths,
    },
  };
}

export default function Home({ sortedPaths }) {
  return (
    <Box w='100%' h='100%'>
      <Head>
        <title>Double A Team</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box className={styles.main}>
        <HomeBackground />
        <HomeHeader />
      </Box>
      {/* Display latest blogs */}
      <Box m='6%' minH='1000px'>
        <HomeBlogs sortedPaths={sortedPaths} />
      </Box>
    </Box>
  );
}
