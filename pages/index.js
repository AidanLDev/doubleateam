import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
const HomeBackground = dynamic(() =>
  import('../components/home/HomeBackground')
);
const HomeLinks = dynamic(() => import('../components/Home/HomeLinks'));
import HomeHeader from '../components/home/homeHeader/HomeHeader';
import SEO from '../components/SEO';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Box w='100%' h='100%'>
      <SEO
        title='Double A Team'
        description='We are the Double A Team and together we built a website through our passion for helping others, learning and growing. Come learn what we know, if you want to know that is!'
        url='https://doubleateam.co.uk'
        image='/images/IstanbulHagiaSopia.webp'
      />
      <Box className={styles.main}>
        <HomeLinks />
        <HomeBackground />
        <HomeHeader />
      </Box>
    </Box>
  );
}
