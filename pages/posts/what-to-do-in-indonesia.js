import Head from 'next/head';
import { Heading, Text } from '@chakra-ui/react';
import BlogLayout from '../../components/BlogLayout';

export default function HowToPassIelts() {
  return (
    <BlogLayout>
            <Head>
        <title>Double A Team | What to do in Indonesia</title>
      </Head>
      <Heading className='blogHeading'>
        How to spend your time in Indonesia
      </Heading>
      <Text>
        Minim occaecat sunt voluptate exercitation sunt do. Enim esse dolor
        laborum incididunt magna occaecat. Aute esse sit magna fugiat minim non
        incididunt deserunt pariatur mollit exercitation non incididunt.
      </Text>
      <Text>
        Sunt et esse sint voluptate est et eiusmod. Commodo ad pariatur commodo
        aliqua ea. Occaecat occaecat cillum labore nisi excepteur nostrud minim
        aliqua. Esse ipsum et magna anim reprehenderit aliquip nulla pariatur.
        Pariatur est tempor non consequat est eiusmod quis exercitation
        consectetur velit aute consectetur commodo.
      </Text>
    </BlogLayout>
  );
}
