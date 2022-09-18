/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text, Heading, Image } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SimpleLink from '../../components/SimpleLink';
import Centre from '../../components/Centre';
import { useTranslation } from 'react-i18next';

const transPath = 'blogs.whatToDoInIndonesia.';

export default function HowToPassIelts() {
  const { t } = useTranslation();

  return (
    <BlogLayout
      title='Double A Team | What to do in Indonesia'
      description={t(`${transPath}blogTitle`)}
      postUrl='what-to-do-in-indonesia'
    >
      <Text>{t(`${transPath}intro`)}</Text>
      <Heading size='md'>{t(`${transPath}bandungHeader`)}</Heading>
      <Text>
        {t(`${transPath}bandungIntro`)}...
        {/* TODO: add photos and a few hiking places from Arni */}
      </Text>
      <Text>
        <b>{t(`${transPath}volcanoHeader`)} </b>
      </Text>
      <Text>
        {t(`${transPath}volcanoIntro`)}
        <Image
          src='/images/blog/whatToDoInIndonesia/Bandung/KawaRatu.webp'
          alt='Kawa Ratu volcano'
        />
        {t(`${transPath}volcanoP1`)}
        <Image
          src='/images/blog/whatToDoInIndonesia/Bandung/TogetherByKawaRatuSign.webp'
          alt='Aidan and Arni enjoying Kawa Ratu volcano'
        />
      </Text>
      <Heading>{t(`${transPath}jogjaHeading`)}</Heading>
      <Text>
        {t(`${transPath}jogjaIntro`)}{' '}
        <SimpleLink link='/posts/what-to-do-in-jogja'>
          {t(`${transPath}jogjaLink`)}
        </SimpleLink>{' '}
        {t(`${transPath}jogjaP1`)}
      </Text>
      <strong>{t(`${transPath}candhari`)}</strong>
      <Centre>
        <Image
          alt='Candhari Heaven'
          src='/images/blog/whatToDoInIndonesia/Jogja/niceResturant.webp'
        />
      </Centre>
      <Text>{t(`${transPath}candhariIntro`)}</Text>
      <strong>{t(`${transPath}marioboro`)}</strong>
      <Centre>
        <Image
          alt='Malioboro street'
          src='/images/blog/whatToDoInIndonesia/Jogja/malioboro.webp'
        />
      </Centre>
      <Text>{t(`${transPath}marioboroIntro`)}</Text>
      <strong>{t(`${transPath}borobudur`)}</strong>
      <Centre>
        <Image
          alt='Borobudur'
          src='/images/blog/whatToDoInIndonesia/Jogja/boroboudor.webp'
        />
      </Centre>
      <Text>{t(`${transPath}borobudurIntro`)}</Text>
      <Heading>malang</Heading>
      <Text>
        {t(`${transPath}malangIntro`)}{' '}
        <SimpleLink link='https://www.explorebromo.com/'>
          Explore Bromo
        </SimpleLink>{' '}
        {t(`${transPath}malamP1`)}
      </Text>
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/dsc01948.webp'
      />
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/DSC01999.webp'
      />
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/DSC02006.webp'
      />
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/DSC02153.webp'
      />
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/20220603_012448778_iOS.webp'
      />
      <Text>{t(`${transPath}conculsion`)}</Text>
      <Text>{t(`${transPath}outro`)} ✈️🌍☀️🏔️</Text>
    </BlogLayout>
  );
}
