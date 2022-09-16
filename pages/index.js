import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
const HomeBackground = dynamic(() => import('../components/home/HomeBackground'));
const Topbar = dynamic(() => import('../components/Nav/Topbar'));
import HomeHeader from '../components/home/homeHeader/HomeHeader';
import SEO from '../components/SEO';


import styles from '../styles/Home.module.scss';

export default function Home() {
  
  return (
    <Box w='100%' h='100%'>
      <SEO
        title='Double A Team'
        description='We are the Double A Team and together we built a website through our passion for helping others, learning and growing. Come learn what we know, if you want to know that is!'
        url='https://doubleateam.co.uk/'
        image='/images/IstanbulHagiaSopia.webp'
      />
      <Box className={styles.main}>
        <HomeBackground />
        <HomeHeader />
        <Topbar isHome/>
      </Box>
    </Box>
  );
}
