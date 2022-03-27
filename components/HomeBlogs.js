import Link from 'next/link';
import { motion } from 'framer-motion';
import { List, ListItem, Flex, Text, Image } from '@chakra-ui/react';

const MotionImage = motion(Image);

export default function HomeBlogs({ sortedPaths }) {
  const neatenUpPost = (post) => {
    if (post.includes('-')) {
      return post.replace(/-/g, ' ').toUpperCase();
    } else {
      return post.toUpperCase();
    }
  };
  return (
    <List>
      <Flex wrap='wrap'>
        {sortedPaths.map((post, idx) => {
          if (post !== 'index' && post && post.length > 0) {
            return (
              <Link href={`/posts/${post}`} passHref key={`${post}__${idx}`}>
                <ListItem w='30%' h='700px' cursor='pointer' m='10px 20px'>
                  <Text
                    pos='absolute'
                    color='primary'
                    padding='10px 14px'
                    zIndex='10'
                    fontSize='22px'
                    fontWeight='600'
                    textShadow='2px 2px whitesmoke'
                  >
                    {neatenUpPost(post)}
                  </Text>
                  <MotionImage
                    src={`/images/blog/${post}.jpg`}
                    alt={`${post} image`}
                    minWidth='100%'
                    minHeight='100%'
                    width='100%'
                    height='100%'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    zIndex='-1'
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
