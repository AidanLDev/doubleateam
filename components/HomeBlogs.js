import Link from 'next/link';
import { motion } from 'framer-motion';
import { List, ListItem, Flex, Image, useMediaQuery } from '@chakra-ui/react';
import CardTitle from './CardTitle';
import { useEffect, useState } from 'react';

const MotionImage = motion(Image);

export default function HomeBlogs({ blogs }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 575px)');

  useEffect(() => {
    setIsMobile(mediaQuery);
  }, [mediaQuery]);

  return (
    <List display='flex'>
      <Flex wrap='wrap' placeContent='center'>
        {blogs.map((blog, idx) => {
          if (blog.new) {
            return (
              <Link
                href={`/posts/${blog.path}`}
                passHref
                key={`${blog}__${idx}`}
              >
                <ListItem
                  w={isMobile ? '100%' : '500px'}
                  h={isMobile ? '500px' : '700px'}
                  cursor='pointer'
                  m='10px 20px'
                  overflow='hidden'
                  _hover={{
                    boxShadow: '5px 7px 16px -5px rgba(0,0,0,0.56)',
                  }}
                >
                  <CardTitle
                    titleText={blog.title}
                    fontSize={isMobile ? '26px' : '30px'}
                    pos='absolute'
                  />
                  <MotionImage
                    src={`/images/blog/${blog.path}.jpg`}
                    alt={`${blog.title} image`}
                    minWidth='100%'
                    minHeight='100%'
                    width='100%'
                    height='100%'
                    opacity='0.6'
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.98 }}
                    zIndex='-1'
                    _hover={{
                      opacity: 0.8,
                    }}
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
