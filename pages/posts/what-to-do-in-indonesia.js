/* eslint-disable react/no-unescaped-entities */
import { Text, Heading, Image } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';

export default function HowToPassIelts() {
  const blogTitle = 'How to spend your time in Indonesia';
  return (
    <BlogLayout
      title='Double A Team | What to do in Indonesia'
      description={blogTitle}
      postUrl='what-to-do-in-indonesia'
    >
      <BlogTitle text={blogTitle} />
      <Text>
        This is going to be a quick summary of a few places we visited and a
        little bit of insight into them to help you plan your Indonesian
        getaway. We will go into more depth on places we think deserve more
        attention in seperate blogs but for a nice overview, here is our
        Indonesian travel guide.
      </Text>
      <Heading size='md'>Bandung</Heading>
      <Text>
        My wife could go on for days about what Bandung is like as a city in
        general as she has spent most of her life living there! From a western
        perspective, Bandung is a breath of freshair, it's the first city I
        visited after Jakarta and the climate is so much fresher. The air feels
        clean as it's surrounded by mountains/volcanos and the temprature is
        cooler as a result. If you're into hiking there's plenty around Bandung
        to get stuck into. The last couple of times we went, it was the rainy
        season so we gave that a miss but here are some reccomendations from
        Arni... todo({/* TODO: add photos and a few hiking places from Arni */})
      </Text>
      <Text>
        <b>Gunung Tangkuban Perahu </b>
      </Text>
      <Text>
        This active volcano is stunning, it's about 30km north of Bandung city
        and it last erupted in 2019. In fact it just recently started smoking
        again when we went back in February 2022
        <Image
          src='/images/blog/whatToDoInIndonesia/KawaRatu.jpg'
          alt='Kawa Ratu volcano'
        />
        Because of the weather it was nice and quiet when we went too, plenty of
        space for photos and exploration.
        {/* TODO: Reduce image sizes */}
        <Image
          src='/images/blog/whatToDoInIndonesia/TogetherByKawaRatuSign.jpg'
          alt='Aidan and Arni enjoying Kawa Ratu volcano'
        />
      </Text>
    </BlogLayout>
  );
}
