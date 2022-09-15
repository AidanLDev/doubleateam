import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Box, Text, Spinner } from '@chakra-ui/react';
const HomeBackground = dynamic(
  () => import('../components/home/HomeBackground'),
  { suspense: true }
);
const HomeHeader = dynamic(
  () => import('../components/home/homeHeader/HomeHeader'),
  { suspense: true }
);
import HomeBlogs from '../components/home/HomeBlogs';
import Footer from '../components/Footer';
import { getBlogPostPaths } from '../lib/posts';
import SEO from '../components/SEO';
import Link from 'next/link';
import ToggleLanguage from '../components/ToggleLanguage/ToggleLanguage';

import styles from '../styles/Home.module.scss';

export async function getStaticProps() {
  const blogs = getBlogPostPaths();
  return {
    props: {
      blogs,
    },
  };
}

export default function Home({ blogs }) {
  const [lang, setLang] = useState();
  return (
    <Box w='100%' h='100%'>
      <SEO
        title='Double A Team'
        description='We are the Double A Team and together we built a website through our passion for helping others, learning and growing. Come learn what we know, if you want to know that is!'
        url='https://doubleateam.co.uk/'
        image='/images/IstanbulHagiaSopia.webp'
      />
      <Box className={styles.main}>
        <Suspense fallback={<Spinner />}>
          <HomeBackground />
          <HomeHeader />
        </Suspense>
      </Box>

      <Box m='2% 6%' minH='1000px'>
        <ToggleLanguage lang={lang} setLang={setLang} />
        <Text fontSize={'38px'} align='center' color='red' pb='12px'>
          {lang !== 'Ind' ? 'Our Latest Blogs' : 'blog terbaru kami'}|{' '}
          <Link href='/posts/' passHref>
            <a style={{ color: '#0070f3' }}>
              {lang !== 'Ind'
                ? "Click for all of the Double A Team's Blogs"
                : 'Klik untuk semua Blog Double A Team'}
            </a>
          </Link>
        </Text>
        <HomeBlogs lang={lang} blogs={blogs} />
      </Box>
      <Footer />
    </Box>
  );
}
