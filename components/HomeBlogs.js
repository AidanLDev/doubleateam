import Link from 'next/link';
// import Image from 'next/image';
import { List, ListItem, Flex, Text, Image } from '@chakra-ui/react';

export default function HomeBlogs({ sortedPaths }) {
  return (
    <List>
      <Flex wrap='wrap'>
        {sortedPaths.map((post, idx) => {
          if (post !== 'index') {
            return (
              <Link href={`/posts/${post}`} passHref>
                <ListItem
                  key={`${post}__${idx}`}
                  w='30%'
                  h='700px'
                  border='1px solid gray'
                  cursor='pointer'
                  m='10px 20px'
                >
                  <Text pos='absolute' color='primary' padding='10px 30px'>
                    {post}
                  </Text>
                  <Image
                    src={`/images/blog/${post}.jpg`}
                    alt={`${post} image`}
                    minWidth='100%'
                    minHeight='100%'
                    width='100%'
                    height='100%'
                  />
                </ListItem>
              </Link>
            );
          }
        })}
      </Flex>
    </List>
  );
}
