import { Text } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';

export default function HowToPassIelts() {
  const blogTitle = 'How to spend your time in the UK';
  return (
    <BlogLayout
      title='Double A Team | What to do in the UK'
      description={blogTitle}
      postUrl='what-to-do-in-the-uk'
    >
      <BlogTitle text={blogTitle} />
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
