/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Center,
  Heading,
  Text,
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
import useSetLang from '../../hooks/useSetLang';

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

export default function ContactUs() {
  const lang = useSetLang();
  return (
    <Box className={styles.contactUsContainer}>
      <SEO
        title='Double A Team | Contact Us'
        description='Get in touch with the Double A Team!'
        url='https://doubleateam.co.uk/contact-us'
        image='/images/IstanbulHagiaSopia.jpg'
      />
      <Topbar />
      <Layout>
        <Center>
          <Heading>
            {lang !== 'Ind' ? 'Contact Us' : 'Hubungi kami'}
          </Heading>
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
              <span>
                {' '}
                -{' '}
                {lang !== 'Ind'
                  ? 'Send an email to our double a team mailbox'
                  : 'Kirim email ke kotak surat tim ganda kami'}
              </span>
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
              <span>
                {' '}
                -{' '}
                {lang !== 'Ind'
                  ? 'Be sure to visit our YouTube channel!'
                  : 'Pastikan untuk mengunjungi saluran YouTube kami!'}
              </span>
            </Box>
            <Divider margin='12px 0' />
            <Center>
              <Heading>
                {' '}
                {lang !== 'Ind' ? "Arni's Socials" : 'Sosial Arni'}
              </Heading>
            </Center>
            <Center>
              <Image
                alt='Arnis photo'
                src='/images/us/ARSelfie.jpg'
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
              <span>
                {' '}
                -{' '}
                {lang !== 'Ind'
                  ? "You're missing out if you're not following Arni's Insta"
                  : 'Anda rugi jika tidak mengikuti Insta Arni'}
              </span>
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
              <span>
                {' '}
                -{' '}
                {lang !== 'Ind'
                  ? 'Not much of a tweeter, but worth a follow in-case she finds her voice'
                  : 'Tidak banyak tweeter, tetapi patut diikuti jika dia menemukan suaranya'}
              </span>
            </Box>
            <Divider margin='12px 0' />
            <Center>
              <Heading>
                {' '}
                {lang !== 'Ind' ? "Aidan's Socials" : 'Sosial Aidan'}
              </Heading>
            </Center>
            <Center>
              <Image
                alt='Aidans photo'
                src='/images/us/sunnyAidanBalcony.jpg'
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
              <span>
                {' '}
                -{' '}
                {lang !== 'Ind'
                  ? 'Not quite as good a photographer as Arni, however we try to keep IG relatively up to date so give us a follow'
                  : 'Tidak sebagus fotografer Arni, namun kami mencoba untuk menjaga IG relatif up to date, jadi ikuti kami'}{' '}
                😉
              </span>
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
                -{' '}
                {lang !== 'Ind'
                  ? 'Again... much of a tweeter, but you never know if that will change'
                  : 'Tidak sebagus fotografer Arni, namun kami mencoba untuk menjaga IG relatif up to date, jadi ikuti kami'}
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
              <span>
                {' '}
                - {lang !== 'Ind' ? 'The classic FB' : 'FB klasik'}
              </span>
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
              <span>
                {' '}
                -{' '}
                {lang !== 'Ind'
                  ? 'My personal portfolio website'
                  : 'Situs web portofolio pribadi saya'}
              </span>
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
              <span>
                {' '}
                -{' '}
                {lang !== 'Ind'
                  ? 'For the professionals out there'
                  : 'Untuk para profesional'}
              </span>
            </Box>
          </Card>
        </VStack>
      </Layout>
      <Footer />
    </Box>
  );
}
