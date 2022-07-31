/* eslint-disable react/no-unescaped-entities */
import { Text, Heading, Image } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import SimpleLink from '../../components/SimpleLink';

export default function HowToPassIelts() {
  const blogTitle = 'How we recommend you enjoy your time in Jogja';
  return (
    <BlogLayout
      title='Double A Team | What to do in Jogja'
      description={blogTitle}
      postUrl='what-to-do-in-jogja'
    >
      <BlogTitle text={blogTitle} />
      <Heading>Travel there</Heading>
      <Heading>Hotel</Heading>
      <Heading>Resturant</Heading>
      <Heading>Malioboro</Heading>
      <Heading>Hotel2</Heading>
      <Heading>Sunrise place</Heading>
      <Heading>Borobudur</Heading>
    </BlogLayout>
  );
}
