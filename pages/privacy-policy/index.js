/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Topbar from '../../components/Nav/Topbar';
import SEO from '../../components/SEO';
import useIsMobile from '../../hooks/useIsMobile';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

const transPath = 'privacyPolicy.';

export default function PrivacyPolicy() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  return (
    <Box className={styles.privacyPolicyContainer}>
      <SEO
        title='Double A Team | Privacy Policy'
        description='Privacy policy information'
        url='https://doubleateam.co.uk/privacy-policy'
        image='/images/IstanbulHagiaSopia.webp'
      />
      <Topbar />
      <Layout>
        <Box
          maxW={isMobile ? '90%' : '60rem'}
          p='4px 2rem'
          m='2rem auto 2rem'
          className={styles.privacyPolicyContent}
        >
          <>
            <Heading>{t(`${transPath}heading`)}</Heading>
            <Text>{t(`${transPath}sec1P1`)}</Text>
            <Text>{t(`${transPath}sec1P2`)}</Text>
            <Text>{t(`${transPath}sec1P3`)}</Text>
            <Heading>{t(`${transPath}logDataHeading`)}</Heading>
            <Text>{t(`${transPath}sec2P1`)}</Text>
            <Heading>{t(`${transPath}cookiesHeading`)}</Heading>
            <Text>{t(`${transPath}sec3P1`)}</Text>
            <Heading>{t(`${transPath}serviceProvidersHeading`)}</Heading>
            <Text>{t(`${transPath}sec4p1`)}</Text>
            <UnorderedList>
              <ListItem>{t(`${transPath}sec4B1`)}</ListItem>
              <ListItem>{t(`${transPath}sec4B2`)}</ListItem>
              <ListItem>{t(`${transPath}sec4B3`)}</ListItem>
              <ListItem>{t(`${transPath}sec4B4`)}</ListItem>
            </UnorderedList>
            <Text>{t(`${transPath}sec4p2`)}</Text>
            <Heading>{t(`${transPath}securityHeader`)}</Heading>
            <Text>{t(`${transPath}sec5p1`)}</Text>
            <Heading>{t(`${transPath}linksToOtherSitesHeader`)}</Heading>
            <Text>{t(`${transPath}sec6p1`)}</Text>
            <Heading>{t(`${transPath}childrenPrivacyHeading`)}</Heading>
            <Text>{t(`${transPath}sec7p1`)}</Text>
            <Heading>{t(`${transPath}changesToPrivacyPolHeader`)}</Heading>
            <Text>{t(`${transPath}sec8p1`)}</Text>
            <Heading>{t(`${transPath}contactUsHeading`)}</Heading>
            <Text>
              {t(`${transPath}sec9p1`)}{' '}
              <Link href='/contact-us' passHref>
                {t(`${transPath}contactUsHeading`)}
              </Link>
            </Text>
          </>
        </Box>
      </Layout>
      <Footer />
    </Box>
  );
}
