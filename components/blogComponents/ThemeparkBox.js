import { Box, Center, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function ThemeparkBox({
  park,
  parkDetails,
  imageSrc,
  children,
}) {
  return (
    <Box>
      <Heading>{park}</Heading>
      <Center>
        <Text>{parkDetails}</Text>
      </Center>
      <Center>
        <Image alt={`${park} images`} src={imageSrc} w='500px' />
      </Center>
      {children}
    </Box>
  );
}
