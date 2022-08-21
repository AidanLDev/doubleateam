/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import ThemeparkBox from '../../components/blogComponents/ThemeparkBox';
import SimpleLink from '../../components/SimpleLink';
import StyledUL from '../../components/StyledUL';

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
      <Text>
        Stoke-on-Trent is the closest city to Alton Towers, I've stayed at their
        <SimpleLink link='https://www.premierinn.com/gb/en/hotels/england/staffordshire/stoke-on-trent/stoke-on-trent-hanley.html?cid=GLBC_STOHAN'>
          Premier Inn
        </SimpleLink>{' '}
        which set me back around £50 and an extra £9 or so for the breakfast
        buffet, which is sure to set you up for your big day at Alton Towers as
        you're going to be burning off a lot of calories walking around the
        park.
        {/* TODO: Insert photo of P Inn */}
      </Text>
      <Text>
        In the town centre, I found a nice weather spoons too which will sort
        you out with a big old breakfast for less than £10.
        {/* TODO: Insert breakfast pic */}
      </Text>
    </ThemeparkBox>
    <Heading>Price</Heading>
    <Text>
      Always book online in advance if you're planning a day out to Towers, it
      will save you a big chunk of money. Tickets online go for £36 but on the
      door it would cost you a whopping £65.{' '}
      <SimpleLink link='https://www.altontowers.com/tickets-passes/#decoy'>
        Find out more about booking tickets here
      </SimpleLink>
    </Text>
    <Text>
      Good news all merlin pass holders, you can gain free entry to the park on
      selected days (depending on what tier of pass you have). An Alton Towers
      Gold Pass can be purchased for £120, giving you unlimited access to the
      park and discount on food/drink/merch from inside the park.
    </Text>
    <Text>
      This is different to the{' '}
      <SimpleLink link='https://www.merlinannualpass.co.uk/'>
        Merlin annual pass
      </SimpleLink>
      . This pass will give you access to all Merlin parks in the UK;
    </Text>
    <StyledUL
      items={[
        { text: 'Thorpe Park' },
        { text: 'Alton Towers' },
        { text: 'Legoland Windsor' },
        { text: 'Chessington World of Adventure' },
      ]}
    />
    <Text>
      On top of that you will get discount or free entry to the following UK
      attractions:
    </Text>
    <StyledUL
      items={[
        { text: 'The London Eye' },
        { text: 'The London Dungeon' },
        { text: 'SEA LIFE' },
        { text: 'Warwick Castle' },
        { text: 'The Blackpool Tower' },
        { text: 'Madame Tussuads' },
        { text: "Shrek's Adventure! London" },
        { text: 'London Eye River Cruise' },
        { text: 'The Bear Grylls Adventure' },
      ]}
    />
    <Text>
      That's a lot of choice! The pricing varies between different tiers of
      passes from the <b>Discovery Pass</b> at £89, which gives off-peak entry
      to attractions. The <b>Silver Pass</b> at £159, which gives almost year
      round access apart from peak times during summer holidays, the{' '}
      <b>Gold Pass</b> at £220 which gives you almost year round access (345
      days of the year, just excluding some of the peak days in summer) and 20%
      off food/drink around the various attractions. Finally the{' '}
      <b>Platinum Pass</b> at £299 which also includes full 365 days a year
      access to their attractions.
    </Text>
    <Text>In Summary:</Text>
    <StyledUL
      items={[
        {
          text: (
            <span>
              <b>Discovery £89</b> - off peak only access to attractions
            </span>
          ),
        },
        {
          text: (
            <span>
              <b>Silver £159</b> - A lot more dates than discovery, still not
              all peak times + 10% discount off food/drink
            </span>
          ),
        },
        {
          text: (
            <span>
              <b>Gold £220</b> - Almost all year access 345 days of the year +
              20% discount off food/drink
            </span>
          ),
        },
        {
          text: (
            <span>
              <b>Platinum £299</b> - Full year round access + 20% discount off
              food/drink
            </span>
          ),
        },
      ]}
    />
    <Heading>Rides and attractions</Heading>
    <Text>
      This park is packed full of rides, with well over 40 rides, there's
      something for everyone.
    </Text>
    <Heading>Roller Coasters</Heading>
    <ThemeparkBox
      park='The Smiler'
      parkDetails='Most inversions of any roller coaster | Length: 3,838 ft | Drop: 98 ft | speed: 52 mph | inversions: 14 | duration: 2:45'
    >
      <Text>
        The detailed theming and views of the ride you get during the queue adds
        some anticipation. Right from dispatch this coaster has you turning
        upside down as strobe lights flash. I've never come off this ride with
        anything but a smile on my face.
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Galactica'
      parkDetails='First flying coaster | length: 2,755 ft | height: 65 ft | speed: 46 mph | inversions: 2 | duration 1.4'
    >
      <Text>
        Ever wanted to feel like superman? Here's your chance, a unique
        experiance that has you flying around the park, there's a lengthy
        section where you are lying on your back looking up to the clouds which
        is just a spectacular experiance. A coaster everyone needs to add to
        their bucket list. Surprisingly comfortable too!
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Nemesis'
      parkDetails="Europe's first inverted coaster | length: 2,349 ft | height: 42 ft | drop: 104 ft | speed: 50 mph | inversions: 4 | duration 1:20"
    >
      <Text>
        This classic coaster has been dishing out an intense ride experiance
        ever since 1994. There's nothing like it (well apart from the other
        nemesis in Thorpe Park), but what makes this one feel more special is
        the way it intergrates with it's terrain. You dash past rocks that were
        blasted out especially to make room for this special coaster and you
        pass over this giant alien creater a few times. This coaster is properly
        intense, so if that's your thing be sure to give it a ride
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Oblivion'
      parkDetails='Worlds first dive coaster | length: 1,222 ft | height: 65 ft | drop 180ft | speed: 68 mph'
    >
      <Text>
        Don't look down! This scare machine has you facing down into the abyss
        before plummiting 180ft down into a dark mysty hole. There's nothing
        quite like it in the UK, a one drop wonder, but a thrilling experiance
        every single time.
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Rita'
      parkDetails='0 - 100kph in 2.5 seconds | length: 2,099 | height: 68 ft | speed 61mph | duration: 0.25'
    ></ThemeparkBox>
    <ThemeparkBox
      park='Spinball Whizzer'
      parkDetails='Spinning coaster | length: 1,476 ft | height: 55ft | duration: 1:15'
    ></ThemeparkBox>
    <ThemeparkBox
      park='Th13teen'
      parkDetails='Worlds first free fall drop rollercoaster | length: 2,480 ft | height: 65 ft | speed: 41 mph'
    ></ThemeparkBox>
    <ThemeparkBox
      park='Wicker Man'
      parkDetails='Length: 2,603 ft | drop: 72 ft | speed: 43 mph'
    ></ThemeparkBox>
    <Text>Now for some family friendly rollercoasters</Text>
    <ThemeparkBox
      park='Octonauts Rollercoaster Adventure
'
    ></ThemeparkBox>
    <ThemeparkBox park='Runaway Mine Train'></ThemeparkBox>
    <Heading>Flat Rides</Heading>
    <Text>
      There's more to Alton Towers than just rollercoasters! A selection of
      family friendly and thrilling flat rides can be found scattered about the
      park. Here's a selection of said rides:
    </Text>
    <ThemeparkBox
      park='Gangsta Granny The Ride'
      parkDetails="David Walliams' Gansta Granny perfect for families"
    ></ThemeparkBox>
    <ThemeparkBox
      park='Retro Squad'
      parkDetails='Retro themed flat rides featuring Spinjam, a Tivoli Extreme | Funk n Fly, a Super Trooper | Roller Disco, a waltzer'
    >
      <Text>
        Only for those with strong stomachs, fun carnival vibes with these
        classic flat rides and the music for all of these attractions will have
        you dancing and signing like an old school disco.
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Enterprise'
      parkDetails='This ride generates enouugh Gs to let you invert without restraints, a fun experiance, you will feel like an astronought training for a mission to Mars.'
    ></ThemeparkBox>
    {/* <TehemparkBox park='Hex - The legend of the Towers' parkDetails=''>
      
      </ThemeparkBox> */}
    <ThemeparkBox
      park='Duel: THe Haunted House Strikes Back'
      parkDetails='Shoot undead targets to raise your score in this interactive ride. The queue line has you going through a rundown haunted house with plenty of details to keep you entertained during your wait in the line.'
    ></ThemeparkBox>
    <Heading>The Towers and Gardens</Heading>
    <Text>
      We can't talk about Alton Towers without mentioning the old estately home
      that takes up a sizeable chunk of the park.
    </Text>
    <Text>
      <b>The history of Alton Towers</b>: The stately home was once the largest
      private house in Europe. The house has historically been owned by the
      Talbot family since 1406 when Sir John Talbot aquired the estate when he
      married Maud. He was the first Earl of Shrewsbury. The 19th Earl decided
      to open the grounds up to the public to fund repairs to the house around
      the 1890s. This inspired the 20th early to develop the state for tourist
      attractions. However when the earl and his wife separated in 1896, he left
      his wife to live in the estate, although he refused to spend money on
      up-keep of the building. A group of local businessmen bought the estate
      and formed "Alton Towers Limited". By the 1920s they opened the grounds up
      to the public and added cafes, it was extremely popular during the 20s and
      30s. When world war 2 broke out, the estate was re-purposed as a cadet
      training camp.
      {/* Estately home photos */}
    </Text>
    <Text>
      During the 1960s and 1970s, Towers began to see fair rides and other
      attractions spring up in the grounds, while the building itself was left
      deserted after taking heavy damage during the war. Although concrete
      floors were added to the house so vistors could enter and walk around. By
      the 1980s, the new owners of Alton Towers, inspired by Disney, wanted to
      open up a fully fledged theme park. They themed streets inspired by Disney
      parks and opened up a new coaster that was the start of Alton Towers as we
      know it today... <b>The Corkscrew</b>. This was an instant hit, with line
      wait times going up 6 hours.
      {/* Corkscrew photos */}
    </Text>
    <Text>
      To get an arial view of the stunning grounds, you can take the{' '}
      <b>Skyride</b> to one area of the park to another. You will be entertained
      by audio describing some of the history of the park as well as a
      distinctive view of the park.
    </Text>
    <Text>
      There's many hidden gems of beauty throughout the park, you can walk
      through the gardens where you'll see water features such as this:
      {/* water feature phpto */}
    </Text>
    <Text>
      All throughout the park there's beauty, this waterfall is outside one of
      the best rides, The Wicker Man:
      {/* Waterfall image */}
    </Text>
    <Text>
      There's nowhere else quite like Alton Towers. It offers a little something
      to everyone, while being a stunning location in the process.
    </Text>
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
