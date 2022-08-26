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
    description='Building an application that performs at top speeds using Astro'
    postUrl='using-astro'
  >
    <Text></Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | Astro Frameworks'
    description='Membangun aplikasi yang bekerja dengan kecepatan tinggi menggunakan Astro'
    postUrl='using-astro'
  ></BlogLayout>
);

export default function UsingAstro() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
