import Link from 'next/link';
import Image from 'next/image';
import { List, ListItem, Flex } from '@chakra-ui/react';
import CardTitle from '../CardTitle';
import useIsMobile from '../../hooks/useIsMobile';

export default function HomeBlogs({ blogs, lang }) {
  const isMobile = useIsMobile();

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
                  w={isMobile ? '250px' : '500px'}
                  h={isMobile ? '450px' : '700px'}
                  cursor='pointer'
                  m='10px 20px'
                  overflow='hidden'
                  _hover={{
                    boxShadow: '5px 7px 16px -5px rgba(0,0,0,0.56)',
                  }}
                  className='blogCard'
                >
                  <CardTitle
                    titleText={lang !== 'Ind' ? blog.title : blog.indTitle}
                    fontSize={isMobile ? '26px' : '30px'}
                    pos='absolute'
                  />
                  <Image
                    src={blog.img || `/images/blog/${blog.path}.webp`}
                    alt={`${blog.title} image`}
                    width={isMobile ? '250px' : '500px'}
                    height={isMobile ? '500px' : '700px'}
                    layout='responsive'
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
