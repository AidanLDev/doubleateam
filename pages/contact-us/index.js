/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Center,
  Heading,
  VStack,
  Image,
  Icon,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import Card from '../../components/card/Card';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Topbar from '../../components/Nav/Topbar';
import SEO from '../../components/SEO';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';
// Icons
import { AiOutlineMail } from 'react-icons/ai';
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

const igPink = '#e04d93';
const youtubeRed = '#fe2c3c';
const twitterBlue = '#61b9ff';
const fbBlue = '#3e55aa';
const linkedInBlue = '#2867b2';

const translatePath = 'contactUs.';

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <Box className={styles.contactUsContainer}>
      <SEO
        title='Double A Team | Contact Us'
        description='Get in touch with the Double A Team!'
        url='https://doubleateam.co.uk/contact-us'
        image='/images/IstanbulHagiaSopia.webp'
        dontShowAds
      />
      <Topbar />
      <Layout>
        <Center>
          <Heading>{t(`${translatePath}heading`)}</Heading>
        </Center>
        <VStack>
          <Card>
            <Box>
              <Link href='mailto:weare@doubleateam.co.uk' passHref>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ borderBottom: 'none' }}
                >
                  <Icon
                    pos='relative'
                    top='10px'
                    color='white'
                    cursor='pointer'
                    boxSize={8}
                    as={AiOutlineMail}
                  />
                </a>
              </Link>{' '}
              <span> - {t(`${translatePath}email`)}</span>
            </Box>
            <Box>
              <Link
                href='https://www.youtube.com/channel/UCp_GPf9RaLenpBBtmjMjrLg'
                passHref
                target='_blank'
                rel='noopener noreferrer'
              >
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ borderBottom: 'none' }}
                >
                  <Icon
                    pos='relative'
                    top='10px'
                    color={youtubeRed}
                    cursor='pointer'
                    boxSize={8}
                    as={FaYoutube}
                    target='_blank'
                  />
                </a>
              </Link>{' '}
              <span> - {t(`${translatePath}youTube`)}</span>
            </Box>
            <Divider margin='12px 0' />
            <Center>
              <Heading>
                {t(`${translatePath}arSocialsHeader`)}
              </Heading>
            </Center>
            <Center>
              <Image
                alt='Arnis photo'
                src='/images/us/ARSelfie.webp'
                width='200px'
                borderRadius='60px'
                border='1px solid red'
              />
            </Center>
            <Box>
              <Link
                href='https://www.instagram.com/mynameisarni/'
                passHref
                target='_blank'
                rel='noopener noreferrer'
              >
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ borderBottom: 'none' }}
                >
                  <Icon
                    pos='relative'
                    top='10px'
                    color={igPink}
                    cursor='pointer'
                    boxSize={8}
                    as={FaInstagram}
                    target='_blank'
                  />
                </a>
              </Link>{' '}
              <span> - {t(`${translatePath}arIg`)}</span>
            </Box>
            <Box>
              <Link
                href='https://twitter.com/MyNameIsArni'
                passHref
                target='_blank'
                rel='noopener noreferrer'
              >
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ borderBottom: 'none' }}
                >
                  <Icon
                    pos='relative'
                    top='10px'
                    color={twitterBlue}
                    cursor='pointer'
                    boxSize={8}
                    as={FaTwitter}
                    target='_blank'
                  />
                </a>
              </Link>{' '}
              <span> - {t(`${translatePath}arTwitter`)}</span>
            </Box>
            <Divider margin='12px 0' />
            <Center>
              <Heading>
                {' '}
                {t(`${translatePath}aiSocialsHeader`)}
              </Heading>
            </Center>
            <Center>
              <Image
                alt='Aidans photo'
                src='/images/us/sunnyAidanBalcony.webp'
                width='200px'
                borderRadius='60px'
                border='1px solid red'
              />
            </Center>
            <Box>
              <Link
                href='https://www.instagram.com/lowsonaidan/'
                passHref
                target='_blank'
                rel='noopener noreferrer'
              >
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ borderBottom: 'none' }}
                >
                  <Icon
                    pos='relative'
                    top='10px'
                    color={igPink}
                    cursor='pointer'
                    boxSize={8}
                    as={FaInstagram}
                    target='_blank'
                  />
                </a>
              </Link>{' '}
              <span> - {t(`${translatePath}aiIg`)} 😉</span>
            </Box>
            <Box>
              <Link href='https://twitter.com/AidanL94' passHref>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ borderBottom: 'none' }}
                >
                  <Icon
                    pos='relative'
                    top='10px'
                    color={twitterBlue}
                    cursor='pointer'
                    boxSize={8}
                    as={FaTwitter}
                    target='_blank'
                  />
                </a>
              </Link>{' '}
              <span>
                {' '}
                - {t(`${translatePath}aiTwitter`)}
                ?!
              </span>
            </Box>
            <Box>
              <Link
                href='https://www.facebook.com/aidan.lowson'
                passHref
              >
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ borderBottom: 'none' }}
                >
                  <Icon
                    pos='relative'
                    top='10px'
                    color={fbBlue}
                    cursor='pointer'
                    boxSize={8}
                    as={FaFacebookF}
                    target='_blank'
                  />
                </a>
              </Link>{' '}
              <span> - {t(`${translatePath}aiFb`)}</span>
            </Box>
            <Box>
              <Link href='https://aidanlowson.com' passHref>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ borderBottom: 'none' }}
                >
                  <Icon
                    pos='relative'
                    top='10px'
                    color='black'
                    cursor='pointer'
                    boxSize={8}
                    as={TbWorld}
                    target='_blank'
                  />
                </a>
              </Link>{' '}
              <span> - {t(`${translatePath}aiWeb`)}</span>
            </Box>
            <Box>
              <Link
                href='https://www.linkedin.com/in/aidanlowson1/'
                passHref
              >
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ borderBottom: 'none' }}
                >
                  <Icon
                    pos='relative'
                    top='10px'
                    color={linkedInBlue}
                    cursor='pointer'
                    boxSize={8}
                    as={FaLinkedinIn}
                    target='_blank'
                  />
                </a>
              </Link>{' '}
              <span> - {t(`${translatePath}aiLinkedIn`)}</span>
            </Box>
          </Card>
        </VStack>
      </Layout>
      <Footer />
    </Box>
  );
}
