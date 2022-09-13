/* eslint-disable react/no-unescaped-entities */
import { Box, Center, Heading, Text, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import Card from '../../components/card/Card';
import Layout from '../../components/Layout';
import Topbar from '../../components/Nav/Topbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import useSetLang from '../../hooks/useSetLang';

import styles from './styles.module.scss';

export default function AboutUs() {
  const lang = useSetLang();
  return (
    <Box className={styles.aboutUsContainer}>
      <SEO
        title='Double A Team | About Us'
        description='A little background on who the double A team are'
        url='https://doubleateam.co.uk/about-us'
        image='/images/IstanbulHagiaSopia.webp'
      />
      <Topbar />
      <Layout>
        <Center>
          <Heading>
            {lang !== 'Ind' ? 'About us' : 'Tentang kami'}
          </Heading>
        </Center>
        <VStack>
          <Card>
            <Text>
              {lang !== 'Ind'
                ? "Arni and Aidan are two individuals, an Indonesian woman and English man, who when put together make the double A team 😎 We're passionate about traveling, living life to the full and helping others."
                : 'Arni dan Aidan adalah dua individu, seorang wanita Indonesia dan pria Inggris, yang ketika disatukan menjadi tim ganda A 😎 Kami bersemangat bepergian, menjalani hidup sepenuhnya, dan membantu orang lain.'}
              {/* But you’re a young 28 year old Sundanese woman from Bandung
                  You graduated in Finance
                  Have experience as an events organiser, retail and finance and administration 

                  You enjoy being creative with things like nail art and love swimming on the beach and being out in nature when hiking  */}
            </Text>
          </Card>
          <Heading>Arni Riani</Heading>
          <Image
            alt='Photo of Arni'
            src='/images/us/ArniAvatar.webp'
            width='250px'
            border='1px solid red'
            borderRadius='125px'
          />
          <Card>
            <Text>
              {lang !== 'Ind'
                ? 'Originally from Bandung Indonesia. I have a affection for painting, nail art and anything creative. A lover of the outdoors, hiking is a big hobby of mine.'
                : 'Berasal dari Bandung Indonesia. Saya memiliki kasih sayang untuk melukis, seni kuku, dan segala sesuatu yang kreatif. Seorang pecinta alam bebas, hiking adalah hobi besar saya.'}
            </Text>
          </Card>
          <Heading>Aidan Lowson</Heading>
          <Image
            alt='Photo of Aidan'
            src='/images/us/AidanAvatar.webp'
            width='250px'
            border='1px solid red'
            borderRadius='125px'
          />
          <Card>
            <Text>
              {lang !== 'Ind'
                ? 'Aidan Lowson, originally a mackem lad from Sunderland, now living in the south of England. I love all things tech, be it playing around with hardware to learning the latest in web technologies. Always keen to learn anything new, reading and running are my main hobbies.'
                : 'Berasal dari Sunderland, sekarang tinggal di selatan Inggris. Saya menyukai semua hal tentang teknologi, baik itu bermain-main dengan perangkat keras hingga mempelajari teknologi web terbaru. Selalu ingin belajar sesuatu yang baru, membaca dan berlari adalah hobi utama saya.'}
            </Text>
          </Card>
        </VStack>
      </Layout>
      <Footer />
    </Box>
  );
}
