import Link from 'next/link';
import Image from 'next/image';
import {
  List,
  ListItem,
  Flex,
  HStack,
  Icon,
  Tag,
} from '@chakra-ui/react';
import CardTitle from '../CardTitle';
import useIsMobile from '../../hooks/useIsMobile';
import { useTranslation } from 'react-i18next';
import { AiFillTag } from 'react-icons/ai';

const transPath = 'blogs.';

export default function HomeBlogs({ blogs, filterValue }) {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <List display='flex'>
      <Flex wrap='wrap' placeContent='center'>
        {blogs.map((blog, idx) => {
          if (
            filterValue === '' ||
            RegExp(filterValue, 'i').test(blog.title) ||
            blog.tags.includes(filterValue)
          ) {
            return (
              <Link
                href={`/posts/${blog.path}`}
                passHref
                key={`${blog}__${idx}`}
              >
                <ListItem
                  w={isMobile ? '250px' : '450px'}
                  h={isMobile ? '450px' : '600px'}
                  cursor='pointer'
                  m='10px 20px'
                  overflow='hidden'
                  _hover={{
                    boxShadow: '5px 7px 16px -5px rgba(0,0,0,0.56)',
                  }}
                  className='blogCard'
                  borderRadius='20px'
                >
                  <CardTitle
                    titleText={t(`${transPath}${blog.title}.title`)}
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
                  <HStack
                    pos='relative'
                    top={isMobile ? '-110px' : '-80px'}
                    left='12px'
                    gap='2px'
                    flexWrap='wrap'
                  >
                    <Icon as={AiFillTag} fill='white' />
                    {blog.tags.map((tag, tagIdx) => (
                      <Tag key={`${tag}__${idx}__${tagIdx}`}>
                        {t(`${transPath}tags.${tag}`)}
                      </Tag>
                    ))}
                  </HStack>
                </ListItem>
              </Link>
            );
          }
        })}
      </Flex>
    </List>
  );
}
