import { Center, Image, Text } from '@chakra-ui/react';

export default function SmallBlogImg({ src, alt, h, caption }) {
  return (
    <>
      <Center>
        <Image alt={alt} src={src} w={500} h={h || 'auto'} />
      </Center>
      {caption && (
        <Center>
          <Text fontSize='16px !important'>{caption}</Text>
        </Center>
      )}
    </>
  );
}
