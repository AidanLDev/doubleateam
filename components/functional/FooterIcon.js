import { Icon } from '@chakra-ui/react';

export default function FooterIcon({ icon, link, hoverColour }) {
  return (
    <>
      <a href={link} target='_blank' rel='noreferrer'>
        <Icon
          as={icon}
          cursor='pointer'
          _hover={{ color: hoverColour }}
          color='#0070f3' //  Link colour
        />
      </a>
    </>
  );
}
