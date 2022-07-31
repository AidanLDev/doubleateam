/* eslint-disable react/no-unescaped-entities */
import { Text, Heading, Image } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import SimpleLink from '../../components/SimpleLink';

const imagePath = '/images/blog/whatToDoInIndonesia/Jogja/';
const blogTitle = 'How we recommend you enjoy your time in Jogja';

export default function HowToPassIelts() {
  return (
    <BlogLayout
      title='Double A Team | What to do in Jogja'
      description={blogTitle}
      postUrl='what-to-do-in-jogja'
    >
      <BlogTitle text={blogTitle} />
      <Heading>Hotel</Heading>
      <Text>
        We stayed very central in the <b>Jambuluwuk Malioboro Hotel</b>. This is
        a large hotel with some outsanding views, friendly staff and a huge
        buffet breakfast with foods from all over Indonesia and even some
        European options. I mean just check out this stunning garden you'll be
        stuffing your faces in!
        <Image
          src={`${imagePath}hotelBreakfastGarden.jpg`}
          alt='Hotel garden'
        />
        The hotel has a laundry service and is within walking distance to the
        popular shopping disctrict in Malioboro. Plenty to see and do just on
        your doorstep! The hotel was reasonable considering the location and
        especially considering the 5* service we were getting, the staff were
        stars and the hotel itself was so well furnished. It cost around £27
        (est 487.000 IDR) a night
      </Text>
      <Heading>Resturant</Heading>
      <Text>
        We fancied heading out of the main part of the city to soak in some of
        the views you can get around Jogja. At the <b>Candhari Heaven</b> you
        can do just that while eating some delicious Indonesian food or even
        just sitting back and enjoying some of their refreshing fruit smoothies.
        <Image
          src={`${imagePath}niceResturantFood.jpg`}
          alt='Candhari Heaven resturants food'
        />
        Now this place does get busy, so to garuntee a table we would reccomend
        booking in advance.{' '}
        <SimpleLink link='https://www.instagram.com/candhariheaven/'>
          Their Instagram page
        </SimpleLink>{' '}
        Their number: <b>+6281282677677</b>.
      </Text>
      <Image
        src={`${imagePath}niceResturant.jpg`}
        alt='Candhari Heaven resturant'
      />
      <Image
        src={`${imagePath}niceResturantView2.jpg`}
        alt='Candhari Heaven resturant view'
      />
      <Heading>Malioboro</Heading>
      <Text>
        The street where it all happens!
        <Image src={`${imagePath}malioboro.jpg`} alt='Malioboro street' />
        What a fun place to be! If you fancy doing some shopping or eating
        icecream, Malioboro is the place to do it. With countless street
        performers and more shops than you'll know what to do with, this vibrant
        place is a must visit when coming to Jogja.
        <Image
          src={`${imagePath}malioboroGelato.jpg`}
          alt='Gelato in malioboro'
        />
        Jogja was HOT when we visited, so this icecream went down an absolute
        treat.
      </Text>
      <Heading>Hotel 2</Heading>
      <Text>
        Now all of those acitivies we've talked about so far happen in the heart
        of Jogja, however if you venture outside the city by an hour or so,
        there's so much history and beauty to be witnessed. Now if there's one
        thing we love more than travel, it's sleep, so in order to make it to
        the famous sunrise spot "Punthuk Setumbu", we'd have to be a little
        closer to it than our hotel near malioboro.{' '}
        <b>Balkondes Ngargogondo The Gade Village</b> was fairly pricy for what
        you get at 500.000 IDR a night, but what a location. It was only 15 mins
        away from Punthuk Setumbu and felt like such a brethe of fresh air,
        you're truely out in nature here.
        <Image src={`${imagePath}hotel2Rooms.jpg`} alt='Gade Village rooms' />
        Just looking at those rooms relaxes me, beautiful. The welcome we got
        there was top notch too, we were given complimentry drinks and breakfast
        was brought to our door as there was an event on that morning so we
        coulnd't use the resturant.
        <Image
          src={`${imagePath}hotel2Breakfast.jpg`}
          alt='Gade Village Breakfst'
        />{' '}
        The breakfast was tasty and traditional, although we do love our
        breakfast buffets where we can stuff our faces until our bellies can't
        fit any more food in.
      </Text>
      <Heading>Punthuk Setumbu</Heading>
      <Text>
        The reason why we trecked outside of the city, and my god was it worth
        it.
        <Image src={`${imagePath}sunriseSignCrop.jpg`} alt='Punthuk Setumbu' />
        This popular sunrise location is popular for a reason. Sadly it was a
        bit cloudy for us to get the full sunrise experiance, but we did however
        get blown away by the beauty of the place.
        <Image src={`${imagePath}sunrisePlace.jpg`} alt='Punthuk Setumbu' />
        There's plenty of places for some truely memorable photos too if that's
        what you're into.
        <Image src={`${imagePath}loveSign.jpg`} alt='Punthuk Setumbu' />
        We'll let the pictures do all the talking for this one...
        <Image src={`${imagePath}sunrisePlace2.jpg`} alt='Punthuk Setumbu' />
        <Image src={`${imagePath}sunrisePlace3.jpg`} alt='Punthuk Setumbu' />
        Even though you're out in the middle of nowhere, there's food sellers,
        and toilets too. What more could you ask for 😉
      </Text>
      <Heading>Borobudur</Heading>
      <Text>
        You can't come out all the way to Jogja and not visit one of it's
        ancient templtes. We were torn between two, with it being our final day
        in Jogja we could only choose one, Borobudur or the Prambanan Temple...
        well as we're talking about Borobudur you can guess which we chose.
        Borobudur Temple is magnificant, the biggest Buddhist temple built. For
        Indonesian citisens tickets are very cheap, however if you're foreign
        you will be expected to pay a bit extra, around £20 overall, however
        where else can you see such a magnificant landmark? Worth every penny.
        <Image src={`${imagePath}boroboudor.jpg`} alt='boroboudor' />
      </Text>
      <Heading>Travelling to Jogja</Heading>
      <Text>
        In-case you're travelling to Jogja within Indonesia like we were, we
        thought we'd go through some options. We made the journey from Bandung,
        the comfortable quicker way was using the train. Even the cheapest seats
        "eksekutif class" are incredibly comfortable. The train has food and
        beverage sellers and even had a resturant cart. If you're on a tight
        budget you can use this bus from Bandung to Jogja.
        <Image
          src='/images/blog/whatToDoInIndonesia/Jogja/bus-bandung-jogja.jpg'
          alt='bus to Jogja'
        />
        It cost around 300,000 for a ticket, however the journey took over 13
        hours, that is including time spent stopping for passengers, toilet
        stops and lunch was included too (which was surprisingly tasty
        considering the ticket price!).
      </Text>
      <Text>
        We love re-living and sharing these experiances, we hope you can get a
        bit on insight into this facinating place in Indonesia. Safe travels to
        all!
      </Text>
    </BlogLayout>
  );
}
