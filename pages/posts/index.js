import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  Grid,
  GridItem,
  HStack,
  Tag,
  Icon,
  useMediaQuery,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { AiFillTag } from 'react-icons/ai';
import { getBlogPostPaths } from '../../lib/posts';
import { messages } from '../../lib/messages';
import BackHomeLink from '../../components/BackHomeLink';
import Footer from '../../components/Footer';
import CardTitle from '../../components/CardTitle';
import styles from './styles.module.scss';
import SEO from '../../components/SEO';

export async function getStaticProps() {
  const blogs = getBlogPostPaths();
  return {
    props: {
      blogs,
    },
  };
}

const MotionContainer = motion(Box);

export default function Posts({ blogs }) {
  const [filterValue, setFilterValue] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 750px)');

  let flashingTextWidth;

  useEffect(() => {
    setIsMobile(mediaQuery);
  }, [mediaQuery]);

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  const timeoutFunction = () => {
    setTimeout(function () {
      setMessageCount(messageCount++);
      if (messageCount === messages.length) {
        setMessageCount(0);
      }
      if (messageCount < messages.length) {
        timeoutFunction();
      }
    }, 12000);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    flashingTextWidth = window.innerWidth;
    setTimeout(function () {
      timeoutFunction();
    }, 12000);
  }, []);

  return (
    <>
      <SEO
        title='Double A Team | Blogs'
        description="All of the blogs we've written, scroll through and pick whatever takes your fancy or search via tags or by blog title if you have something specific in mind."
        url='https://doubleateam.co.uk/posts'
        image='/images/IstanbulHagiaSopia.jpg'
      />
      <Box
        height='500px'
        backgroundImage='url(/images/sky2-resize.jpg)'
        padding='20px'
        borderBottom='2px solid red'
      >
        <Heading
          color='primary'
          width='50%'
          margin='0 38%'
          className={styles.logo}
        >
          <Link href={'/'}>Double A Team</Link>
        </Heading>
        {
          <Text
            position='absolute'
            top={Math.floor(Math.random() * 300 + 100)}
            left={Math.floor(
              Math.random() * flashingTextWidth || isMobile ? 200 : 800
            )}
            fontSize={isMobile ? 'large' : '6xl'}
            className='fadingText'
          >
            {messages[messageCount]}
          </Text>
        }
      </Box>
      <Text
        fontSize={isMobile ? '32px' : '42px'}
        align='center'
        color='red'
        padding='24px 0'
      >
        Spreading what we know, with those who want to know
      </Text>
      <Divider borderColor='red' />
      <Flex>
        <Input
          variant='filled'
          placeholder='Blog Search...'
          width='25%'
          value={filterValue}
          onChange={handleInputChange}
          _placeholder={{ opacity: 1, color: 'red' }}
          color='red'
          margin='20px auto'
          minW='200px'
        />
      </Flex>
      <Grid
        gap={24}
        templateColumns={`repeat(${isMobile ? '1' : '3'}, 1fr)`}
        templateRows={`repeat(${isMobile ? '1' : '2'}, 1fr)`}
        p='0 24px'
      >
        {blogs.map((blog, idx) => {
          if (
            filterValue === '' ||
            RegExp(filterValue, 'i').test(blog.title) ||
            blog.tags.includes(filterValue)
          ) {
            return (
              <Link
                href={`/posts/${blog.path}`}
                key={`${blog}__${idx}`}
                passHref
                maxH='600px'
              >
                <GridItem
                  overflow='hidden'
                  h='100%'
                  w='100%'
                  minH='600px'
                  maxH='600px'
                  colSpan={
                    isMobile || filterValue !== '' ? 1 : blog.size.colSpan
                  }
                  rowSpan={
                    isMobile || filterValue !== '' ? 1 : blog.size.rowSpan
                  }
                  _hover={{
                    boxShadow: '5px 7px 16px -5px rgba(0,0,0,0.56)',
                  }}
                  borderRadius='6%'
                >
                  <MotionContainer
                    backgroundImage={`/images/blog/${blog.path}.jpg`}
                    backgroundSize='cover'
                    cursor='pointer'
                    colSpan={blog.size.colSpan}
                    rowSpan={blog.size.rowSpan}
                    p='24px'
                    h='100%'
                    w='100%'
                    whileHover={{ scale: 1.04 }}
                  >
                    <Flex
                      flexDir='column'
                      h='100%'
                      justifyContent='space-between'
                    >
                      <CardTitle
                        titleText={blog.title}
                        fontSize='26px'
                        pos='relative'
                      />
                      <HStack>
                        <Icon as={AiFillTag} fill='white' />
                        {blog.tags.map((tag, tagIdx) => (
                          <Tag key={`${tag}__${idx}__${tagIdx}`}>{tag}</Tag>
                        ))}
                      </HStack>
                    </Flex>
                  </MotionContainer>
                </GridItem>
              </Link>
            );
          }
        })}
      </Grid>
      <BackHomeLink />
      <Footer />
    </>
  );
}
