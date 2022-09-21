/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SmallBlogImg from '../../components/blogComponents/SmallBlogImg';
import { useTranslation } from 'react-i18next';

const imgPath = '/images/blog/royal-family/';

const tp = 'blogs.royalFamilyOrigin.';

export default function RoyalFamilyOrigin() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title='Double A Team | Royal Family Origins'
      description={t(`${tp}blogTitle`)}
      postUrl='royal-family-origin'
    >
      <Text>{t(`${tp}introP1`)}</Text>
      <Text>{t(`${tp}introP2`)}</Text>
      <SmallBlogImg
        src={`${imgPath}pre-eng-kingdoms.webp`}
        alt='Pre England kingdoms'
        caption='English kingdoms in the year 800'
      />
      <Text>
        <b>Egbert (827 - 839)</b> {t(`${tp}Egbert`)}
      </Text>
      <SmallBlogImg
        src={`${imgPath}Egbert.webp`}
        alt='Egbert'
        caption='Egbert'
      />
      <Text>{t(`${tp}Athelstan`)}</Text>
      <SmallBlogImg
        src={`${imgPath}Æthelstan.webp`}
        alt='Æthelstan'
        caption='Æthelstan'
      />
      <Text>{t(`${tp}conc1`)}</Text>
      <Heading>Anglo-Saxons (410 - 1066)</Heading>
      <Text>{t(`${tp}angloSaxonsIntro`)}</Text>
      <Text>{t(`${tp}anglosP1`)}</Text>
      <Text>{t(`${tp}anglosP2`)}</Text>
      <Text>
        <b>Kent</b>
        {t(`${tp}kent`)}
        {new Date().getFullYear()}.
      </Text>
      <SmallBlogImg
        src={`${imgPath}Hengist.webp`}
        alt='Hengist King of Kent'
        caption='Hengist King of Kent'
      />
      <Text>{t(`${tp}Ethelbert`)}</Text>
      <SmallBlogImg
        src={`${imgPath}Æthelberht.webp`}
        alt='Æthelberht of Kent'
        caption='Æthelberht of Kent'
      />
      <Text>{t(`${tp}conclusion`)}</Text>
      <SmallBlogImg
        src={`${imgPath}Queen-Elizabeth-2nd.webp`}
        alt='Queen Elizabeth II'
        caption='Queen Elizabeth II'
      />
      <SmallBlogImg
        src={`${imgPath}Queen-Elizabeth-II.webp`}
        alt='Queen Elizabeth II Coronation'
        caption='Queen Elizabeth II Coronation'
      />
      <Text>1926 - 2022, {t(`${tp}rip`)}</Text>
    </BlogLayout>
  );
}
