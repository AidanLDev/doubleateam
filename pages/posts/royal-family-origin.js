/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SmallBlogImg from '../../components/blogComponents/SmallBlogImg';

const imgPath = '/images/blog/royal-family/';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | Royal Family Origins'
    description='The Origin of the Royal Family'
    postUrl='royal-family-origin'
  >
    <Text>
      During one of my many day dreams, I got thinking how strange it
      is that just by being the son or daughter of specific parents
      will make you heir to the throne. Then I wondered, how did that
      actually begin? How did we decide "Ok you guys will be our
      rulers now." This is the rabbit hole I went down.
    </Text>
    <Text></Text>
    <Text>
      The origins of our modern monarchy can be dated back to late
      800s and early 900s, when the various Anglo-Saxon Kingdoms were
      united by Æthelstan (895-939 AD), also known as Athelstan, of
      the House of Wessex to form the Kingdom of England. Before this,
      what is now known as England was split into different kingdoms
      such as "Northumbria", "Mercia", "East Anglia", "Wessex" etc...
      Each kingdom having their own rulers.
    </Text>
    <SmallBlogImg
      src={`${imgPath}pre-eng-kingdoms.avif`}
      alt='Pre England kingdoms'
      caption='English kingdoms in the year 800'
    />
    <Text>
      So the modern day royal family can be traced back all the way to
      the 900s... But what about the rulers of the Saxon kingdoms?
      Which was the first? And who was the first king of the first
      kingdom? How did this ancient hierarchy begin?
    </Text>
    <Heading>The Saxons (410 - 1066)</Heading>
    <Text>
      It's hard to get much information about this period as there
      aren't many written records that still exist until this day,
      which is why it used to be known as the "Dark Ages". It was a
      time of war and separation from the Roman rule.
    </Text>
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
