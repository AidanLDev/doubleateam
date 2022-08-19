import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
} from 'react-icons/fa';
import FooterIcon from './functional/FooterIcon';
import Links from './Nav/Links';

export default function Footer() {
  const igPink = '#e04d93';
  const youtubeRed = '#fe2c3c';
  const twitterBlue = '#61b9ff';
  const fbBlue = '#3e55aa';

  return (
    <footer className='footer'>
      <Box
        p='20px 0 50px 0'
        w='100%'
        borderBottom='2px solid #868484'
      >
        <Flex
          justify='center'
          gap='5%'
          paddingBottom='30px'
          className='footerLinks'
        >
          <Links />
          {/* <FooterIcon icon={FaTwitter} link='' hoverColour={twitterBlue} />
          <FooterIcon icon={FaFacebookF} link='' hoverColour={fbBlue} /> */}
        </Flex>
        <Flex justify='center' gap='5%'>
          <FooterIcon
            icon={FaInstagram}
            link='https://www.instagram.com/mynameisarni/'
            hoverColour={igPink}
          />
          <FooterIcon
            icon={FaYoutube}
            link='https://www.youtube.com/channel/UCp_GPf9RaLenpBBtmjMjrLg'
            hoverColour={youtubeRed}
          />
        </Flex>
      </Box>
      <Text
        paddingTop='20px'
        paddingBottom='20px'
        color='gray'
        textAlign='center'
        fontSize='14px'
      >
        © Aidan John Lowson & Arni Riani Lowson
      </Text>
    </footer>
  );
}
