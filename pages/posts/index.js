import Head from 'next/head';
import Link from 'next/link';
import { Heading, List, ListItem } from '@chakra-ui/react';
import { getBlogPostPaths } from '../../lib/posts';
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
  <Head>
    <title>Double A Title</title>
  </Head>;
  return (
    <>
      <Heading color='primary'>All Blogs</Heading>
      <List spacing={3}>
        {sortedPaths.map((post, idx) => {
          if (post !== 'index') {
            return (
              <ListItem key={`${post}__${idx}`}>
                <Link href={`/posts/${post}`} passHref>
                  <a>{post}</a>
                </Link>
              </ListItem>
            );
          }
        })}
      </List>
      <BackHomeLink />
    </>
  );
}
