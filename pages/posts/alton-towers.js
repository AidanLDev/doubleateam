/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Heading, Text, AspectRatio, Center } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import ThemeparkBox from '../../components/blogComponents/ThemeparkBox';
import SimpleLink from '../../components/SimpleLink';
import StyledUL from '../../components/StyledUL';
import SmallBlogImg from '../../components/blogComponents/SmallBlogImg';

const blogTitle = 'All you need to know about Alton Towers';

const imgPath = '/images/blog/theme-parks/alton-towers/';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | Alton Towers'
    description={blogTitle}
    postUrl='alton-towers'
  >
    <Text>
      The biggest park in the UK, coming in at a massive 910 acres of
      thrills, stunning well-kept gardens, and stately home. It’s the
      full package and caters to both families and thrill seekers.
    </Text>
    <ThemeparkBox
      park='Location'
      parkDetails='Farley Ln, Alton, Stoke-on-Trent ST10 4DB'
      imageSrc={`${imgPath}staffordshire-countryside.webp`}
    >
      <Text>
        The park is in central Staffordshire, close to the city
        Stoke-On-Trent. However you’re getting to Towers, you’ll be
        sure to be greeted by the glorious British countryside.
      </Text>
      <Text>
        Stoke-on-Trent is the closest city to Alton Towers, I've
        stayed at their
        <SimpleLink link='https://www.premierinn.com/gb/en/hotels/england/staffordshire/stoke-on-trent/stoke-on-trent-hanley.html?cid=GLBC_STOHAN'>
          Premier Inn
        </SimpleLink>{' '}
        which set me back around £50 and an extra £9 or so for the
        breakfast buffet, which is sure to set you up for your big day
        at Alton Towers as you're going to be burning off a lot of
        calories walking around the park.
        <SmallBlogImg
          src={`${imgPath}premier-inn.webp`}
          alt='Premier Inn'
        />
      </Text>
      <Text>
        In the town centre, I found a nice weather spoons too which
        will sort you out with a big old breakfast for less than £10.
        <SmallBlogImg src={`${imgPath}spoons-breakfast.webp`} />
      </Text>
    </ThemeparkBox>
    <Heading>Price</Heading>
    <Text>
      Always book online in advance if you're planning a day out to
      Towers, it will save you a big chunk of money. Tickets online go
      for £36 but on the door it would cost you a whopping £65.{' '}
      <SimpleLink link='https://www.altontowers.com/tickets-passes/#decoy'>
        Find out more about booking tickets here
      </SimpleLink>
    </Text>
    <Text>
      Good news all merlin pass holders, you can gain free entry to
      the park on selected days (depending on what tier of pass you
      have). An Alton Towers Gold Pass can be purchased for £120,
      giving you unlimited access to the park and a discount on
      food/drink/merch from inside the park.
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
      On top of that, you will get a discount or free entry to the
      following UK attractions:
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
      That's a lot of choices! The pricing varies between different
      tiers of passes from the <b>Discovery Pass</b> at £89, which
      gives off-peak entry to attractions. The <b>Silver Pass</b> at
      £159, which gives almost year round access apart from peak times
      during summer holidays, the <b>Gold Pass</b> at £220 which gives
      you almost year round access (345 days of the year, just
      excluding some of the peak days in summer) and 20% off
      food/drink around the various attractions. Finally the{' '}
      <b>Platinum Pass</b> at £299 which also includes full 365 days a
      year access to their attractions.
    </Text>
    <Text>In Summary:</Text>
    <StyledUL
      items={[
        {
          text: (
            <span>
              <b>Discovery £89</b> - off peak only access to
              attractions
            </span>
          ),
        },
        {
          text: (
            <span>
              <b>Silver £159</b> - A lot more dates than discovery,
              still not all peak times + 10% discount off food/drink
            </span>
          ),
        },
        {
          text: (
            <span>
              <b>Gold £220</b> - Almost all year access 345 days of
              the year + 20% discount off food/drink
            </span>
          ),
        },
        {
          text: (
            <span>
              <b>Platinum £299</b> - Full year round access + 20%
              discount off food/drink
            </span>
          ),
        },
      ]}
    />
    <Text>
      Personally I managed to get a hefty discount on my Merlin Pass
      by buying it during a Black Friday deal. So for those bargain
      hunters out there, keep that in mind 😉
    </Text>
    <Heading>Rides and attractions</Heading>
    <Text>
      This park is packed full of rides, with well over 40 rides,
      there are something for everyone.
    </Text>
    <Heading>Roller Coasters</Heading>
    <ThemeparkBox
      park='The Smiler'
      parkDetails='Most inversions of any roller coaster | Length: 3,838 ft | Drop: 98 ft | speed: 52 mph | inversions: 14 | duration: 2:45'
      imageSrc={`${imgPath}smiler.webp`}
    >
      <Text>
        The detailed theming and views of the ride you get during the
        queue adds some anticipation. Right from dispatch this coaster
        has you turning upside down as strobe lights flash. I've never
        come off this ride with anything but a smile on my face.
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Galactica'
      parkDetails='First flying coaster | length: 2,755 ft | height: 65 ft | speed: 46 mph | inversions: 2 | duration: 1.4'
      imageSrc={`${imgPath}air.webp`}
    >
      <Text>
        Ever wanted to feel like Superman? Here's your chance, a
        unique experience that has you flying around the park, there's
        a lengthy section where you are lying on your back looking up
        to the clouds which are just a spectacular experience. A
        coaster everyone needs to add to their bucket list.
        Surprisingly comfortable too!
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Nemesis'
      imageSrc={`${imgPath}nemesis.webp`}
      parkDetails="Europe's first inverted coaster | length: 2,349 ft | height: 42 ft | drop: 104 ft | speed: 50 mph | inversions: 4 | duration: 1:20"
    >
      <Text>
        This classic coaster has been dishing out an intense ride
        experience ever since 1994. There's nothing like it (well
        apart from the other nemesis in Thorpe Park), but what makes
        this one feel more special is the way it integrates with its
        terrain. You dash past rocks that were blasted out especially
        to make room for this special coaster and you pass over this
        giant alien creator a few times. This coaster is properly
        intense, so if that's your thing be sure to give it a ride
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Oblivion'
      imageSrc={`${imgPath}oblivion.webp`}
      parkDetails='Worlds first dive coaster | length: 1,222 ft | height: 65 ft | drop 180ft | speed: 68 mph'
    >
      <Text>
        Don't look down! This scare machine has you facing down into
        the abyss before plummeting 180ft down into a dark misty hole.
        There's nothing quite like it in the UK, a one-drop wonder,
        but a thrilling experience every single time.
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Rita'
      imageSrc={`${imgPath}rita.webp`}
      parkDetails='0 - 100kph in 2.5 seconds | length: 2,099 | height: 68 ft | speed 61mph | duration: 0.25'
    ></ThemeparkBox>
    <ThemeparkBox
      park='Spinball Whizzer'
      parkDetails='Spinning coaster | length: 1,476 ft | height: 55ft | duration: 1:15'
      imageSrc={`${imgPath}spinball.webp`}
    ></ThemeparkBox>
    <ThemeparkBox
      park='Th13teen'
      parkDetails='Worlds first free fall drop rollercoaster | length: 2,480 ft | height: 65 ft | speed: 41 mph'
      imageSrc={`${imgPath}Thirteen-Alton_towers.webp`}
    ></ThemeparkBox>
    <ThemeparkBox
      park='Wicker Man'
      parkDetails='Length: 2,603 ft | drop: 72 ft | speed: 43 mph'
      imageSrc='/images/blog/best-uk-theme-parks.webp'
    >
      <Text>
        This coaster has a fun well made pre-show and some of the best
        theming on any rollercoaster in the world. It's also a speedy
        guy for a family thrill coaster.
      </Text>
    </ThemeparkBox>
    <Text>Now for some family friendly rollercoasters</Text>
    <ThemeparkBox
      park='Octonauts Rollercoaster Adventure'
      imageSrc={`${imgPath}octonoughts.webp`}
    ></ThemeparkBox>
    <ThemeparkBox
      park='Runaway Mine Train'
      imageSrc={`${imgPath}runaway-mine-train.webp`}
    ></ThemeparkBox>
    <Heading>Flat Rides</Heading>
    <Text>
      There's more to Alton Towers than just rollercoasters! A
      selection of family friendly and thrilling flat rides can be
      found scattered about the park. Here's a selection of said
      rides:
    </Text>
    <ThemeparkBox
      park='Gangsta Granny The Ride'
      parkDetails="David Walliams' Gansta Granny perfect for families"
      imageSrc={`${imgPath}gangsta-granny.webp`}
    ></ThemeparkBox>
    <ThemeparkBox
      park='Retro Squad'
      parkDetails='Retro themed flat rides featuring Spinjam, a Tivoli Extreme | Funk n Fly, a Super Trooper | Roller Disco, a waltzer'
      imageSrc={`${imgPath}retro.webp`}
    >
      <Text>
        Only for those with strong stomachs, fun carnival vibes with
        these classic flat rides and the music for all of these
        attractions will have you dancing and signing like an
        old-school disco.
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Enterprise'
      parkDetails='This ride generates enough Gs to let you invert without restraints, a fun experience, you will feel like an astronaut training for a mission to Mars.'
      imageSrc={`${imgPath}enterprise.webp`}
    ></ThemeparkBox>
    {/* <TehemparkBox park='Hex - The legend of the Towers' parkDetails=''>
      
      </ThemeparkBox> */}
    <ThemeparkBox
      park='Duel: The Haunted House Strikes Back'
      parkDetails='Shoot undead targets to raise your score in this interactive ride. The queue line has you going through a rundown haunted house with plenty of details to keep you entertained during your wait in the line.'
      imageSrc={`${imgPath}duel.webp`}
    ></ThemeparkBox>
    <Heading>The Towers and Gardens</Heading>
    <Text>
      We can't talk about Alton Towers without mentioning the old
      stately home that takes up a sizeable chunk of the park.
    </Text>
    <Text>
      <b>The history of Alton Towers</b>: The stately home was once
      the largest private house in Europe. The house has historically
      been owned by the Talbot family since 1406 when Sir John Talbot
      acquired the estate when he married Maud. He was the first Earl
      of Shrewsbury. The 19th Earl decided to open the grounds up to
      the public to fund repairs to the house around the 1890s. This
      inspired the 20th early to develop the state for tourist
      attractions. However, when the earl and his wife separated in
      1896, he left his wife to live on the estate, although he
      refused to spend money on the up-keep of the building. A group
      of local businessmen bought the estate and formed "Alton Towers
      Limited". By the 1920s they opened the grounds up to the public
      and added cafes, it was extremely popular during the 20s and
      30s. When world war 2 broke out, the estate was re-purposed as a
      cadet training camp.
      <SmallBlogImg
        src={`${imgPath}stately-home.webp`}
        alt='stately home'
      />
    </Text>
    <Text>
      During the 1960s and 1970s, Towers began to see fair rides and
      other attractions spring up on the grounds, while the building
      itself was left deserted after taking heavy damage during the
      war. Although concrete floors were added to the house so
      visitors could enter and walk around. By the 1980s, the new
      owners of Alton Towers, inspired by Disney, wanted to open up a
      fully-fledged theme park. They themed streets inspired by Disney
      parks and opened up a new coaster that was the start of Alton
      Towers as we know it today... <b>The Corkscrew</b>. This was an
      instant hit, with line wait times going up 6 hours.
      <SmallBlogImg
        src={`${imgPath}corckscrew.webp`}
        alt='Old corckscrew rollercoaster'
      />
    </Text>
    <Text>
      To get an aerial view of the stunning grounds, you can take the{' '}
      <b>Skyride</b> to one area of the park to another. You will be
      entertained by audio describing some of the histories of the
      park as well as a distinctive view of the park.
    </Text>
    <Text>
      There are many hidden gems of beauty throughout the park, you
      can walk through the gardens where you'll see water features
      such as this:
      <Center>
        <AspectRatio w='500px' ratio={1}>
          <video
            title='Towers Garden Waterfeature'
            src={`${imgPath}water-feature.MOV`}
            autoPlay
            muted
            loop
          />
        </AspectRatio>
      </Center>
    </Text>
    <Text>
      Throughout the park, there's beauty, this waterfall is outside
      one of the best rides, The Wicker Man:
      <SmallBlogImg
        src={`${imgPath}waterfall-still.webp`}
        alt='Waterfall'
      />
    </Text>
    <Heading>Gallery</Heading>
    <SmallBlogImg
      src={`${imgPath}me-and-bob.webp`}
      alt='Me and big b'
    />
    <Text>
      <Center>
        <AspectRatio w='500px' ratio={1}>
          <video
            title='Oblivion'
            src={`${imgPath}oblivion.MOV`}
            autoPlay
            muted
            loop
          />
        </AspectRatio>
      </Center>
    </Text>

    <Text>
      <Center>
        <AspectRatio w='500px' ratio={1}>
          <video
            title='Waterfall'
            src={`${imgPath}waterfall.MOV`}
            autoPlay
            muted
            loop
          />
        </AspectRatio>
      </Center>
    </Text>
    <Text>
      There's nowhere else quite like Alton Towers. It offers a little
      something to everyone, while being a stunning location in the
      process.
    </Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | Alton Towers'
    description={blogTitle}
    postUrl='alton-towers'
  >
    <Text>
      Taman terbesar di Inggris, dengan luas 910 hektar yang
      mendebarkan, taman terawat yang menakjubkan, dan rumah yang
      megah. Ini paket lengkap dan melayani keluarga dan pencari
      sensasi.
    </Text>
    <ThemeparkBox
      park='Lokasi'
      parkDetails='Farley Ln, Alton, Stoke-on-Trent ST10 4DB'
      imageSrc={`${imgPath}staffordshire-countryside.webp`}
    >
      <Text>
        Taman ini berada di pusat Staffordshire, dekat dengan kota
        Stoke-On-Trent. Bagaimanapun Anda pergi ke Towers, Anda pasti
        akan disambut oleh pedesaan Inggris yang megah.
      </Text>
      <Text>
        Stoke-on-Trent adalah kota terdekat dengan Alton Towers, saya
        pernah menginap di
        <SimpleLink link='https://www.premierinn.com/gb/en/hotels/england/staffordshire/stoke-on-trent/stoke-on-trent-hanley.html?cid=GLBC_STOHAN'>
          Premier Inn
        </SimpleLink>{' '}
        yang membuat saya kembali sekitar £ 50 dan tambahan £ 9 atau
        lebih untuk sarapan prasmanan, yang pasti akan menyiapkan Anda
        untuk hari besar Anda di Alton Towers sebagai Anda akan
        membakar banyak kalori saat berjalan-jalan taman.
        <SmallBlogImg
          src={`${imgPath}premier-inn.webp`}
          alt='Premier Inn'
        />
      </Text>
      <Text>
        Di pusat kota, saya juga menemukan sendok cuaca yang bagus
        yang akan menyortir Anda keluar dengan sarapan besar dengan
        harga kurang dari £10.
        <SmallBlogImg src={`${imgPath}spoons-breakfast.webp`} />
      </Text>
    </ThemeparkBox>
    <Heading>Harga</Heading>
    <Text>
      Selalu pesan online terlebih dahulu jika Anda merencanakan hari
      keluar ke Towers, it akan menghemat banyak uang. Tiket online
      dijual seharga £36 tetapi di pintu itu akan dikenakan biaya
      sebesar £ 65.{' '}
      <SimpleLink link='https://www.altontowers.com/tickets-passes/#decoy'>
        Cari tahu lebih lanjut tentang pemesanan tiket di sini
      </SimpleLink>
    </Text>
    <Text>
      Kabar baik semua pemegang merlin pass, Anda bisa mendapatkan
      masuk gratis ke taman di hari yang dipilih (tergantung pada
      tingkat pass yang Anda miliki). Menara Alton Gold Pass dapat
      dibeli seharga £120, memberi Anda akses tak terbatas ke taman
      dan diskon makanan/minuman/merch dari dalam taman.
    </Text>
    <Text>
      Ini berbeda dengan{' '}
      <SimpleLink link='https://www.merlinannualpass.co.uk/'>
        Merlin annual pass
      </SimpleLink>
      . Pass ini akan memberi Anda akses ke semua taman Merlin di
      Inggris;
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
      Selain itu, Anda akan mendapatkan diskon atau masuk gratis ke UK
      berikut atraksi:
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
      Itu banyak pilihan! Harga bervariasi antara berbagai tingkatan
      tiket masuk dari <b>Discovery Pass</b> seharga £89, yang
      memberikan tiket masuk di luar jam sibuk untuk atraksi.{' '}
      <b>Silver Pass</b> seharga £159, yang memberikan waktu hampir
      setahun akses pulang pergi selain dari jam sibuk selama liburan
      musim panas, <b>Gold Pass</b> seharga £220 yang memberi Anda
      akses hampir sepanjang tahun (345 hari dalam setahun, hanya
      mengecualikan beberapa hari puncak di musim panas) dan 20% off
      makanan/minuman di sekitar berbagai atraksi. Akhirnya{}
      <b>Platinum Pass</b> seharga £299 yang juga termasuk 365 hari
      penuh setahun akses ke atraksi mereka.
    </Text>
    <Text>Kesimpulan:</Text>
    <StyledUL
      items={[
        {
          text: (
            <span>
              <b>Discovery £89</b> - di luar puncak hanya akses ke
              atraksi
            </span>
          ),
        },
        {
          text: (
            <span>
              <b>Silver £159</b> - Lebih banyak tanggal daripada
              Discovery, masih belum semua jam sibuk + diskon 10%
              untuk makanan/minuman
            </span>
          ),
        },
        {
          text: (
            <span>
              <b>Gold £220</b> - Hampir sepanjang tahun mengakses 345
              hari dalam setahun + Diskon 20% untuk makanan/minuman
            </span>
          ),
        },
        {
          text: (
            <span>
              <b>Platinum £299</b> - Akses sepanjang tahun penuh +
              diskon 20% makanan Minuman
            </span>
          ),
        },
      ]}
    />
    <Heading>Wahana dan atraksi</Heading>
    <Text>
      Taman ini penuh dengan wahana, dengan lebih dari 40 wahana, ada
      sesuatu untuk semuanya.
    </Text>
    <Heading>Roller Coasters</Heading>
    <ThemeparkBox
      park='The Smiler'
      parkDetails='Roller Coasteost inversi roller coaster manapun | Panjangnya: 3,838 ft | Menjatuhkan: 98 ft | kecepatan: 52 mph | inversi: 14 | durasi: 2:45'
      imageSrc={`${imgPath}smiler.webp`}
    >
      <Text>
        Tema terperinci dan pemandangan perjalanan yang Anda dapatkan
        selama antrean menambahkan beberapa antisipasi. Sejak
        pengiriman coaster ini membuat Anda berputar terbalik saat
        lampu strobo berkedip. Saya tidak pernah turun dari perjalanan
        ini dengan apa pun kecuali senyum di wajahku.
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Galactica'
      parkDetails='First flying coaster | Panjangnya: 2,755 ft | height: 65 ft | kecepatan: 46 mph | inversi: 2 | durasi: 1.4'
      imageSrc={`${imgPath}air.webp`}
    >
      <Text>
        Pernah ingin merasa seperti Superman? Inilah kesempatan Anda,
        yang unik pengalaman yang membuat Anda terbang di sekitar
        taman, ada yang panjang bagian di mana Anda berbaring
        telentang melihat ke awan yang hanya pengalaman yang
        spektakuler. Sebuah tatakan gelas yang perlu ditambahkan semua
        orang daftar ember mereka. Anehnya nyaman juga!
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Nemesis'
      imageSrc={`${imgPath}nemesis.webp`}
      parkDetails="Europe's first inverted coaster | Panjangnya: 2,349 ft | height: 42 ft | Menjatuhkan: 104 ft | kecepatan: 50 mph | inversi: 4 | durasi: 1:20"
    >
      <Text>
        Coaster klasik ini telah memberikan pengalaman berkendara yang
        intens sejak tahun 1994. Tidak ada yang seperti itu (terpisah
        dari yang lain musuh bebuyutan di Thorpe Park), tapi yang
        membuat yang satu ini terasa lebih spesial adalah cara itu
        terintegrasi dengan medannya. Anda berlari melewati bebatuan
        yang meledak terutama untuk memberi ruang bagi coaster khusus
        ini dan Anda melewati pencipta alien raksasa ini beberapa
        kali. Tatakan gelas ini benar intens, jadi jika itu yang Anda
        inginkan, pastikan untuk mencobanya
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Oblivion'
      imageSrc={`${imgPath}oblivion.webp`}
      parkDetails='Worlds first dive coaster | Panjangnya: 1,222 ft | tinggi: 65 ft | drop 180ft | kecepatan: 68 mph'
    >
      <Text>
        Jangan melihat ke bawah! Mesin menakut-nakuti ini membuat Anda
        menghadap ke dalam jurang sebelum jatuh 180 kaki ke dalam
        lubang berkabut gelap. Tidak ada apa-apa cukup seperti itu di
        Inggris, keajaiban satu tetes, tetapi pengalaman yang
        mendebarkan setiap saat.
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Rita'
      imageSrc={`${imgPath}rita.webp`}
      parkDetails='0 - 100kph in 2.5 seconds | Panjangnya: 2,099 | tinggi: 68 ft | speed 61mph | durasi: 0.25'
    ></ThemeparkBox>
    <ThemeparkBox
      park='Spinball Whizzer'
      parkDetails='Pemintalan coaster | Panjangnya: 1,476 ft | tinggi: 55ft | durasi: 1:15'
      imageSrc={`${imgPath}spinball.webp`}
    ></ThemeparkBox>
    <ThemeparkBox
      park='Th13teen'
      parkDetails='Rollercoaster jatuh bebas pertama di dunia | Panjangnya: 2,480 ft | tinggi: 65 ft | kecepatan: 41 mph'
      imageSrc={`${imgPath}Thirteen-Alton_towers.webp`}
    ></ThemeparkBox>
    <ThemeparkBox
      park='Wicker Man'
      parkDetails='Panjangnya: 2,603 ft | Menjatuhkan: 72 ft | kecepatan: 43 mph'
      imageSrc='/images/blog/best-uk-theme-parks.webp'
    >
      <Text>
        Coaster ini memiliki pra-pertunjukan yang dibuat dengan baik
        dan beberapa tema terbaik di rollercoaster mana pun di dunia.
        Itu juga pria yang cepat untuk keluarga roller coaster.
      </Text>
    </ThemeparkBox>
    <Text>Sekarang untuk beberapa rollercoaster ramah keluarga</Text>
    <ThemeparkBox
      park='Octonauts Rollercoaster Adventure'
      imageSrc={`${imgPath}octonoughts.webp`}
    ></ThemeparkBox>
    <ThemeparkBox
      park='Runaway Mine Train'
      imageSrc={`${imgPath}runaway-mine-train.webp`}
    ></ThemeparkBox>
    <Heading>Flat Rides</Heading>
    <Text>
      Ada lebih banyak hal di Alton Towers daripada sekadar
      rollercoaster! Sebuah pilihan dari wahana datar yang ramah
      keluarga dan mendebarkan dapat ditemukan tersebar di sekitar
      taman. Berikut pilihan wahana tersebut:
    </Text>
    <ThemeparkBox
      park='Gangsta Granny The Ride'
      parkDetails="David Walliams' Gansta Granny cocok untuk keluarga"
      imageSrc={`${imgPath}gangsta-granny.webp`}
    ></ThemeparkBox>
    <ThemeparkBox
      park='Retro Squad'
      parkDetails='Retro themed flat rides menampilkan Spinjam, a Tivoli Extreme | Funk n Fly, a Super Trooper | Roller Disco, pemain waltzer'
      imageSrc={`${imgPath}retro.webp`}
    >
      <Text>
        Hanya untuk mereka yang memiliki perut kuat, suasana karnaval
        yang menyenangkan dengan ini wahana flat klasik dan musik
        untuk semua atraksi ini akan ada Anda menari dan
        menandatangani seperti disko sekolah tua.
      </Text>
    </ThemeparkBox>
    <ThemeparkBox
      park='Enterprise'
      parkDetails='Perjalanan ini menghasilkan Gs yang cukup untuk memungkinkan Anda membalikkan tanpa hambatan, pengalaman yang menyenangkan, Anda akan merasa seperti pelatihan astronot untuk misi ke Mars.'
      imageSrc={`${imgPath}enterprise.webp`}
    ></ThemeparkBox>
    {/* <TehemparkBox park='Hex - The legend of the Towers' parkDetails=''>
      
      </ThemeparkBox> */}
    <ThemeparkBox
      park='Duel: The Haunted House Strikes Back'
      parkDetails='Tembak target mayat hidup untuk meningkatkan skor Anda dalam perjalanan interaktif ini. Garis antrian membuat Anda melewati rumah hantu kumuh dengan banyak detail untuk menghibur Anda selama menunggu di antrean.'
      imageSrc={`${imgPath}duel.webp`}
    ></ThemeparkBox>
    <Heading>The Towers dan Taman</Heading>
    <Text>
      Kita tidak bisa membicarakan Alton Towers tanpa menyebut rumah
      tua yang megah yang memakan bagian taman yang cukup besar.
    </Text>
    <Text>
      <b>Sejarah Alton Towers</b>: Rumah megah itu pernah menjadi yang
      terbesar rumah pribadi di Eropa. Rumah itu secara historis
      dimiliki oleh Keluarga Talbot sejak 1406 ketika Sir John Talbot
      memperoleh warisan ketika dia menikah dengan Maud. Dia adalah
      Earl of Shrewsbury pertama. Earl ke-19 memutuskan membuka
      pekarangan untuk umum guna mendanai perbaikan rumah di sekitar
      tahun 1890-an. Ini mengilhami awal 20 untuk mengembangkan negara
      untuk turis atraksi. Namun, ketika earl dan istrinya berpisah
      pada tahun 1896, dia meninggalkan istrinya untuk tinggal di
      perkebunan, meskipun dia menolak mengeluarkan uang untuk
      pemeliharaan gedung. Sekelompok pengusaha lokal membeli
      perkebunan dan membentuk "Alton Towers Limited". Pada 1920-an
      mereka membuka alasan untuk umum dan menambahkan kafe, itu
      sangat populer selama 20-an dan 30-an. Ketika perang dunia 2
      pecah, perkebunan itu digunakan kembali sebagai sebuah kamp
      pelatihan kadet.
      <SmallBlogImg
        src={`${imgPath}stately-home.webp`}
        alt='stately home'
      />
    </Text>
    <Text>
      Selama tahun 1960-an dan 1970-an, Towers mulai melihat wahana
      yang adil dan lainnya atraksi bermunculan di lapangan, sementara
      bangunan itu sendiri ditinggalkan sepi setelah menerima
      kerusakan berat selama perang. Meskipun beton lantai ditambahkan
      ke rumah sehingga pengunjung bisa masuk dan berjalan-jalan. Oleh
      1980-an, pemilik baru Alton Towers, yang terinspirasi oleh
      Disney, ingin membuka taman hiburan yang lengkap. Jalan-jalan
      bertema mereka terinspirasi oleh Disney taman dan membuka
      coaster baru yang merupakan awal dari Alton Towers saat kita
      tahu hari ini... <b>The Corkscrew</b>. Ini adalah hit instan,
      dengan garis waktu tunggu naik 6 jam.
      <SmallBlogImg
        src={`${imgPath}corckscrew.webp`}
        alt='Old corckscrew rollercoaster'
      />
    </Text>
    <Text>
      Untuk mendapatkan pemandangan udara dari lahan yang menakjubkan,
      Anda dapat mengambil <b>Skyride</b> ke satu area taman ke area
      lain. Anda akan terhibur dengan audio yang menjelaskan beberapa
      sejarah taman serta pemandangan taman yang khas.
    </Text>
    <Text>
      Ada banyak permata keindahan yang tersembunyi di seluruh taman,
      Anda bisa berjalan kaki melalui taman di mana Anda akan melihat
      fitur air seperti ini:
      <Center>
        <AspectRatio w='500px' ratio={1}>
          <video
            title='Towers Garden Waterfeature'
            src={`${imgPath}water-feature.MOV`}
            autoPlay
            muted
            loop
          />
        </AspectRatio>
      </Center>
    </Text>
    <Text>
      Sepanjang taman, ada keindahan, air terjun ini berada di luar
      salah satu wahana terbaik, The Wicker Man:
      <SmallBlogImg
        src={`${imgPath}waterfall-still.webp`}
        alt='Waterfall'
      />
    </Text>
    <Text>
      Tidak ada tempat lain seperti Alton Towers. Ini menawarkan
      sedikit sesuatu untuk semua orang, sambil menjadi lokasi yang
      menakjubkan dalam prosesnya.
    </Text>
    <Heading>Galeri</Heading>
    <SmallBlogImg
      src={`${imgPath}me-and-bob.webp`}
      alt='Me and big b'
    />
    <Text>
      <Center>
        <AspectRatio w='500px' ratio={1}>
          <video
            title='Oblivion'
            src={`${imgPath}oblivion.MOV`}
            autoPlay
            muted
            loop
          />
        </AspectRatio>
      </Center>
    </Text>

    <Text>
      <Center>
        <AspectRatio w='500px' ratio={1}>
          <video
            title='Waterfall'
            src={`${imgPath}waterfall.MOV`}
            autoPlay
            muted
            loop
          />
        </AspectRatio>
      </Center>
    </Text>
  </BlogLayout>
);

export default function AltonTowers() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
