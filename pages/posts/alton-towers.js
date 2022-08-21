/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import ThemeparkBox from '../../components/blogComponents/ThemeparkBox';
import SimpleLink from '../../components/SimpleLink';

const blogTitle = 'All you need to know about Alton Towers';

const imgPath = '/images/blog/theme-parks/';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | Alton Towers'
    description={blogTitle}
    postUrl='alton-towers'
  >
    <BlogTitle text={blogTitle} />
    <Text>
      The biggest park in the UK, coming in at a massive 910 acres of thrills,
      stunning well-kept gardens, and stately home. It’s the full package and
      caters to both families and thrill seekers.
    </Text>
    <ThemeparkBox
      park='Location'
      parkDetails='Farley Ln, Alton, Stoke-on-Trent ST10 4DB'
      //   imageSrc={``}
      // Update image src to a beautiful pic of the area
    >
      <Text>
        The park is in central Staffordshire, close to the city Stoke-On-Trent.
        However you’re getting to Towers, you’ll be sure to be greeted by the
        glorious British countryside.
      </Text>
    </ThemeparkBox>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | Alton Towers'
    description={blogTitle}
    postUrl='alton-towers'
  >
    <BlogTitle text='Alton Towers' />
  </BlogLayout>
);

export default function AltonTowers() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
