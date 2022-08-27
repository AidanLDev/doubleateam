/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text, Heading } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SimpleLink from '../../components/SimpleLink';
import StyledUL from '../../components/StyledUL';
import SmallBlogImg from '../../components/blogComponents/SmallBlogImg';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | Free CI/CD'
    description='Building a free CI/CD pipeline using AWS S3 and CircleCI'
    postUrl='building-ci-cd-for-free'
  >
    <Heading>Setting up S3 bucket for static hosting</Heading>
    <Heading>Setting up IAM User</Heading>
    <Heading>Commit code to GitHub</Heading>
    <Heading>Set-up CircleCI account</Heading>
    <Heading>Adding .circleci config to your project</Heading>
    <Heading>Debugging your pipeline</Heading>
    <Text>
      Before successfully getting my pipeline up and running, I ran into a
      couple of errors, just in-case you hit the same ones I'll go through the
      error and my solution.
    </Text>
    <Text>
      <code>
        usage: aws s3 sync {'<LocalPath>'} {'<S3Uri>'} or {'<S3Uri>'}{' '}
        {'<LocalPath>'} or {'<S3Uri>'} {'<S3Uri>'}
        Error: Invalid argument type
      </code>
      I had to update the <code>to: 's3://your-bucket'</code> to match my bucket
      name, before I was putting in the actual S3 bucket URL.
    </Text>
    <Text>
      <code>
        The user-provided path ./out/* does not exist. Exited with code exit
        status 255
      </code>
      I had to change two things in my repo for this one, first of all out was
      being exluded as it was included in the <code>.gitignore</code> file. And
      the path for the folder just needed to be the folder name <code>out</code>{' '}
      without the "./folderName/*"
    </Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | Free CI/CD'
    description='Hosting situs web gratis dengan Netlify'
    postUrl='building-ci-cd-for-free'
  ></BlogLayout>
);

export default function UsingAstro() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
