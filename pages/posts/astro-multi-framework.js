/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Text,
  Heading,
  Image,
  Flex,
  Box,
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SimpleLink from '../../components/SimpleLink';
import StyledUL from '../../components/StyledUL';
import StyledDivider from '../../components/StyledDivider';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | Astro Frameworks'
    description='Using all of your favorite FE frameworks in a single web application'
    postUrl='astro-multi-framework'
  >
    <Text>
      Never again do you need to argue about which of the MANY popular
      FE JS frameworks you and your team should use on your next
      project. Astro allows you to use muiltiple of the most used
      frameworks in a single MPA application.
    </Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | Astro Frameworks'
    description='Menggunakan semua kerangka kerja FE favorit Anda dalam satu aplikasi web'
    postUrl='astro-multi-framework'
  ></BlogLayout>
);

export default function AstroMultiFramework() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
