/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';

const blogTitle = 'UKs Best Theme parks';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | What to do in the UK'
    description={blogTitle}
    postUrl='best-uk-theme-parks'
  >
    <BlogTitle text={blogTitle} />
    <Text>
      This island holds a lot of thrill, with some of the world's best coasters
      scattered between various parks. Let's dive deep into what parks are here
      in the UK.
    </Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | What to do in the UK'
    description={blogTitle}
    postUrl='best-uk-theme-parks'
  >
    <BlogTitle text='taman hiburan uk terbaik' />
    <Text>
      Pulau ini menyimpan banyak sensasi, dengan beberapa tatakan gelas terbaik
      dunia tersebar di berbagai taman. Mari selami lebih dalam taman apa saja
      yang ada di sini di Inggris.
    </Text>
  </BlogLayout>
);

export default function HowToPassIelts() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
