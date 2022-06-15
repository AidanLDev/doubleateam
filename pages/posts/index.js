import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
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

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Double A Team | Blogs</title>
      </Head>
      <Flex height='500px' backgroundImage='url(/images/snowyMountain.jpg)'>
        <Heading color='primary' width='50%'>
          <Link href={'/'}>Double A Team</Link>
        </Heading>
        <Input
          variant='outline'
          placeholder='Search'
          width='50%'
          value={filterValue}
          onChange={handleInputChange}
        />
        {messages.map((message, idx) => (
          <Text
            position='absolute'
            top={Math.floor(Math.random() * 300 + 100)}
            left={Math.floor(Math.random() * 1920)}
            key={`${message}__${idx}`}
            fontSize='lg'
            className='fadingText'
          >
            {message}
          </Text>
        ))}
      </Flex>
      <Text>
        Spreading what we know, with those who want to know with as much clarity
        as possible.
      </Text>
      <List spacing={3}>
        {sortedPaths.map((post, idx) => {
          if (post !== 'index' && post) {
            const neatenedPost = post?.replace('-', ' ');
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
