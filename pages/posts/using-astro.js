/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SimpleLink from '../../components/SimpleLink';

const tp = 'blogs.usingAstro.';

const imgComp = <code>{`<Image />`}</code>;
const pictureComp = <code>{`<Picture />`}</code>;

export default function UsingAstro() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title='Double A Team | Astro Frameworks'
      description={t(`${tp}blogTitle`)}
      postUrl='using-astro'
    >
      <Heading>Images</Heading>
      <Text>
        Compressing images will reduce your site load time and
        increase that all important SEO score as a result. Astro knows
        this and have implemented their own components, {imgComp}
        and {pictureComp}, that will optomise images. {imgComp} should
        be used when you want to ensure the quality of the image, for
        things such as logos. You specify the images height, width
        and/or aspect ratio. The {pictureComp} on the otherhand should
        be used if you want responsive images that can change based on
        the users device, screensize and bandwidth.
      </Text>
      <Text>
        Images should be stored in the <code>/public/*</code> dir and
        the path in your code should be relative to the public dir.
        For example an image stored in
        '/public/images/avatars/myCoolAvatar.png' you will find the
        image src like src="/images/avatars/myCoolAvatar.png"
      </Text>
      <Text>
        Astro have{' '}
        <SimpleLink link='https://docs.astro.build/en/guides/images/'>
          a detailed guide on images here.
        </SimpleLink>
      </Text>
      <Text>
        On the topic and unrelated to Astro, it is good to reduce the
        size of images on your site, as you'll not likely be
        displaying them at a high resolution. To shrink your images
        down you can{' '}
        <SimpleLink link='https://www.reduceimages.com/'>
          use this website
        </SimpleLink>
        . To convert images to the smallest possible size (AVIF
        format) use{' '}
        <SimpleLink link='https://avif.io/'>
          the following website
        </SimpleLink>
        . And for the more widely supported yet still good image
        compressing file type WEBP you can{' '}
        <SimpleLink link='https://tiny-img.com/webp/'>
          convert images using this site.
        </SimpleLink>
      </Text>
    </BlogLayout>
  );
}
