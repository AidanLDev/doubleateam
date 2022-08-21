import { Center, Image } from '@chakra-ui/react';

export default function SmallBlogImg({ src, alt }) {
  return (
    <Center>
      <Image alt={alt} src={src} w={500} />
    </Center>
  );
}
