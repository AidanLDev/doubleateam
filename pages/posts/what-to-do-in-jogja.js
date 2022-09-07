/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text, Heading, Image, Center } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SimpleLink from '../../components/SimpleLink';

const imagePath = '/images/blog/whatToDoInIndonesia/Jogja/';
const blogTitle = 'How we recommend you enjoy your time in Jogja';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | What to do in Jogja'
    description={blogTitle}
    postUrl='what-to-do-in-jogja'
  >
    <Heading>Hotel</Heading>
    <Text>
      We stayed very central in the <b>Jambuluwuk Malioboro Hotel</b>. This is a
      large hotel with some outstanding views, friendly staff and a huge buffet
      breakfast with foods from all over Indonesia and even some European
      options. I mean just check out this stunning garden you'll be stuffing
      your faces in!
      <Center>
        <Image
          src={`${imagePath}hotelBreakfastGarden.avif`}
          alt='Hotel garden'
        />
      </Center>
      The hotel has a laundry service and is within walking distance to the
      popular shopping district in Malioboro. Plenty to see and do just on your
      doorstep! The hotel was reasonable considering the location and especially
      considering the 5* service we were getting, the staff were stars and the
      hotel itself was so well furnished. It cost around £27 (est 487.000 IDR) a
      night
    </Text>
    <Heading>restaurant</Heading>
    <Text>
      We fancied heading out of the main part of the city to soak in some of the
      views you can get around Jogja. At the <b>Candhari Heaven</b> you can do
      just that while eating some delicious Indonesian food or even just sitting
      back and enjoying some of their refreshing fruit smoothies.
      <Image
        src={`${imagePath}niceResturantFood.avif`}
        alt='Candhari Heaven restaurants food'
      />
      Now this place does get busy, so to guarantee a table we would recommend
      booking in advance.{' '}
      <SimpleLink link='https://www.instagram.com/candhariheaven/'>
        Their Instagram page
      </SimpleLink>{' '}
      Their number: <b>+6281282677677</b>.
    </Text>
    <Center>
      <Image
        src={`${imagePath}niceResturant.avif`}
        alt='Candhari Heaven restaurant'
      />
    </Center>
    <Center>
      <Image
        src={`${imagePath}niceResturantView2.avif`}
        alt='Candhari Heaven restaurant view'
      />
    </Center>
    <Heading>Malioboro</Heading>
    <Text>
      The street where it all happens!
      <Center>
        <Image src={`${imagePath}malioboro.avif`} alt='Malioboro street' />
      </Center>
      What a fun place to be! If you fancy doing some shopping or eating ice
      cream, Malioboro is the place to do it. With countless street performers
      and more shops than you'll know what to do with, this vibrant place is a
      must-visit when coming to Jogja.
      <Center>
        <Image
          src={`${imagePath}malioboroGelato.avif`}
          alt='Gelato in malioboro'
        />
      </Center>
      Jogja was HOT when we visited, so this icecream went down an absolute
      treat.
    </Text>
    <Heading>Hotel 2</Heading>
    <Text>
      Now all of those activities we've talked about so far happen in the heart
      of Jogja, however, if you venture outside the city by an hour or so,
      there's so much history and beauty to be witnessed. Now if there's one the
      thing we love more than travel, it's sleep, so in order to make it to the
      famous sunrise spot "Punthuk Setumbu", we'd have to be a little closer to
      it than our hotel near Malioboro.{' '}
      <b>Balkondes Ngargogondo The Gade Village</b> was fairly pricy for what
      you get at 500.000 IDR a night, but what a location. It was only 15 mins
      away from Punthuk Setumbu and felt like such a breathe of fresh air,
      you're truly out in nature here.
      <Center>
        <Image src={`${imagePath}hotel2Rooms.avif`} alt='Gade Village rooms' />
      </Center>
      Just looking at those rooms relaxes me, beautiful. The welcome we got
      there was top notch too, we were given complimentary drinks and breakfast
      was brought to our door as there was an event on that morning so we
      couldn't use the restaurant.
      <Center>
        <Image
          src={`${imagePath}hotel2Breakfast.avif`}
          alt='Gade Village Breakfst'
        />
      </Center>{' '}
      The breakfast was tasty and traditional, although we do love our breakfast
      buffets where we can stuff our faces until our bellies can't fit any more
      food in.
    </Text>
    <Heading>Punthuk Setumbu</Heading>
    <Text>
      The reason why we trecked outside of the city, and my god was it worth it.
      <Image src={`${imagePath}sunriseSignCrop.avif`} alt='Punthuk Setumbu' />
      This popular sunrise location is popular for a reason. Sadly it was a a
      bit cloudy for us to get the full sunrise experience, but we did however
      get blown away by the beauty of the place.
      <Image src={`${imagePath}sunrisePlace.avif`} alt='Punthuk Setumbu' />
      There are plenty of places for some the most memorable photos too if
      that's what you're into.
      <Image src={`${imagePath}loveSign.avif`} alt='Punthuk Setumbu' />
      We'll let the pictures do all the talking for this one...
      <Image src={`${imagePath}sunrisePlace2.avif`} alt='Punthuk Setumbu' />
      <Image src={`${imagePath}sunrisePlace3.avif`} alt='Punthuk Setumbu' />
      Even though you're out in the middle of nowhere, there are food sellers,
      and toilets too. What more could you ask for 😉
    </Text>
    <Heading>Borobudur</Heading>
    <Text>
      You can't come out all the way to Jogja and not visit one of its ancient
      temples. We were torn between two, with it being our final day in Jogja we
      could only choose one, Borobudur or the Prambanan Temple... well as we're
      talking about Borobudur you can guess which we chose. Borobudur Temple is
      magnificent, the biggest Buddhist temple built. For Indonesian citizen's
      tickets are very cheap, however, if you're foreign you will be expected to
      pay a bit extra, around £20 overall, however where else can you see such a
      magnificent landmark? Worth every penny.
      <Center>
        <Image src={`${imagePath}boroboudor.avif`} alt='boroboudor' />
      </Center>
    </Text>
    <Heading>Travelling to Jogja</Heading>
    <Text>
      In case you're travelling to Jogja within Indonesia like we were, we
      thought we'd go through some options. We made the journey from Bandung,
      the comfortable quicker way was using the train. Even the cheapest seats
      "eksekutif class" are incredibly comfortable. The train has food and
      beverage sellers and even a restaurant cart. If you're on a tight budget
      you can use this bus from Bandung to Jogja.
      <Center>
        <Image
          src='/images/blog/whatToDoInIndonesia/Jogja/bus-bandung-jogja.avif'
          alt='bus to Jogja'
        />
      </Center>
      It cost around 300,000 for a ticket, however, the journey took over 13
      hours, which is including time spent stopping for passengers, toilet stops
      and lunch were included too (which was surprisingly tasty considering the
      ticket price!).
    </Text>
    <Text>
      We love re-living and sharing these experiences, we hope you can get a bit
      of an insight into this fascinating place in Indonesia. Safe travels to
      all!
    </Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | What to do in Jogja'
    description='Bagaimana kami merekomendasikan Anda menikmati waktu Anda di Jogja'
    postUrl='what-to-do-in-jogja'
  >
    <Heading>Hotel</Heading>
    <Text>
      Kami tinggal sangat sentral di<b>Jambuluwuk Malioboro Hotel</b>. Ini
      adalah sebuah hotel besar dengan beberapa pemandangan luar biasa, staf
      yang ramah, dan prasmanan besar sarapan dengan makanan dari seluruh
      Indonesia dan bahkan beberapa Eropa pilihan. Maksud saya, lihat saja taman
      menakjubkan ini yang akan Anda isi wajahmu masuk!
      <Center>
        <Image
          src={`${imagePath}hotelBreakfastGarden.avif`}
          alt='Hotel garden'
        />
      </Center>
      Hotel ini memiliki layanan binatu dan berada dalam jarak berjalan kaki ke
      pusat perbelanjaan populer di Malioboro. Banyak yang bisa dilihat dan
      dilakukan hanya di Anda ambang pintu! Hotel ini masuk akal mengingat
      lokasi dan terutama mengingat layanan 5 * yang kami dapatkan, stafnya
      adalah bintang dan hotel itu sendiri dilengkapi dengan sangat baik.
      Harganya sekitar £27 (perkiraan Rp 487.000) a malam
    </Text>
    <Heading>restoran</Heading>
    <Text>
      Kami membayangkan keluar dari bagian utama kota untuk berendam di beberapa
      pemandangan yang bisa Anda dapatkan di sekitar Jogja. Pada
      <b>Candhari Heaven</b> .Anda dapat melakukan hanya itu sambil makan
      makanan Indonesia yang enak atau bahkan hanya duduk kembali dan nikmati
      beberapa smoothie buah mereka yang menyegarkan
      <Image
        src={`${imagePath}niceResturantFood.avif`}
        alt='Candhari Heaven restaurants food'
      />
      Sekarang tempat ini ramai, jadi untuk menjamin meja, kami akan
      merekomendasikan pemesanan terlebih dahulu.{' '}
      <SimpleLink link='https://www.instagram.com/candhariheaven/'>
        Halaman Instagram mereka
      </SimpleLink>{' '}
      Nomor mereka: <b>+6281282677677</b>.
    </Text>
    <Center>
      <Image
        src={`${imagePath}niceResturant.avif`}
        alt='Candhari Heaven restaurant'
      />
    </Center>
    <Center>
      <Image
        src={`${imagePath}niceResturantView2.avif`}
        alt='Candhari Heaven restaurant view'
      />
    </Center>
    <Heading>Malioboro</Heading>
    <Text>
      Jalan dimana semuanya terjadi!
      <Center>
        <Image src={`${imagePath}malioboro.avif`} alt='Malioboro street' />
      </Center>
      Tempat yang menyenangkan! Jika Anda suka berbelanja atau makan es krim,
      Malioboro adalah tempatnya. Dengan artis jalanan yang tak terhitung
      jumlahnya dan lebih banyak toko daripada yang Anda tahu apa yang harus
      dilakukan, tempat yang semarak ini adalah wajib dikunjungi ketika datang
      ke Jogja.
      <Center>
        <Image
          src={`${imagePath}malioboroGelato.avif`}
          alt='Gelato in malioboro'
        />
      </Center>
      Jogja itu PANAS ketika kami berkunjung, jadi es krim ini benar-benar habis
      merawat.
    </Text>
    <Heading>Hotel 2</Heading>
    <Text>
      Sekarang semua kegiatan yang telah kita bicarakan sejauh ini terjadi di
      dalam hati Jogja, namun, jika Anda menjelajah ke luar kota sekitar satu
      jam, ada begitu banyak sejarah dan keindahan untuk disaksikan. Sekarang
      jika ada satu hal yang kita sukai lebih dari perjalanan, itu tidur, jadi
      untuk sampai ke tempat matahari terbit yang terkenal "Punthuk Setumbu",
      kita harus sedikit lebih dekat daripada hotel kami di dekat Malioboro.{' '}
      <b>Balkondes Ngargogondo The Gade Village</b> cukup mahal untuk apa? Anda
      mendapatkan Rp 500.000 semalam, tapi apa lokasi. Itu hanya 15 menit jauh
      dari Punthuk Setumbu dan terasa seperti menghirup udara segar, Anda
      benar-benar berada di alam bebas di sini .
      <Center>
        <Image src={`${imagePath}hotel2Rooms.avif`} alt='Gade Village rooms' />
      </Center>
      Hanya melihat kamar-kamar itu membuatku rileks, cantik. Sambutan yang kami
      dapatkan ada yang top juga, kami diberi minuman dan sarapan gratis dibawa
      ke pintu kami karena ada acara pada pagi itu jadi kami tidak bisa
      menggunakan restoran.
      <Center>
        <Image
          src={`${imagePath}hotel2Breakfast.avif`}
          alt='Gade Village Breakfst'
        />
      </Center>{' '}
      Sarapannya enak dan tradisional, meskipun kami menyukai sarapan kami
      prasmanan di mana kita bisa mengisi wajah kita sampai perut kita tidak
      muat lagi makanan di.
    </Text>
    <Heading>Punthuk Setumbu</Heading>
    <Text>
      Alasan mengapa kami melakukan trek di luar kota, dan ya Tuhan, apakah itu
      sepadan.
      <Image src={`${imagePath}sunriseSignCrop.avif`} alt='Punthuk Setumbu' />
      Lokasi matahari terbit yang populer ini populer karena suatu alasan.
      Sayangnya itu adalah agak mendung bagi kami untuk mendapatkan pengalaman
      matahari terbit penuh, tetapi kami melakukannya terpesona oleh keindahan
      tempat itu.
      <Image src={`${imagePath}sunrisePlace.avif`} alt='Punthuk Setumbu' />
      Ada banyak tempat untuk beberapa foto yang paling berkesan juga jika
      itulah yang Anda sukai.
      <Image src={`${imagePath}loveSign.avif`} alt='Punthuk Setumbu' />
      Kami akan membiarkan gambar yang berbicara untuk yang satu ini...
      <Image src={`${imagePath}sunrisePlace2.avif`} alt='Punthuk Setumbu' />
      <Image src={`${imagePath}sunrisePlace3.avif`} alt='Punthuk Setumbu' />
      Meskipun Anda berada di antah berantah, ada penjual makanan, dan toilet
      juga. Apa lagi yang bisa Anda minta? 😉
    </Text>
    <Heading>Borobudur</Heading>
    <Text>
      Anda tidak bisa keluar jauh-jauh ke Jogja dan tidak mengunjungi salah satu
      peninggalan purbakalanya kuil. Kami terbelah di antara dua, dengan itu
      menjadi hari terakhir kami di Jogja kami hanya bisa memilih satu,
      Borobudur atau Candi Prambanan... yah sama kita berbicara tentang
      Borobudur Anda bisa menebak mana yang kami pilih. Candi Borobudur adalah
      megah, candi Buddha terbesar dibangun. Untuk warga negara Indonesia
      tiketnya sangat murah, namun, jika Anda orang asing, Anda diharapkan untuk
      membayar sedikit ekstra, sekitar £ 20 secara keseluruhan, namun di mana
      lagi Anda dapat melihat seperti itu? tengara yang luar biasa? Bernilai
      setiap sen.
      <Center>
        <Image src={`${imagePath}boroboudor.avif`} alt='boroboudor' />
      </Center>
    </Text>
    <Heading>Jalan-jalan ke Jogja</Heading>
    <Text>
      Jika Anda bepergian ke Jogja di Indonesia seperti kami, kami pikir kita
      akan melalui beberapa pilihan. Kami melakukan perjalanan dari Bandung,
      cara cepat yang nyaman adalah menggunakan kereta api. Bahkan kursi
      termurah "kelas eksekutif" sangat nyaman. Kereta memiliki makanan dan
      penjual minuman dan bahkan gerobak restoran. Jika Anda memiliki anggaran
      terbatas Anda dapat menggunakan bus ini dari Bandung ke Jogja.
      <Center>
        <Image
          src='/images/blog/whatToDoInIndonesia/Jogja/bus-bandung-jogja.avif'
          alt='bus to Jogja'
        />
      </Center>
      Biayanya sekitar 300.000 untuk tiket, namun, perjalanan memakan waktu
      lebih dari 13 jam, yang termasuk waktu yang dihabiskan untuk berhenti
      untuk penumpang, halte toilet dan makan siang juga disertakan (yang
      ternyata sangat lezat mengingat? harga tiket!).
    </Text>
    <Text>
      Kami senang menghidupkan kembali dan berbagi pengalaman ini, kami harap
      Anda bisa mendapatkan sedikit wawasan tentang tempat yang menarik di
      Indonesia ini. Perjalanan aman ke semua!
    </Text>
  </BlogLayout>
);

export default function HowToPassIelts() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
