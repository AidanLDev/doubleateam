import { Heading } from '@chakra-ui/react';

const BlogTitle = ({ text }) => (
  <Heading as='h1' size='2xl' pb='8'>
    {text}
  </Heading>
);

export default BlogTitle;
