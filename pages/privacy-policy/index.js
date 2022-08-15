/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, UnorderedList, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import Topbar from '../../components/Nav/Topbar';
import SEO from '../../components/SEO';
import useIsMobile from '../../hooks/useIsMobile';
import useSetLang from '../../hooks/useSetLang';

import styles from './styles.module.scss';

const engPolicy = (
  <>
    <Heading>Privacy Policy of Double A Team</Heading>
    <Text>
      Double A Team operate the https://www.doubleateam.co.uk website, which
      provides a blogging or artical service where we post regarding various
      topics we think our readers will find either useful or interesting.
    </Text>
    <Text>
      This page is used to inform website visitors regarding our policies with
      the collection, use, and disclosure of Personal Information if anyone
      decided to use our Service, the Double A Team Name website.
    </Text>
    <Text>
      If you choose to use our Service, then you agree to the collection and use
      of information in relation with this policy. The Personal Information that
      we collect are used for providing and improving the Service. We will not
      use or share your information with anyone except as described in this
      Privacy Policy.
    </Text>
    <Heading>Log Data</Heading>
    <Text>
      We want to inform you that whenever you visit our Service, we collect
      information that your browser sends to us that is called Log Data. This
      Log Data may include information such as your computer's Internet Protocol
      (“IP”) address, browser version, pages of our Service that you visit, the
      time and date of your visit, the time spent on those pages, and other
      statistics.
    </Text>
    <Heading>Cookies</Heading>
    <Text>
      Cookies are files with small amount of data that is commonly used an
      anonymous unique identifier. These are sent to your browser from the
      website that you visit and are stored on your computer's hard drive. Our
      website uses these “cookies” to collection information and to improve our
      Service. You have the option to either accept or refuse these cookies, and
      know when a cookie is being sent to your computer. If you choose to refuse
      our cookies, you may not be able to use some portions of our Service.
    </Text>
    <Heading>Service Providers</Heading>
    <Text>
      We may employ third-party companies and individuals due to the following
      reasons:
    </Text>
    <UnorderedList>
      <ListItem>To facilitate our Service;</ListItem>
      <ListItem>To provide the Service on our behalf;</ListItem>
      <ListItem>To perform Service-related services; or</ListItem>
      <ListItem>To assist us in analyzing how our Service is used.</ListItem>
    </UnorderedList>
    <Text>
      We want to inform our Service users that these third parties have access
      to your Personal Information. The reason is to perform the tasks assigned
      to them on our behalf. However, they are obligated not to disclose or use
      the information for any other purpose.
    </Text>
    <Heading>Security</Heading>
    <Text>
      We value your trust in providing us your Personal Information, thus we are
      striving to use commercially acceptable means of protecting it. But
      remember that no method of transmission over the internet, or method of
      electronic storage is 100% secure and reliable, and we cannot guarantee
      its absolute security.
    </Text>
    <Heading>Links to Other Sites</Heading>
    <Text>
      Our Service may contain links to other sites. If you click on a
      third-party link, you will be directed to that site. Note that these
      external sites are not operated by us. Therefore, we strongly advise you
      to review the Privacy Policy of these websites. We have no control over,
      and assume no responsibility for the content, privacy policies, or
      practices of any third-party sites or services.
    </Text>
    <Text>Children's Privacy</Text>
    <Text>
      Our Services do not address anyone under the age of 13. We do not
      knowingly collect personal identifiable information from children under
      13. In the case we discover that a child under 13 has provided us with
      personal information, we immediately delete this from our servers. If you
      are a parent or guardian and you are aware that your child has provided us
      with personal information, please contact us so that we will be able to do
      necessary actions.
    </Text>
    <Heading>Changes to This Privacy Policy</Heading>
    <Text>
      We may update our Privacy Policy from time to time. Thus, we advise you to
      review this page periodically for any changes. We will notify you of any
      changes by posting the new Privacy Policy on this page. These changes are
      effective immediately, after they are posted on this page.
    </Text>
    <Heading>Contact Us</Heading>
    <Text>
      If you have any questions or suggestions about our Privacy Policy, do not
      hesitate to{' '}
      <Link href='/contact-us' passHref>
        contact us.
      </Link>
    </Text>
  </>
);

const indPolicy = (
  <>
    <Heading>Kebijakan pribadi Double A Team</Heading>
    <Text>
      Double A Team mengoperasikan https://www.doubleateam.co.uk situs web, yang
      menyediakan layanan blog atau artikel tempat kami memposting tentang
      berbagai topik yang menurut kami bermanfaat atau menarik bagi pembaca
      kami.
    </Text>
    <Text>
      Halaman ini digunakan untuk memberi tahu pengunjung situs web mengenai
      kebijakan kami dengan pengumpulan, penggunaan, dan pengungkapan Informasi
      Pribadi jika ada memutuskan untuk menggunakan Layanan kami,Double A Team
      Name situs web.
    </Text>
    <Text>
      Jika Anda memilih untuk menggunakan Layanan kami, maka Anda menyetujui
      pengumpulan dan penggunaan informasi terkait dengan kebijakan ini.
      Informasi Pribadi yang yang kami kumpulkan digunakan untuk menyediakan dan
      meningkatkan Layanan. Kita tidak akan menggunakan atau membagikan
      informasi Anda dengan siapa pun kecuali seperti yang dijelaskan dalam ini
      Kebijakan pribadi.
    </Text>
    <Heading>Masuk Data</Heading>
    <Text>
      Kami ingin memberi tahu Anda bahwa setiap kali Anda mengunjungi Layanan
      kami, kami mengumpulkan informasi yang dikirimkan browser Anda kepada kami
      yang disebut Data Log. Ini Data Log dapat mencakup informasi seperti
      Protokol Internet komputer Anda ("IP") alamat, versi browser, halaman
      Layanan kami yang Anda kunjungi, waktu dan tanggal kunjungan Anda, waktu
      yang dihabiskan di halaman tersebut, dan lainnya statistik.
    </Text>
    <Heading>Cookies</Heading>
    <Text>
      Cookies adalah file dengan sejumlah kecil data yang umum digunakan dan
      pengenal unik anonim. Ini dikirim ke browser Anda dari situs web yang Anda
      kunjungi dan disimpan di hard drive komputer Anda. Kita situs web
      menggunakan ini “cookies” untuk mengumpulkan informasi dan untuk
      meningkatkan Melayani. Anda memiliki pilihan untuk menerima atau menolak
      ini cookies, dan tahu kapan cookie sedang dikirim ke komputer Anda. Jika
      Anda memilih untuk menolak cookies kita, Anda mungkin tidak dapat
      menggunakan beberapa bagian dari Layanan kami.
    </Text>
    <Heading>Penyedia jasa</Heading>
    <Text>
      Kami dapat mempekerjakan perusahaan dan individu pihak ketiga karena
      hal-hal berikut: alasan:
    </Text>
    <UnorderedList>
      <ListItem>Untuk memfasilitasi Layanan kami;</ListItem>
      <ListItem>Untuk menyediakan Layanan atas nama kami;</ListItem>
      <ListItem>Untuk melakukan layanan terkait Layanan; atau</ListItem>
      <ListItem>
        Untuk membantu kami dalam menganalisis bagaimana Layanan kami digunakan.
      </ListItem>
    </UnorderedList>
    <Text>
      Kami ingin memberi tahu pengguna Layanan kami bahwa pihak ketiga ini
      memiliki akses ke Informasi Pribadi Anda. Alasannya adalah untuk melakukan
      tugas yang diberikan kepada mereka atas nama kita. Namun, mereka
      berkewajiban untuk tidak mengungkapkan atau menggunakan informasi untuk
      tujuan lain.
    </Text>
    <Heading>Keamanan</Heading>
    <Text>
      Kami menghargai kepercayaan Anda dalam memberikan Informasi Pribadi Anda
      kepada kami, oleh karena itu kami berusaha untuk menggunakan cara yang
      dapat diterima secara komersial untuk melindunginya. Tetapi ingat bahwa
      tidak ada metode transmisi melalui internet, atau metode penyimpanan
      elektronik 100% aman dan andal, dan kami tidak dapat menjamin keamanan
      mutlaknya.
    </Text>
    <Heading>Tautan ke Situs Lain</Heading>
    <Text>
      Layanan kami mungkin berisi tautan ke situs lain. Jika Anda mengklik link
      pihak ketiga, Anda akan diarahkan ke situs tersebut. Perhatikan bahwa ini
      situs eksternal tidak dioperasikan oleh kami. Oleh karena itu, kami sangat
      menyarankan Anda untuk meninjau Kebijakan Privasi situs web ini. Kami
      tidak memiliki kendali atas, dan tidak bertanggung jawab atas konten,
      kebijakan privasi, atau praktik situs atau layanan pihak ketiga mana pun.
    </Text>
    <Text>Privasi Anak-anak</Text>
    <Text>
      Layanan kami tidak ditujukan kepada siapa pun yang berusia di bawah 13
      tahun. Kami tidak secara sadar mengumpulkan informasi pengenal pribadi
      dari anak-anak di bawah 13. Dalam kasus kami menemukan bahwa seorang anak
      di bawah 13 tahun telah memberi kami informasi pribadi, kami segera
      menghapusnya dari server kami. Jika kamu adalah orang tua atau wali dan
      Anda mengetahui bahwa anak Anda telah memberi kami dengan informasi
      pribadi, silakan hubungi kami sehingga kami dapat melakukannya tindakan
      yang diperlukan.
    </Text>
    <Heading>Perubahan pada Kebijakan Privasi Ini</Heading>
    <Text>
      Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Karena
      itu, kami menyarankan Anda untuk tinjau halaman ini secara berkala untuk
      setiap perubahan. Kami akan memberi tahu Anda jika ada perubahan dengan
      memposting Kebijakan Privasi baru di halaman ini. Perubahan ini adalah
      efektif segera, setelah diposting di halaman ini.
    </Text>
    <Heading>Hubungi kami</Heading>
    <Text>
      Jika Anda memiliki pertanyaan atau saran tentang Kebijakan Privasi kami,
      jangan ragu untuk{' '}
      <Link href='/contact-us' passHref>
        Hubungi kami.
      </Link>
    </Text>
  </>
);

export default function PrivacyPolicy() {
  const isMobile = useIsMobile();
  const lang = useSetLang();
  return (
    <Box className={styles.privacyPolicyContainer}>
      <SEO
        title='Double A Team | Privacy Policy'
        description='Privacy policy information'
        url='https://doubleateam.co.uk/privacy-policy'
        image='/images/IstanbulHagiaSopia.jpg'
      />
      <Topbar />
      <Layout>
        <Box
          maxW={isMobile ? '90%' : '60rem'}
          p='4px 2rem'
          m='2rem auto 2rem'
          className={styles.privacyPolicyContent}
        >
          {lang === 'Eng' ? engPolicy : indPolicy}
        </Box>
      </Layout>
      <Footer />
    </Box>
  );
}
