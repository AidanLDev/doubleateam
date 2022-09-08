/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | Royal Family Origins'
    description='The Origin of the Royal Family'
    postUrl='royal-family-origin'
  >
    <Text>Origins of the Royal family</Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | Royal Family Origins'
    description='Dari mana keluarga kerajaan berasal'
    postUrl='royal-family-origin'
  ></BlogLayout>
);

export default function RoyalFamilyOrigin() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
