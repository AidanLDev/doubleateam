/* eslint-disable react/no-unescaped-entities */
import { Box, Center, Heading, Text, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../../components/card/Card';
import Layout from '../../components/Layout';
import Topbar from '../../components/Nav/Topbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

import styles from './styles.module.scss';

const langPath = 'aboutUs.';

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <Box className={styles.aboutUsContainer}>
      <SEO
        title='Double A Team | About Us'
        description='A little background on who the double A team are'
        url='https://doubleateam.co.uk/about-us'
        image='/images/IstanbulHagiaSopia.webp'
        dontShowAds
      />
      <Topbar />
      <Layout>
        <Center>
          <Heading>{t(`${langPath}heading`)}</Heading>
        </Center>
        <VStack>
          <Card>
            <Text>
              {t(`${langPath}jointIntro`)}
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
            <Text>{t(`${langPath}arniIntro`)}</Text>
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
            <Text>{t(`${langPath}aidanIntro`)}</Text>
          </Card>
        </VStack>
      </Layout>
      <Footer />
    </Box>
  );
}
