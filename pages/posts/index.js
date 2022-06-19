import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Flex, Heading, List, ListItem, Input, Text } from '@chakra-ui/react';
import { getBlogPostPaths } from '../../lib/posts';
import { messages } from '../../lib/messages';
import BackHomeLink from '../../components/BackHomeLink';

export async function getStaticProps() {
  const sortedPaths = getBlogPostPaths();
  return {
    props: {
      sortedPaths,
    },
  };
}

export default function Posts({ sortedPaths }) {
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
      <List spacing={3}>
        {sortedPaths.map((post, idx) => {
          if (post !== 'index' && post) {
            const neatenedPost = post?.replaceAll('-', ' ');
            if (
              filterValue === '' ||
              RegExp(filterValue, 'i').test(neatenedPost)
            ) {
              return (
                <ListItem key={`${post}__${idx}`}>
                  <Link href={`/posts/${post}`} passHref>
                    <a>{neatenedPost}</a>
                  </Link>
                </ListItem>
              );
            }
          }
        })}
      </List>
      <BackHomeLink />
    </>
  );
}
