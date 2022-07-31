/* eslint-disable react/no-unescaped-entities */
import { Text, Heading, Image } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import SimpleLink from '../../components/SimpleLink';

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
          src='/images/blog/whatToDoInIndonesia/Bandung/KawaRatu.jpg'
          alt='Kawa Ratu volcano'
        />
        Because of the weather it was nice and quiet when we went too, plenty of
        space for photos and exploration.
        {/* TODO: Reduce image sizes */}
        <Image
          src='/images/blog/whatToDoInIndonesia/Bandung/TogetherByKawaRatuSign.jpg'
          alt='Aidan and Arni enjoying Kawa Ratu volcano'
        />
      </Text>
      <Heading>Jogja</Heading>
      <Text>
        Jogja is a historical baeuty of a place, countless choices to be made as
        there's a lot to see in this special city in Indonesia.{' '}
        <SimpleLink link='/posts/what-to-do-in-jogja'>
          We go into detail here about what there is to see in Jogja
        </SimpleLink>{' '}
        and where we'd reccomed based on our experiance. A few places to note
        are:
      </Text>
      <strong>Candhari Heaven restaurant</strong>
      <Image
        alt='Candhari Heaven'
        src='/images/blog/whatToDoInIndonesia/Jogja/niceResturant.jpg'
      />
      <Text>
        To eat some delicious food with the most stunning backdrop and multiple
        places for memorable photos. We couldn't recommend this place enough.
        They sell a selection of refreshing drinks too so even after you're done
        eating, you can just relax with a few drinks and soak up that unique
        view of Jogja.
      </Text>
      <strong>Malioboro</strong>
      <Image
        alt='Malioboro street'
        src='/images/blog/whatToDoInIndonesia/Jogja/malioboro.jpg'
      />
      <Text>
        This is where it all happens, with countless shops and various street
        entertainers. The centre of Jogja is an active vibrant street, plenty to
        see here.
      </Text>
      <strong>Borobudur</strong>
      <Image
        alt='Borobudur'
        src='/images/blog/whatToDoInIndonesia/Jogja/boroboudor.jpg'
      />
      <Text>
        Jogja is a historic place with ancient temples that date way back.
        Borobudur dates back to the 9th century and is the largest Buddhist
        temple. If you're in the region, this is a must see.
      </Text>
      <Heading>Malang</Heading>
      <Text>
        During our journey through Java, we made our way east to Malang, this
        city feels so refreshing, surrounded by the most beautiful mountainous
        scenery. We had a tour with{' '}
        <SimpleLink link='https://www.explorebromo.com/'>
          Explore Bromo
        </SimpleLink>{' '}
        and we were so chuffed we chose them. They were very reasonable in price
        compared to some other and it only cost a little extra to include a
        camera man who showed us all the best spots, gave plenty of background
        and of course took some stunning photos:
      </Text>
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/DSC01948.JPG'
      />
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/DSC01982.JPG'
      />
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/DSC01999.JPG'
      />
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/DSC02006.JPG'
      />
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/DSC02153.JPG'
      />
      <Image
        alt='Bromo tour pic'
        src='/images/blog/whatToDoInIndonesia/Malang/20220603_012448778_iOS.jpg'
      />
      <Text>
        With your eyes blessed with this stunning Indonesian nature, we hope you
        too can enjoy and explore this enchanting country. The sheer size of it
        means you can visit this country time and time again and have a
        different experiance every time.
      </Text>
      <Text>We hope you enjoy your time and have safe travels ✈️🌍☀️🏔️</Text>
    </BlogLayout>
  );
}
