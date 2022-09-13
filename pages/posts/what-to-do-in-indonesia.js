/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text, Heading, Image } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SimpleLink from '../../components/SimpleLink';
import Centre from '../../components/Centre';

const blogTitle = 'How to spend your time in Indonesia';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | What to do in Indonesia'
    description={blogTitle}
    postUrl='what-to-do-in-indonesia'
  >
    <Text>
      This is going to be a quick summary of a few places we visited
      and a a little bit of insight into them to help you plan your
      Indonesian getaway. We will go into more depth on places we
      think to deserve more attention in separate blogs but for a nice
      overview, here is our Indonesian travel guide.
    </Text>
    <Heading size='md'>Bandung</Heading>
    <Text>
      My wife could go on for days about what Bandung is like as a
      city in general as she has spent most of her life living there!
      From a western perspective, Bandung is a breath of fresh air,
      it's the first city I visited after Jakarta and the climate is
      so much fresher. The air feels clean as it's surrounded by
      mountains/volcanos and the temperature is cooler as a result. If
      you're into hiking there's plenty around Bandung to get stuck
      into. The last couple of times we went, it was the rainy season
      so we gave that a miss but here are some recommendations from
      Arni... todo(
      {/* TODO: add photos and a few hiking places from Arni */})
    </Text>
    <Text>
      <b>Gunung Tangkuban Perahu </b>
    </Text>
    <Text>
      This active volcano is stunning, it's about 30km north of
      Bandung city and it last erupted in 2019. In fact, it just
      recently started smoking again when we went back in February
      2022
      <Image
        src='/images/blog/whatToDoInIndonesia/Bandung/KawaRatu.webp'
        alt='Kawa Ratu volcano'
      />
      Because of the weather, it was nice and quiet when we went too,
      plenty of space for photos and exploration.
      <Image
        src='/images/blog/whatToDoInIndonesia/Bandung/TogetherByKawaRatuSign.webp'
        alt='Aidan and Arni enjoying Kawa Ratu volcano'
      />
    </Text>
    <Heading>Jogja</Heading>
    <Text>
      Jogja is a historical beauty of a place, countless choices to be
      made as there's a lot to see in this special city in Indonesia.{' '}
      <SimpleLink link='/posts/what-to-do-in-jogja'>
        We go into detail here about what there is to see in Jogja
      </SimpleLink>{' '}
      and where we'd recommend based on our experience. A few places
      to note are:
    </Text>
    <strong>Candhari Heaven restaurant</strong>
    <Centre>
      <Image
        alt='Candhari Heaven'
        src='/images/blog/whatToDoInIndonesia/Jogja/niceResturant.webp'
      />
    </Centre>
    <Text>
      To eat some delicious food with the most stunning backdrop and
      multiple places for memorable photos. We couldn't recommend this
      place enough. They sell a selection of refreshing drinks too so
      even after you're done eating, you can just relax with a few
      drinks and soak up that unique view of Jogja.
    </Text>
    <strong>Malioboro</strong>
    <Centre>
      <Image
        alt='Malioboro street'
        src='/images/blog/whatToDoInIndonesia/Jogja/malioboro.webp'
      />
    </Centre>
    <Text>
      This is where it all happens, with countless shops and various
      street entertainers. The centre of Jogja is an active vibrant
      street, plenty to see here.
    </Text>
    <strong>Borobudur</strong>
    <Centre>
      <Image
        alt='Borobudur'
        src='/images/blog/whatToDoInIndonesia/Jogja/boroboudor.webp'
      />
    </Centre>
    <Text>
      Jogja is a historic place with ancient temples that date way
      back. Borobudur dates back to the 9th century and is the largest
      Buddhist temple. If you're in the region, this is a must-see.
    </Text>
    <Heading>Malang</Heading>
    <Text>
      During our journey through Java, we made our way east to Malang,
      this city feels so refreshing, surrounded by the most beautiful
      mountainous scenery. We had a tour with{' '}
      <SimpleLink link='https://www.explorebromo.com/'>
        Explore Bromo
      </SimpleLink>{' '}
      and we were so chuffed we chose them. They were very reasonable
      in price compared to some others and it only cost a little extra
      to include a cameraman who showed us all the best spots gave
      plenty of background and of course, took some stunning photos:
    </Text>
    <Image
      alt='Bromo tour pic'
      src='/images/blog/whatToDoInIndonesia/Malang/DSC01948.webp'
    />
    <Image
      alt='Bromo tour pic'
      src='/images/blog/whatToDoInIndonesia/Malang/DSC01982.webp'
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
    <Text>
      With your eyes blessed with this stunning Indonesian nature, we
      hope you too can enjoy and explore this enchanting country. The
      sheer size of it means you can visit this country time and time
      again and have a different experience every time.
    </Text>
    <Text>
      We hope you enjoy your time and have safe travels ✈️🌍☀️🏔️
    </Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | What to do in Indonesia'
    description='Bagaimana cara menghabiskan waktu Anda di Indonesia'
    postUrl='what-to-do-in-indonesia'
  >
    <Text>
      Ini akan menjadi ringkasan singkat dari beberapa tempat yang
      kami kunjungi dan a sedikit wawasan tentang mereka untuk
      membantu Anda merencanakan liburan Indonesia Anda. Kami akan
      membahas lebih dalam tentang tempat-tempat yang menurut kami
      layak mendapat perhatian lebih blog terpisah tetapi untuk
      gambaran yang bagus, inilah perjalanan Indonesia kami memandu.
    </Text>
    <Heading size='md'>Bandung</Heading>
    <Text>
      Istri saya bisa bercerita berhari-hari tentang seperti apa
      Bandung sebagai kota umum karena dia telah menghabiskan sebagian
      besar hidupnya tinggal di sana! Dari barat perspektif, Bandung
      adalah menghirup udara segar, itu kota pertama saya dikunjungi
      setelah Jakarta dan iklimnya jauh lebih segar. Udara terasa
      bersih karena dikelilingi oleh pegunungan/gunung berapi dan
      suhunya lebih keren hasilnya. Jika Anda suka hiking, ada banyak
      tempat di sekitar Bandung untuk terjebak ke dalam. Beberapa kali
      terakhir kami pergi, itu adalah musim hujan jadi kami
      melewatkannya tetapi di sini ada beberapa rekomendasi dari Arni
      ... melakukan (
      {/* TODO: add photos and a few hiking places from Arni */})
    </Text>
    <Text>
      <b>Gunung Tangkuban Perahu</b>
    </Text>
    <Text>
      Gunung berapi aktif ini menakjubkan, berjarak sekitar 30 km di
      utara kota Bandung dan terakhir meletus pada tahun 2019. Bahkan,
      baru-baru ini mulai merokok lagi ketika kami kembali pada
      Februari 2022
      <Image
        src='/images/blog/whatToDoInIndonesia/Bandung/KawaRatu.webp'
        alt='Kawa Ratu volcano'
      />
      Karena cuaca, itu bagus dan tenang ketika kami pergi juga,
      banyak ruang untuk foto dan eksplorasi.
      <Image
        src='/images/blog/whatToDoInIndonesia/Bandung/TogetherByKawaRatuSign.webp'
        alt='Aidan and Arni enjoying Kawa Ratu volcano'
      />
    </Text>
    <Heading>Jogja</Heading>
    <Text>
      Jogja adalah keindahan sejarah suatu tempat, pilihan yang tak
      terhitung jumlahnya untuk dijadikan sebagai ada banyak yang bisa
      dilihat di kota istimewa di Indonesia ini.{' '}
      <SimpleLink link='/posts/what-to-do-in-jogja'>
        Kami masuk ke detail di sini tentang apa yang bisa dilihat di
        Jogja
      </SimpleLink>{' '}
      dan di mana kami akan merekomendasikan berdasarkan pengalaman
      kami. Beberapa tempat yang perlu diperhatikan adalah:
    </Text>
    <strong>Candhari Heaven restaurant</strong>
    <Centre>
      <Image
        alt='Candhari Heaven'
        src='/images/blog/whatToDoInIndonesia/Jogja/niceResturant.webp'
      />
    </Centre>
    <Text>
      Untuk makan beberapa makanan lezat dengan latar belakang yang
      paling menakjubkan dan banyak tempat untuk foto kenangan. Kami
      tidak bisa merekomendasikan tempat ini cukup. Mereka jual juga
      pilihan minuman yang menyegarkan bahkan setelah Anda selesai
      makan, Anda bisa bersantai dengan beberapa minuman dan menikmati
      pemandangan unik itu dari jogja.
    </Text>
    <strong>Malioboro</strong>
    <Centre>
      <Image
        alt='Malioboro street'
        src='/images/blog/whatToDoInIndonesia/Jogja/malioboro.webp'
      />
    </Centre>
    <Text>
      Di sinilah semuanya terjadi, dengan toko-toko yang tak terhitung
      jumlahnya dan berbagai jalan penghibur. Pusat kota Jogja adalah
      jalan yang ramai dan aktif, banyak untuk Lihat disini.
    </Text>
    <strong>Borobudur</strong>
    <Centre>
      <Image
        alt='Borobudur'
        src='/images/blog/whatToDoInIndonesia/Jogja/boroboudor.webp'
      />
    </Centre>
    <Text>
      Jogja adalah tempat bersejarah dengan candi-candi kuno yang
      sudah ada sejak lama. Borobudur berasal dari abad ke-9 dan
      merupakan Buddha terbesar Candi. Jika Anda berada di wilayah
      tersebut, ini adalah tempat yang harus dilihat.
    </Text>
    <Heading>Malang</Heading>
    <Text>
      Selama perjalanan kami melalui Jawa, kami berjalan ke timur ke
      Malang, kota ini terasa begitu menyegarkan, dikelilingi oleh
      pemandangan pegunungan yang paling indah. Kami melakukan tur
      dengan{' '}
      <SimpleLink link='https://www.explorebromo.com/'>
        Explore Bromo
      </SimpleLink>{' '}
      dan kami sangat senang kami memilih mereka. Harganya sangat
      masuk akal? dibandingkan dengan beberapa yang lain dan hanya
      memerlukan sedikit biaya tambahan untuk menyertakan a juru
      kamera yang menunjukkan kepada kami semua tempat terbaik
      memberikan banyak latar belakang dan tentu saja, mengambil
      beberapa foto yang menakjubkan:
    </Text>
    <Image
      alt='Bromo tour pic'
      src='/images/blog/whatToDoInIndonesia/Malang/DSC01948.webp'
    />
    <Image
      alt='Bromo tour pic'
      src='/images/blog/whatToDoInIndonesia/Malang/DSC01982.webp'
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
    <Text>
      Dengan mata Anda diberkati dengan alam Indonesia yang
      menakjubkan ini, kami harap Anda juga dapat menikmati dan
      menjelajahi negara yang mempesona ini. Ukuran tipis itu berarti
      Anda dapat mengunjungi negara ini berkali-kali dan memiliki
      pengalaman yang berbeda pengalaman setiap saat.
    </Text>
    <Text>
      Kami harap Anda menikmati waktu Anda dan memiliki perjalanan
      yang aman ✈️🌍☀️🏔️
    </Text>
  </BlogLayout>
);

export default function HowToPassIelts() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;

  return blogToDisplay;
}
