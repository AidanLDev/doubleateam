import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebookF } from 'react-icons/fa'
import FooterIcon from './functional/FooterIcon';

export default function Footer() {
  return (
    <footer>
      <Box
        p='20px 0 50px 0'
        w='100%'
        borderBottom='2px solid gray'
      >
        <Flex justify='center' gap='5%'>
          <FooterIcon icon={FaInstagram} link='' />
          <FooterIcon icon={FaYoutube} link='https://www.youtube.com/channel/UCp_GPf9RaLenpBBtmjMjrLg' />
          <FooterIcon icon={FaTwitter} link='' />
          <FooterIcon icon={FaFacebookF} link='' />
        </Flex>
      </Box>
      <Text paddingTop="20px" paddingBottom="20px" color='gray' textAlign='center' fontSize='14px'>
        © Aidan John Lowson & Arni Riani Lowson - {new Date().getFullYear()}
      </Text>
    </footer>
  );
}
