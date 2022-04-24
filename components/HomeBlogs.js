import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  List,
  ListItem,
  Flex,
  Text,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const MotionImage = motion(Image);

export default function HomeBlogs({ sortedPaths }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 575px)');

  useEffect(() => {
    setIsMobile(mediaQuery);
  }, [mediaQuery]);

  const neatenUpPost = (post) => {
    if (post.includes('-')) {
      return post.replace(/-/g, ' ').toUpperCase();
    } else {
      return post.toUpperCase();
    }
  };
  return (
    <List display='flex'>
      <Flex wrap='wrap' placeContent='center'>
        {sortedPaths.map((post, idx) => {
          if (post !== 'index' && post && post.length > 0) {
            return (
              <Link href={`/posts/${post}`} passHref key={`${post}__${idx}`}>
                <ListItem
                  w={isMobile ? '100%' : '500px'}
                  h={isMobile ? '500px' : '700px'}
                  cursor='pointer'
                  m='10px 20px'
                  overflow='hidden'
                >
                  <Text
                    pos='absolute'
                    color='primary'
                    padding='10px 14px'
                    zIndex='10'
                    fontSize={isMobile ? '26px' : '30px'}
                    fontWeight='600'
                    textShadow='2px 2px #441f1f'
                    maxW={isMobile ? '230px' : ''}
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
                    opacity='0.6'
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.98 }}
                    zIndex='-1'
                    _hover={{ opacity: 0.8 }}
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
