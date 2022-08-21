/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import ThemeparkBox from '../../components/blogComponents/ThemeparkBox';

const blogTitle = 'UKs Best Theme parks';

const imgPath = '/images/blog/theme-parks/';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | Best UK Theme Parks'
    description={blogTitle}
    postUrl='best-uk-theme-parks'
  >
    <BlogTitle text={blogTitle} />
    <Text>
      This island holds a lot of thrill, with some of the world's best coasters
      scattered between various parks. Let's dive deep into what parks are here
      in the UK.
    </Text>

    <ThemeparkBox
      park='Alton Towers'
      parkDetails='Stoke-On-Trent | £36 online or free with a Merlin Pass'
      imageSrc='/images/blog/best-uk-theme-parks.jpg'
    >
      <Text>
        Alton Towers is not only home to some of the best thrill rides you'll
        find anywhere in this world, hosting 10 record-breaking coasters, but
        also some of the most beautiful scenery surrounding an old stately home.
      </Text>
      <Text>
        Prepare to get plenty of steps in as this park covers 910 acres,
        boasting over 40 attractions for both families and thrill seakers.
      </Text>
      <Text>
        There's something for everyone at Alton Towers, with CBeebies land,
        hosting the David Walliams' Ganster Granny ride. To the likes of
        Nemesis, Oblivion and Smiler. You can even fly like superman on
        Galactica.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Thorpe Park'
      parkDetails='Staines | £37 online or free with a Merlin Pass'
      imageSrc={`${imgPath}thorpe-park.JPG`}
    >
      <Text>
        The Island like no other... Located in Staines, not too far from London,
        this park packs a punch. It's compact full of record breaking thrill
        rides such as the UK's fastest roller coaster Stealth.
      </Text>
      <Text>
        Thorpe park as some incredibly well themes rides, such as the terrefying
        Walking Dead ride where you'll be chased by live actors, to Swarm, a
        fantastic wing coaster, where you fly past a crashed plane and through a
        billboard. SAW the ride branded as the first horror coaster will have
        you screaming as you rocket down a beyond vertical drop dodging sharp
        blades as you plumbit down.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Chessington World of Adventures'
      parkDetails='Surrey, Greater London | £39 online or free with a Merlin Pass'
      imageSrc={`${imgPath}chessington.JPG`}
    >
      <Text>
        This family friendly Zoo/Theme park has a wide veriaty of attractions.
        The log flume, Tiger Rock, has you float past a Tiger encolsure on your
        journey through the water before you hit the big drop that is.
      </Text>
      <Text>
        There's plenty for the children here, with Gruffalo and Room on a Broom
        just being a couple of them. The areas are well themed, especially the
        Mexicana area which had a welcome lick of paint recently, where you can
        ride the Scorpion Express, formally knwon as the Runaway Train.
      </Text>
      <Text>
        The Vampire is a must ride, a well themed suspended coaster that has you
        flying above the park and Dragons Fury, the Maurer spinning coaster,
        never fails to put the biggest smile on my face. A unique ride every
        time as the spinning is completely random.
      </Text>
      <Text>
        The coaster line-up is a bit light, but as of writting this artical, a
        B&M wing coaster in the Jemanji land will be opening in 2023!
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Legoland Windsor'
      parkDetails='Windsor | £32 Online or free with a Merlin Pass'
      imageSrc={`${imgPath}legoland-windsor.jpg`}
    >
      <Text>
        Legoland just brings back the best memories, it's where I passed my
        first driving test at the age of 4 or so. Plenty to do here as a family.
      </Text>
      <Text>
        It offers a few nicely themed coasters, Dragon and Dragon's Apprentice
        being two of them. They're both located in the knights kingdom and as
        the name suggests, themed to dragons 🔥
      </Text>
      <Text>
        Miniland is a must visit while you're here, you can see some of the most
        famous attractions built in Lego with fantastic attention to detail.{' '}
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Blackpool Pleasure Beach'
      parkDetails='Blackpool | £30 - £40 Online'
      imageSrc={`${imgPath}bPool.JPG`}
    >
      <Text>
        I always feel like I'm going back in time when I step foot here, in the
        nicest way possible that is. They do have wooden coasters that have been
        around since the 1920s after all. The park has such a fun atmosphere and
        you get a great view of the sea too as it's right on the coast.
      </Text>
      <Text>
        There's many unique attractions here, such as Revolution, a launch into
        a loop... then you get launched backwards back through the loop! It's
        surprisingly intense and a LOT of fun. Avalanche, a bobsled coaster and
        just so much more.
      </Text>
      <Text>
        The Icon is regarded as the best in the UK by many thrill seakers, this
        double launch coaster is such a blast every time I ride it. Talking of
        coasters, you can't forget the BIG ONE, still the tallest in the UK, a
        title it's held since 1994 (the best year). Although Thorpe Park might
        have there eyes on that record (if planning permissions ever get
        accepted).
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Paultons'
      parkDetails='Romsey, Hampshire | £40 Online (under 1m get in for free)'
      imageSrc={`${imgPath}paultons.jpg`}
    >
      <Text>
        Paultons, home of Pepper Pig land, a family friendly theme park that has
        plenty to keep a thrill seaker entertained. The park has a relaxing
        atomosphere with beautiful gardens and animals.
      </Text>
      <Text>
        We can't talk about Paultons without mentioning one of the best UK
        coasters, Storm Chaser, a fun spinning coaster that will have you
        smiling from ear to ear. In fact the new Tornado Springs area that
        opened in 2021 is so well themed throughout.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Adventure Island'
      parkDetails='Southend-on-Sea | Free entry to the park and Pay n Play or £22.50 wristband for unlimited rides '
      imageSrc={`${imgPath}adventure-island.jpg`}
    >
      <Text>
        This theme park has a classic ammusment park feel to it. Located right
        on the coast, it offers some fantastic thrills with the likes of Rage,
        that features a 97 degree drop! That's beyond vertical.
      </Text>
      <Text>
        The park offers some classic attractions such as the Crooked House and
        Helter Skelter.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Flamingo Land'
      parkDetails='Kirby Misperton, North Yorkshire | £29 - 40 Online'
      imageSrc={`${imgPath}flamingoland.jpg`}
    >
      <Text>
        I know, the name suggests that this is just a place full of Flamingos...
        although it does have a Zoo, this "Theme park resort" also offers some
        thrills from rides such as Flip Flop and Cliff Hanger. In fact the Zoo
        is well maintained and attracts more visitors than the ZSL London Zoo
        which is impressive.
      </Text>
      <Text>
        The park offers plenty of attractions for children too with the likes of
        Mumbo Jumbo and Vortex.
      </Text>
      <Text>
        The park's latest coaster "Sik", which packs in a whopping 10
        inversions, just opened this year and is well worth a ride.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Drayton Manor'
      parkDetails='Mileoak, Brighton | £27.50'
      imageSrc={`${imgPath}drayton-manor.jpg`}
    >
      <Text>
        Drayton Manor is a great family park with a solid line up of
        attractions. Loki is just mesmorising to look at off ride. The park
        hosts the UKs only standing roller coaster, Shockwave, which is just an
        experiance that feels incredibly odd, a must try experiance.
      </Text>
      <Text>
        For younger children there's an entire Thomas the Tank Engine section.
        Other family favourites are Flying Dutchman and Accelerator. Thrill
        seakers will enjoy Shockwave and on a sunny day Stormforce 10 is sure to
        cool you down.
      </Text>
      <Text>
        Overall this park has improved in recent years, the theming of it's new
        Viking land has a lot of attention to detail. I mean just look at
        Loki... How can you take your eyes off it?!
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Oakwood Theme Park'
      parkDetails='Pembrokeshire, South Wales | £27 - £37'
      imageSrc={`${imgPath}oakwood.jpg`}
    >
      <Text>
        The biggest theme park in Wales, the hosts of Megafobia which is a
        highly rated wooden coaster. There's a good variety of rides across the
        park, the other thrill coaster Speed is a lot of fun too. There are a
        couple of family friendly coasters too so the whole family can enjoy a
        day out in Oakwood.
      </Text>
      <Text>
        The park is green and spacious in the beautiful Welsh countryside. Not a
        bad small park, worth a visit if you're in the area. Especially if you
        want to ride a great woddie.
      </Text>
    </ThemeparkBox>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | Best UK Theme Parks'
    description={blogTitle}
    postUrl='best-uk-theme-parks'
  >
    <BlogTitle text='taman hiburan uk terbaik' />
    <Text>
      Pulau ini menyimpan banyak sensasi, dengan beberapa coaster terbaik dunia
      tersebar di berbagai taman. Mari selami lebih dalam taman apa saja yang
      ada di Inggris ini.
    </Text>

    <ThemeparkBox
      park='Alton Towers'
      parkDetails='Stoke-On-Trent | £36 online atau gratis dengan Merlin Pass'
      imageSrc='/images/blog/best-uk-theme-parks.jpg'
    >
      <Text>
        Alton Towers bukan hanya rumah bagi beberapa wahana seru terbaik yang
        akan Anda temukan di mana saja di dunia ini, menjadi tuan rumah 10
        coaster pemecah rekor, tapi juga beberapa pemandangan paling indah di
        sekitar rumah tua yang megah.
      </Text>
      <Text>
        Bersiaplah untuk melangkah lebih jauh karena taman ini mencakup 910
        hektar, menawarkan lebih dari 40 atraksi untuk keluarga dan pencari
        sensasi.
      </Text>
      <Text>
        Ada sesuatu untuk semua orang di Alton Towers, dengan tanah CBeebies,
        menjadi tuan rumah wahana Ganster Granny milik David Walliams. Untuk
        orang-orang seperti Nemesis, Oblivion dan Smiler. Anda bahkan bisa
        terbang seperti superman di Galactica.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Thorpe Park'
      parkDetails='Staines | £37 online atau gratis dengan Merlin Pass'
      imageSrc={`${imgPath}thorpe-park.JPG`}
    >
      <Text>
        Pulau tidak seperti yang lain... Terletak di Staines, tidak terlalu jauh
        dari London, taman ini mengemas pukulan. Ini kompak penuh dengan sensasi
        pemecahan rekor wahana seperti roller coaster Stealth tercepat di
        Inggris.
      </Text>
      <Text>
        Taman Thorpe sebagai beberapa wahana bertema yang sangat baik, seperti
        terrefying Walking Dead ride di mana Anda akan dikejar oleh aktor
        langsung, ke Swarm, a wing coaster yang fantastis, tempat Anda terbang
        melewati pesawat yang jatuh dan melewati a papan iklan. MELIHAT
        perjalanan yang dicap sebagai coaster horor pertama yang akan dimiliki
        Anda berteriak saat Anda meluncur turun dari ketinggian vertikal
        menghindari tajam pisau saat Anda meluncur ke bawah.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Chessington World of Adventures'
      parkDetails='Surrey, Greater London | £39 online atau gratis dengan Merlin Pass'
      imageSrc={`${imgPath}chessington.JPG`}
    >
      <Text>
        Kebun Binatang/Taman hiburan yang ramah keluarga ini memiliki beragam
        atraksi. Log flume, Tiger Rock, telahkah Anda melayang melewati kandang
        Tiger di . Anda? perjalanan melalui air sebelum Anda mencapai drop besar
        itu.
      </Text>
      <Text>
        Ada banyak untuk anak-anak di sini, dengan Gruffalo dan Room on a Broom
        hanya menjadi pasangan dari mereka. Area bertema baik, terutama Daerah
        Mexicana yang baru-baru ini mendapat sentuhan cat selamat datang, di
        mana Anda bisa naik Scorpion Express, yang secara resmi dikenal sebagai
        Kereta Runaway.
      </Text>
      <Text>
        The Vampire harus dikendarai, coaster gantung bertema baik yang memiliki
        Anda terbang di atas taman dan Dragons Fury, roller coaster Maurer,
        tidak pernah gagal untuk menempatkan senyum terbesar di wajah saya.
        Perjalanan yang unik setiap waktu sebagai pemintalan benar-benar acak.
      </Text>
      <Text>
        Line-up coaster agak ringan, tetapi pada saat menulis artikel ini, a
        Wing coaster B&M di tanah Jemanji akan dibuka pada tahun 2023!
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Legoland Windsor'
      parkDetails='Windsor | £32 online atau gratis dengan Merlin Pass'
      imageSrc={`${imgPath}legoland-windsor.jpg`}
    >
      <Text>
        Legoland hanya membawa kembali kenangan terbaik, di situlah saya
        melewati tes mengemudi pertama pada usia 4 atau lebih. Banyak yang harus
        dilakukan di sini sebagai sebuah keluarga.
      </Text>
      <Text>
        Menawarkan beberapa tatakan gelas bertema bagus, Dragon and Dragon's
        Apprentice menjadi dua dari mereka. Mereka berdua berada di kerajaan
        ksatria dan sebagai namanya, bertema naga🔥
      </Text>
      <Text>
        Miniland harus dikunjungi saat Anda di sini, Anda dapat melihat sebagian
        besar atraksi terkenal yang dibangun di Lego dengan perhatian terhadap
        detail yang fantastis.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Blackpool Pleasure Beach'
      parkDetails='Blackpool | £30 - £40 Online'
      imageSrc={`${imgPath}bPool.JPG`}
    >
      <Text>
        Saya selalu merasa seperti kembali ke masa lalu ketika saya menginjakkan
        kaki di sini, di cara terbaik mungkin itu. Mereka memang memiliki
        tatakan gelas kayu yang telah sekitar sejak tahun 1920 setelah semua.
        Taman ini memiliki suasana yang menyenangkan dan Anda juga mendapatkan
        pemandangan laut yang indah karena tepat di pantai.
      </Text>
      <Text>
        Ada banyak atraksi unik di sini, seperti Revolution, peluncuran ke
        sebuah lingkaran... kemudian Anda diluncurkan ke belakang melalui
        lingkaran! Dia sangat intens dan sangat menyenangkan. Longsor, coaster
        gerobak luncur dan hanya begitu banyak lagi.
      </Text>
      <Text>
        Icon dianggap sebagai yang terbaik di Inggris oleh banyak pencari
        sensasi, ini coaster peluncuran ganda sangat menyenangkan setiap kali
        saya mengendarainya. berbicara tentang tatakan gelas, Anda tidak bisa
        melupakan SATU BESAR, masih yang tertinggi di Inggris, a gelar itu
        diadakan sejak 1994 (tahun terbaik). Meskipun Thorpe Park mungkin—
        perhatikan catatan itu (jika izin perencanaan pernah didapat diterima).
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Paultons'
      parkDetails='Romsey, Hampshire | £40 Online (di bawah 1m masuk gratis)'
      imageSrc={`${imgPath}paultons.jpg`}
    >
      <Text>
        Paultons, Pepper Pig land, taman hiburan ramah keluarga yang memiliki
        banyak untuk menghibur pencari sensasi. Taman ini memiliki atomosfer
        yang menenangkan dengan taman dan hewan yang indah.
      </Text>
      <Text>
        Kami tidak dapat berbicara tentang Paultons tanpa menyebutkan salah satu
        Inggris terbaik coaster, Storm Chaser, roller coaster yang menyenangkan
        yang akan membuat Anda tersenyum dari telinga ke telinga. Sebenarnya
        daerah Mata Air Tornado baru itu dibuka pada tahun 2021 bertema sangat
        baik.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Adventure Island'
      parkDetails='Southend-on-Sea | Masuk gratis ke taman dan Pay n Play atau gelang £22,50 untuk perjalanan tak terbatas'
      imageSrc={`${imgPath}adventure-island.jpg`}
    >
      <Text>
        Taman hiburan ini memiliki nuansa taman hiburan klasik. Terletak tepat
        di pantai, ia menawarkan beberapa sensasi fantastis dengan orang-orang
        seperti Rage, yang menampilkan penurunan 97 derajat! Itu di luar
        vertikal.
      </Text>
      <Text>
        Taman ini menawarkan beberapa atraksi klasik seperti Rumah Bengkok dan
        Helter Skelter.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Flamingo Land'
      parkDetails='Kirby Misperton, North Yorkshire | £29 - 40 Online'
      imageSrc={`${imgPath}flamingoland.jpg`}
    >
      <Text>
        Saya tahu, namanya menunjukkan bahwa ini adalah tempat yang penuh dengan
        Flamingo... meskipun memiliki Kebun Binatang, "resor taman hiburan" ini
        juga menawarkan beberapa sensasi dari wahana seperti Flip Flop dan Cliff
        Hanger. Sebenarnya Kebun Binatang terpelihara dengan baik dan menarik
        lebih banyak pengunjung daripada Kebun Binatang ZSL London yang
        mengesankan.
      </Text>
      <Text>
        Taman ini juga menawarkan banyak atraksi untuk anak-anak seperti Mumbo
        Jumbo dan Vortex.
      </Text>
      <Text>
        Coaster terbaru taman "Sik", yang dikemas dalam 10 kekalahan inversi,
        baru saja dibuka tahun ini dan layak untuk dicoba.
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Drayton Manor'
      parkDetails='Mileoak, Brighton | £27.50'
      imageSrc={`${imgPath}drayton-manor.jpg`}
    >
      <Text>
        Drayton Manor adalah taman keluarga yang bagus dengan barisan yang solid
        atraksi. Loki hanya memesona untuk melihat off ride. Taman menjadi tuan
        rumah roller coaster berdiri satu-satunya di Inggris, Shockwave, yang
        hanya experiance yang terasa sangat aneh, harus dicoba experiance.
      </Text>
      <Text>
        Untuk anak-anak yang lebih kecil ada seluruh bagian Thomas the Tank
        Engine. Favorit keluarga lainnya adalah Flying Dutchman dan Accelerator.
        Sensasi seakers akan menikmati Shockwave dan pada hari yang cerah
        Stormforce 10 pasti akan mendinginkanmu.
      </Text>
      <Text>
        Secara keseluruhan taman ini telah meningkat dalam beberapa tahun
        terakhir, temanya baru Tanah Viking memiliki banyak perhatian terhadap
        detail. Maksudku lihat saja Loki... Bagaimana kamu bisa mengalihkan
        pandanganmu darinya?!
      </Text>
    </ThemeparkBox>

    <ThemeparkBox
      park='Oakwood Theme Park'
      parkDetails='Pembrokeshire, South Wales | £27 - £37'
      imageSrc={`${imgPath}oakwood.jpg`}
    >
      <Text>
        Taman hiburan terbesar di Wales, tuan rumah Megafobia yang merupakan
        tatakan gelas kayu berperingkat tinggi. Ada berbagai macam wahana yang
        bagus di seberang taman, kecepatan coaster sensasi lainnya juga sangat
        menyenangkan. Ada sebuah beberapa tatakan gelas ramah keluarga juga
        sehingga seluruh keluarga dapat menikmati hari di Oakwood.
      </Text>
      <Text>
        Tamannya hijau dan luas di pedesaan Welsh yang indah. Tidak a taman
        kecil yang buruk, patut dikunjungi jika Anda berada di area tersebut.
        Apalagi jika kamu ingin mengendarai woddie yang hebat.
      </Text>
    </ThemeparkBox>
  </BlogLayout>
);

export default function HowToPassIelts() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
