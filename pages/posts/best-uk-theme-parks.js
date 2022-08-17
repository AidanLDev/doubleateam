/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text, Heading, Image, Box } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import ThemeparkBox from '../../components/blogComponents/ThemeparkBox';

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

    <ThemeparkBox
      park='Alton Towers'
      parkDetails='Stoke-On-Trent | £36 online or free with a Merlin Pass'
      imageSrc='/images/Eng.jpg'
    >
      <Text>Great information about Alton Towers</Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Thorpe Park'
      parkDetails='Staines | £37 online or free with a Merlin Pass'
    >
      <Text>Thorpepark info</Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Chessington World of Adventure'
      parkDetails='London | £39 online or free with a Merlin Pass'
      imageSrc=''
    ></ThemeparkBox>

    <ThemeparkBox
      park='Legoland Windsor'
      parkDetails='Windsor | £32 Online or free with a Merlin Pass'
      imageSrc=''
    ></ThemeparkBox>

    <ThemeparkBox
      park='Blackpool Pleasure Beach'
      parkDetails=''
      imageSrc=''
    ></ThemeparkBox>

    <ThemeparkBox park='Paultons' parkDetails='' imageSrc=''></ThemeparkBox>

    <ThemeparkBox
      park='Fantasy Island'
      parkDetails=''
      imageSrc=''
    ></ThemeparkBox>

    <ThemeparkBox
      park='Flamingo Land'
      parkDetails=''
      imageSrc=''
    ></ThemeparkBox>

    <ThemeparkBox
      park='Drayton Manor'
      parkDetails=''
      imageSrc=''
    ></ThemeparkBox>

    <ThemeparkBox
      park='Oakwood Theme Park'
      parkDetails=''
      imageSrc=''
    ></ThemeparkBox>
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
