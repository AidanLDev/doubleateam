/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import BlogLayout from "../../components/blogLayout/BlogLayout";
import SmallBlogImg from "../../components/blogComponents/SmallBlogImg";
import { useTranslation } from "react-i18next";

const imgPath = "/images/blog/royal-family/";

const tp = "blogs.royalFamilyOrigin.";

const IndonesianBlog = (
  <BlogLayout
    title="Double A Team | Royal Family Origins"
    description=""
    postUrl="royal-family-origin"
  >
    <Text>
      Selama salah satu dari banyak lamunan saya, saya bertanya-tanya betapa
      anehnya itu hanya menjadi putra atau putri dari orang tua tertentu akan
      membuat Anda menjadi pewaris ke takhta. Lalu saya bertanya, bagaimana
      sebenarnya itu dimulai? Bagaimana kita? memutuskan "Ok kalian akan menjadi
      penguasa kami sekarang." Ini adalah lubang kelinci I turun.
    </Text>
    <Text>
      Sebelum Inggris, yah Inggris, negara yang sekarang kita kenal terbagi
      menjadi kerajaan yang berbeda seperti "Northumbria", "Mercia", "East
      Anglia", "Wessex" dll... Setiap kerajaan memiliki penguasanya sendiri.
    </Text>
    <SmallBlogImg
      src={`${imgPath}pre-eng-kingdoms.webp`}
      alt="Pre England kingdoms"
      caption="Kerajaan Inggris di tahun 800"
    />
    <Text>
      <b>Egbert (827 - 839)</b> dikenal sebagai raja pertama yang mendirikan
      pemerintahan atas semua Anglo-Saxon Inggris, meskipun tidak pasti dia
      punya penguasa di Northumbria. Jadi kita bisa memanggilnya raja pertama
      Inggris, tapi itu bukan klaim yang paling kuat, mari selami lebih dalam
      masa lalu...
    </Text>
    <SmallBlogImg src={`${imgPath}Egbert.webp`} alt="Egbert" caption="Egbert" />
    <Text>
      Lebih aman untuk mengatakan bahwa asal usul monarki modern kita dapat
      ditentukan tanggalnya kembali ke akhir 800-an dan awal 900-an, ketika
      semua berbagai Anglo-Saxon Kerajaan disatukan oleh thelstan (895-939 M),
      juga dikenal sebagai Athelstan, House of Wessex untuk membentuk Kerajaan
      Inggris.
    </Text>
    <SmallBlogImg
      src={`${imgPath}Æthelstan.webp`}
      alt="Æthelstan"
      caption="Æthelstan"
    />
    <Text>
      Jadi keluarga kerajaan zaman modern dapat dilacak kembali sampai ke
      900-an... Tapi bagaimana dengan para penguasa kerajaan Saxon? Yang mana
      pertama? Dan siapa raja pertama dari kerajaan pertama? Bagaimana ini?
      hierarki kuno dimulai?
    </Text>
    <Heading>The Anglo-Saxons (410 - 1066)</Heading>
    <Text>
      Sulit untuk mendapatkan banyak informasi tentang periode ini karena tidak
      banyak catatan tertulis yang masih ada sampai hari ini, itulah sebabnya
      dulu dikenal sebagai "Abad Kegelapan". Itu adalah waktu perang dan
      pemisahan dari pemerintahan Romawi.
    </Text>
    <Text>
      Angles, Saxon, dan penjajah berbahasa Jerman lainnya melihat perlawanan
      dari Romano-Inggris, ada pembicaraan tentang pemimpin Kristen Inggris
      mereka yang disebut Ambrosius yang terkenal karena memenangkan 12
      pertempuran melawan penjajah, kemudian akun memanggil pemimpin ini Arthur.
      Meskipun tidak ada bukti kuat tentang ini "Raja Arthur" yang memimpin
      Inggris benar-benar ada sehingga tidak menjawab pertanyaan kita tentang
      bagaimana semua ini dimulai...
    </Text>
    <Text>
      Berbagai kelompok Anglo-Saxon mulai bermukim di berbagai belahan dunia
      negara dan mendirikan kerajaan individu. Kerajaan yang disebutkan di atas
      adalah selalu berubah dan bertentangan satu sama lain. Sampai mereka
      akhirnya terbentuklah kerajaan-kerajaan yang kita lihat di peta tahun 800
      M Inggris.
    </Text>
    <Text>
      <b>Kent</b> adalah salah satu kerajaan Anglo-Saxon pertama yang terbentuk
      pada tahun 449. Di mana Hengist, mungkin seorang pangeran Angeln adalah
      penguasa mereka. Itu membuat Hengist adalah mata rantai pertama dalam
      rantai penguasa Anglo-Saxon kami, yang akan menjadi Raja Inggris pertama.
      Keluarga kerajaan seperti yang kita kenal tanggal antara 449 -{" "}
      {new Date().getFullYear()}.
    </Text>
    <SmallBlogImg
      src={`${imgPath}Hengist.webp`}
      alt="Hengist King of Kent"
      caption="Hengist King of Kent"
    />
    <Text>
      Æthelberht (Ethelbert) adalah raja Kristen pertama, ditobatkan oleh St
      Agustinus sekitar tahun 595 M. Ini memiliki dampak yang signifikan pada
      lanskap Inggris, ketika gereja-gereja dibangun di Canterbury, membantu
      mendirikan dasar Kekristenan Inggris.
    </Text>
    <SmallBlogImg
      src={`${imgPath}Æthelberht.webp`}
      alt="Æthelberht of Kent"
      caption="Æthelberht of Kent"
    />
    <Text>
      Jadi sekarang kita tahu raja Kristen pertama dari salah satu kerajaan
      berdasarkan pulau Inggris, dan kita tahu yang pertama dari kerajaan ini
      juga, Kent. Sangat memuaskan melihat bagaimana masa lalu disatukan,
      membangun keluarga kerajaan dan negara yang kita kenal sekarang.
    </Text>
    <SmallBlogImg
      src={`${imgPath}Queen-Elizabeth-2nd.webp`}
      alt="Queen Elizabeth II"
      caption="Queen Elizabeth II"
    />
    <SmallBlogImg
      src={`${imgPath}Queen-Elizabeth-II.webp`}
      alt="Queen Elizabeth II Coronation"
      caption="Queen Elizabeth II Coronation"
    />
    <Text>
      1926 - 2022, semoga Yang Mulia beristirahat dalam damai, Ratu yang tidak
      bijaksana yang melayani negaranya sampai akhir. Dia layak untuk istirahat.
    </Text>
  </BlogLayout>
);

export default function RoyalFamilyOrigin() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title="Double A Team | Royal Family Origins"
      description={t(`${tp}blogTitle`)}
      postUrl="royal-family-origin"
    >
      <Text>
        During one of my many daydreams, I wondered how strange it is that just
        being the son or daughter of specific parents will make you heir to the
        throne. Then I asked, how did that actually begin? How did we decide "Ok
        you guys will be our rulers now." This is the rabbit hole I went down.
      </Text>
      <Text>
        Before England was, well England, the country we now know was split into
        different kingdoms such as "Northumbria", "Mercia", "East Anglia",
        "Wessex" etc... Each kingdom having their own rulers.
      </Text>
      <SmallBlogImg
        src={`${imgPath}pre-eng-kingdoms.webp`}
        alt="Pre England kingdoms"
        caption="English kingdoms in the year 800"
      />
      <Text>
        <b>Egbert (827 - 839)</b> was known as the first king who established
        rule overall Anglo-Saxon England, although it is not certain he had
        overlordship in Northumbria. So we could call him the first king of
        England, but it's not the strongest of claims, let's diver deeper into
        the past...
      </Text>
      <SmallBlogImg
        src={`${imgPath}Egbert.webp`}
        alt="Egbert"
        caption="Egbert"
      />
      <Text>
        It's safer to say that the origins of our modern monarchy can be dated
        back to the late 800s and early 900s, when all of the various
        Anglo-Saxon Kingdoms were united by Æthelstan (895-939 AD), also known
        as Athelstan, of the House of Wessex to form the Kingdom of England.
      </Text>
      <SmallBlogImg
        src={`${imgPath}Æthelstan.webp`}
        alt="Æthelstan"
        caption="Æthelstan"
      />
      <Text>
        So the modern-day royal family can be traced back all the way to the
        900s... But what about the rulers of the Saxon kingdoms? Which was the
        first? And who was the first king of the first kingdom? How did this
        ancient hierarchy begin?
      </Text>
      <Heading>The Anglo-Saxons (410 - 1066)</Heading>
      <Text>
        It's hard to get much information about this period as there aren't many
        written records that still exist until this day, which is why it used to
        be known as the "Dark Ages". It was a time of war and separation from
        the Roman rule.
      </Text>
      <Text>
        The Angles, Saxons and other German-speaking invaders saw resistance
        from the Romano-British, there's talk of their British Christian leader
        called Ambrosius who was famed for winning 12 battles against the
        invaders, later accounts call this leader Arthur. Although there's no
        hard evidence of this "King Arthur" who lead the British actually
        existed so that doesn't answer our question of how this all began...
      </Text>
      <Text>
        Various Anglo-Saxon groups began to settle in different parts of the
        country and set up individual kingdoms. The above-mentioned kingdoms
        were constantly changing and in conflict with one another. Until they
        eventually formed the kingdoms we see on the map of 800 AD Britain.
      </Text>
      <Text>
        <b>Kent</b> was one of the first of Anglo-Saxon kingdoms to form in 449.
        In which Hengist, possibly a prince of Angeln was their ruler. That
        makes Hengist was the first link in our chain of Anglo-Saxon rulers, who
        would become the first Monarchs of Britain. The royal family as we know
        dates between 449 - {new Date().getFullYear()}.
      </Text>
      <SmallBlogImg
        src={`${imgPath}Hengist.webp`}
        alt="Hengist King of Kent"
        caption="Hengist King of Kent"
      />
      <Text>
        Æthelberht (Ethelbert) was the first Christian king, converted by St
        Augustine around 595 AD. This had a significant impact on the landscape
        of the UK, as churches were built in Canterbury, helping establish the
        foundation of English Christianity.
      </Text>
      <SmallBlogImg
        src={`${imgPath}Æthelberht.webp`}
        alt="Æthelberht of Kent"
        caption="Æthelberht of Kent"
      />
      <Text>
        So now we know the first Christian king of one of the kingdoms based on
        the island of Britain, and we know the first of these kingdoms too,
        Kent. It's satisfying seeing how the past was pieced together,
        establishing the royal family and country we know today.
      </Text>
      <SmallBlogImg
        src={`${imgPath}Queen-Elizabeth-2nd.webp`}
        alt="Queen Elizabeth II"
        caption="Queen Elizabeth II"
      />
      <SmallBlogImg
        src={`${imgPath}Queen-Elizabeth-II.webp`}
        alt="Queen Elizabeth II Coronation"
        caption="Queen Elizabeth II Coronation"
      />
      <Text>
        1926 - 2022, may her majesty rest in peace, a thoughtless Queen who
        served her country right until the end. She deserves her rest.
      </Text>
    </BlogLayout>
  );
}
