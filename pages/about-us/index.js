import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Card from '../../components/card/Card';
import Layout from '../../components/Layout';
import Topbar from '../../components/Nav/Topbar';
import SEO from '../../components/SEO';

import styles from './styles.module.scss';

export default function AboutUs() {
  return (
    <Box className={styles.aboutUsContainer}>
      <SEO
        title='Double A Team | About Us'
        description='A little background on who the double A team are'
        url='https://doubleateam.co.uk/'
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
          {/* Arni's Avatar */}
          <Card>
            <Text>
              Arni Riani, originally from Bandung Indonesia. I have a affection
              for painting, nail art and anything creative. A lover of the
              outdoors, hiking is a big hobby of mine.
            </Text>
          </Card>
          {/* Aidan's Avatar */}
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
    </Box>
  );
}
