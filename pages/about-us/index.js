/* eslint-disable react/no-unescaped-entities */
import { Box, Center, Heading, Text, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import Card from '../../components/card/Card';
import Layout from '../../components/Layout';
import Topbar from '../../components/Nav/Topbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

import styles from './styles.module.scss';

export default function AboutUs() {
  return (
    <Box className={styles.aboutUsContainer}>
      <SEO
        title='Double A Team | About Us'
        description='A little background on who the double A team are'
        url='https://doubleateam.co.uk/about-us'
        image='/images/IstanbulHagiaSopia.jpg'
      />
      <Topbar />
      <Layout>
        <Center>
          <Heading>About us</Heading>
        </Center>
        <VStack>
          <Card>
            <Text>
              Arni and Aidan are two individuals, an Indonesian woman and
              English man, who when put together make the double A team 😎 We're
              passionate about traveling, living life to the full and helping
              others.
            </Text>
          </Card>
          <Heading>Arni Riani</Heading>
          <Image
            alt='Photo of Arni'
            src='/images/us/ArniAvatar.png'
            width='250px'
            border='1px solid red'
            borderRadius='125px'
          />
          <Card>
            <Text>
              Originally from Bandung Indonesia. I have a affection for
              painting, nail art and anything creative. A lover of the outdoors,
              hiking is a big hobby of mine.
            </Text>
          </Card>
          <Heading>Aidan Lowson</Heading>
          <Image
            alt='Photo of Aidan'
            src='/images/us/AidanAvatar.png'
            width='250px'
            border='1px solid red'
            borderRadius='125px'
          />
          <Card>
            <Text>
              Aidan Lowson, originally a mackem lad from Sunderland, now living
              in the south of England. I love all things tech, be it playing
              around with hardware to learning the latest in web technologies.
              Always keen to learn anything new, reading and running are my main
              hobbies.
            </Text>
          </Card>
        </VStack>
      </Layout>
      <Footer />
    </Box>
  );
}
