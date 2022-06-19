import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Flex,
  Heading,
  List,
  ListItem,
  Input,
  Text,
  Grid,
  GridItem,
  Box,
} from '@chakra-ui/react';
import { getBlogPostPaths } from '../../lib/posts';
import { messages } from '../../lib/messages';
import BackHomeLink from '../../components/BackHomeLink';

export async function getStaticProps() {
  const blogs = getBlogPostPaths();
  return {
    props: {
      blogs,
    },
  };
}

export default function Posts({ blogs }) {
  const [filterValue, setFilterValue] = useState('');
  const [messageCount, setMessageCount] = useState(0);

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  const timeoutFunction = () => {
    setTimeout(function () {
      setMessageCount(messageCount++);
      if (messageCount < messages.length) {
        timeoutFunction();
      }
    }, 6000);
  };

  useEffect(() => {
    timeoutFunction();
  }, []);

  return (
    <>
      <Head>
        <title>Double A Team | Blogs</title>
      </Head>
      <Flex
        height='500px'
        backgroundImage='url(/images/sky2-resize.jpg)'
        padding='20px'
        borderBottom='2px solid red'
      >
        <Heading color='primary' width='50%'>
          <Link href={'/'}>Double A Team</Link>
        </Heading>
        <Input
          variant='outline'
          placeholder='Search...'
          width='50%'
          value={filterValue}
          onChange={handleInputChange}
          _placeholder={{ opacity: 1, color: 'red' }}
          color='red'
        />
        {
          <Text
            position='absolute'
            top={Math.floor(Math.random() * 300 + 100)}
            left={Math.floor(Math.random() * 1920)}
            fontSize='6xl'
            className='fadingText'
          >
            {messages[messageCount]}
          </Text>
        }
      </Flex>
      <Text fontSize='42px' align='center' color='red' padding='24px 0'>
        Spreading what we know, with those who want to know
      </Text>
      <Grid spacing={3} display='grid'>
        {blogs.map((blog, idx) => {
          // const neatenedPost = blog?.replace('-', ' ');
          if (filterValue === '' || RegExp(filterValue, 'i').test(blog.title)) {
            return (
              <Link href={`/posts/${blog.path}`}>
                <Box key={`${blog}__${idx}`} cursor='pointer'>
                  <Text>{blog.title}</Text>
                </Box>
              </Link>
            );
          }
        })}
      </Grid>
      <BackHomeLink />
    </>
  );
}
