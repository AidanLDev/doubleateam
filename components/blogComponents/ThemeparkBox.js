import { Box, Heading, Image, Text } from '@chakra-ui/react';
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
      <Text>{parkDetails}</Text>
      <Image alt={`${park} images`} src={imageSrc} />
      {children}
    </Box>
  );
}
