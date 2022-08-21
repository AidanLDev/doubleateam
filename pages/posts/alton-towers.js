/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import ThemeparkBox from '../../components/blogComponents/ThemeparkBox';

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
      This island holds a lot of thrill, with some of the world's best coasters
      scattered between various parks. Let's dive deep into what parks are here
      in the UK.
    </Text>

    <ThemeparkBox
      park='Alton Towers'
      parkDetails='Stoke-On-Trent | £36 online or free with a Merlin Pass'
      imageSrc='/images/blog/best-uk-theme-parks.jpg'
    >
      <Text>
        Alton Towers is not only home to some of the best thrill rides you'll
        find anywhere in this world, hosting 10 record-breaking coasters, but
        also some of the most beautiful scenery surrounding an old stately home.
      </Text>
      <Text>
        Prepare to get plenty of steps in as this park covers 910 acres,
        boasting over 40 attractions for both families and thrill seakers.
      </Text>
      <Text>
        There's something for everyone at Alton Towers, with CBeebies land,
        hosting the David Walliams' Ganster Granny ride. To the likes of
        Nemesis, Oblivion and Smiler. You can even fly like superman on
        Galactica.
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
