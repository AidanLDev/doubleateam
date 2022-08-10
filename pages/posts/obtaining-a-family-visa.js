/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { Heading, Text } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import StyledUL from '../../components/StyledUL';
import BlogTitle from '../../components/BlogTitle';
import SimpleLink from '../../components/SimpleLink';

const blogTitle = 'Getting a UK Family Visa';

const EnglishBlog = (
  <BlogLayout
    title='Double A Team | UK Family Visa Guide'
    description={blogTitle}
    postUrl='obtaining-a-family-visa'
  >
    <BlogTitle text={blogTitle} />
    <Text>
      The family visa, in the past there were a couple more visas such
      as the parent visa or even the child visa, however now these all
      fall under the family visa category. Just to clear up any
      confusion, when we first started this process, we had no idea
      what the type of visa we wanted was. There are also
      fiance/fiancee visas or spouse visa types, with a fiance/spouse
      visa you can stay in the UK for up to 6 months, however, one of
      the requirements is that you must get married within this time
      period. If you do so, you can then apply to extend your stay and
      obtain a family visa (this can be a viable route if you and your
      partner both want to marry in the UK, however, it's going to be
      a pricy one as you'll have to pay for both the fiance/spouse
      visa application then the family visa. We'll get onto family
      visa pricing further down).
    </Text>
    <Heading size='md'>Expenses</Heading>
    <Text>
      The family visa it’s quite expensive. It cost us £1,682 for the
      application and an extra £2,047 for the IHS (health insurance
      surge) a payment that’s required as part of the application. We
      needed to get it right, to live our lives together and build our
      future.
    </Text>
    <Heading size='md'>Visa Consultant</Heading>
    <Text>
      That’s why we hired a visa consultant from{' '}
      <SimpleLink link='https://www.i-vars.com/'>I-vars</SimpleLink>.
      Their service was unbelievably helpful, they start with an
      initial call, going through the process itself and they get to
      understand you and your situation so they can know how to best
      help. Once signed up they send a pack with all the information
      about the visa application process and documents required to get
      the approval we all need. They will review any documents and
      give guidance throughout the process.
    </Text>
    <Heading size='md'>The application</Heading>
    <Text>
      On to the application itself then, it’s all done online{' '}
      <SimpleLink link='https://www.gov.uk/uk-family-visa/partner-spouse'>
        here through the gov website.
      </SimpleLink>{' '}
      The majority of questions are self-explanatory. A few stand-out
      ones that could do with some further clarification:
    </Text>
    <StyledUL
      items={[
        { text: 'When did you first meet?' },
        {
          text: 'As we met online, we weren’t sure whether to put the date we first talked online or the first time we physically met each other in person for the first time. We were advised to put down the date we first talked to each online',
          isNested: true
        },
        {
          text: 'Have you been declined entry or had a visa application declined before?'
        },
        {
          text: 'Sadly, we had failed to obtain a visitor visa in the past, so we had to put down yes and explain a little about why. Hopefully, our wording can help you if you find yourself in a similar situation',
          isNested: true
        },
        {
          text: '"I applied for a visit visa to the UK so I could spend some time with my husband (at the time fiancé) Aidan. I really wanted to spend some quality time with him and meet his family, but sadly the visa application was declined. The ECO was not completely satisfied I would return to Indonesia at the end of the trip"',
          isNested: true
        }
      ]}
    />
    <Text>
      The application is pretty lengthy but most of the questions you
      just need to input data about yourself so they’re not too
      difficult.
    </Text>
    <Text>
      Once you’ve paid and submitted your application, you will have
      to book an appointment to provide Biometric data. Once this
      appointment has been booked you can submit your supporting
      evidence to the visa centre.
    </Text>
    <Heading size='md'>Supporting Documents</Heading>
    <Text>
      First off, it helps to know what you’re trying to prove with the
      documents;
    </Text>
    <StyledUL
      items={[
        {
          text: 'Your partner or family member is one of the following:'
        },
        { text: 'Has a British Citizenship', isNested: true },
        {
          text: 'Settlement or EU pre-settled status in the UK',
          isNested: true
        },
        {
          text: 'Asylum or humanitarian protection in the UK',
          isNested: true
        },
        { text: 'You’re over 18' },
        { text: 'You’re in a marriage that is recognised in the UK' },
        {
          text: 'You intend to continue to living together in the UK after you apply'
        },
        {
          text: 'You and your family will have an adequate place to live in the UK'
        },
        {
          text: 'You have a good knowledge of English (either a degree taught in English validated by ECCTIS or a secure test at A1 CERF minimum)'
        },
        {
          text: "You meet the financial requirements (your partner's salary must be over £18,600, which your partner has to of earned for the last 6 months at least)"
        },
        {
          text: 'You’re free from TB (if you live in a country that requires this)'
        }
      ]}
    />
    <Text>
      Documents can be submitted after you've completed the online
      application and created an appointment at your biometric centre
      of choice. Once you've booked an appointment, you can start
      submitting documents online from when you book your appointment
      until 24 hours before your appointment. There are add-ons you
      can pay for such as document scanning assistance etc.
    </Text>
    <Text>
      The actual documents checklist is relatively short. However, if
      you want a really solid application (which we all do, especially
      considering how pricy it is to even apply), then you’re going to
      want to submit a lot of supporting documents to make it
      undoubtedly that you hit the criteria mentioned above.
    </Text>
    <Heading size='sm'>Conditional Documents</Heading>
    <Text>
      The TB test and Secure English language test are two bits of
      documents you may not even need to gather. However, if you do,
      you will need to study for the English test and book an
      appointment for the TB test which could take some time, so let
      us get those out the way first.
    </Text>
    <Heading size='xs'>TB Test</Heading>
    <Text>
      To find out if your country is listed as needing a TB test,{' '}
      <SimpleLink link='https://www.gov.uk/tb-test-visa/countries-where-you-need-a-tb-test-to-enter-the-uk'>
        visit this site provided by the British Government
      </SimpleLink>
    </Text>
    <Heading size='xs'>English Test</Heading>
    <Text>
      The official name for the English certificate you may need to
      provide is called the SELT (Secure English Language Test). If
      any of the following conditions are true, you{' '}
      <strong>DO NOT</strong> need to provide an SELT as part of your
      application.
    </Text>
    <StyledUL
      items={[
        { text: "You're applying as a child" },
        {
          text: "You're applying as an adult coming to be cared for by a relative"
        },
        {
          text: "You've been in the UK on a family visa for 5 years and you're extending it as a partner or parent"
        },
        { text: "You're over 65" },
        {
          text: 'You have a physical or mental condition that prevents you from meeting the requirement'
        }
      ]}
    />
    <Text>
      You also will not need to prove your knowledge of English if
      you’re a national of one of the following countries:
    </Text>
    <StyledUL
      items={[
        { text: 'Antigua and Barbuda' },
        { text: 'Australia' },
        { text: 'the Bahamas' },
        { text: 'Barbados' },
        { text: 'Belize' },
        { text: 'Canada' },
        { text: 'Dominica' },
        { text: 'Grenada' },
        { text: 'Guyana' },
        { text: 'Jamaica' },
        { text: 'Malta' },
        { text: 'New Zealand' },
        { text: 'St Kitts and Nevis' },
        { text: 'St Lucia' },
        { text: 'St Vincent and the Grenadines' },
        { text: 'Trinidad and Tobago' },
        { text: 'USA' }
      ]}
    />
    <Text>
      If you don't meet any of the above conditions, you will need to
      study for your test, the one we prepared for and passed (hurray)
      was the IELTS.{' '}
      <Link href='/posts/how-to-pass-ielts'>
        Find our study guide here
      </Link>
    </Text>
    <Text>
      More information about the CELT and a list of approved test
      centres in your country{' '}
      <SimpleLink link='https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'>
        can be found here on the GOV website
      </SimpleLink>
    </Text>
    <Heading size='sm'>General Documents</Heading>
    <Text>
      Here's a quickfire round regarding general documents you'll need
      to gather to support your application.
    </Text>
    <StyledUL
      items={[
        { text: 'Current and any old passports' },
        { text: "A copy of your partner's passport" },
        {
          text: 'Proof of your relationship (including your marriage certificate and evidence relating to time you have spent together as a couple)'
        },
        {
          text: 'Cover letters from you and your partner, together with supporting statements, including photographic evidence, from family, friends, employers etc. As you deem it necessary to prove your relationship is genuine'
        },
        {
          text: 'Sponsorship declaration from your partner/family member'
        },
        {
          text: 'Proof that any earlier relationships for either of you were over before you married (such as an affidavit or affirmation)'
        }
      ]}
    />

    <Heading size='sm'>Financial and accommodation</Heading>
    <Text>
      The threshold to meet the UKVI financial requirements is an
      annual salary of at least £18,600. However, if you don't meet
      this requirement and have a substantial amount in savings,
      £60,000+, as long as you can prove these savings are accessible
      to you, you should be good.
    </Text>
    <Text>
      The documents you should gather to prove your finances and that
      you've got permission to stay wherever you said you would be
      staying in your visa application.
    </Text>
    <StyledUL
      items={[
        {
          text: "A letter from your partner's employers confirming their role, salary and tenure"
        },
        { text: 'Bank statements going back 6 months' },
        { text: 'Payslips going back 6 months' },
        {
          text: 'Evidence for your UK accommodation such as; estate agent’s details, tenancy agreements, a letter from the landlord if you’re renting'
        }
      ]}
    />
    <Text>
      Phew! That was a lot wasn't it! For personalised support on
      gathering the documents alone, we couldn't recommend i-vars, the
      visa counsellor, enough. They were superstars and answered all
      1,000 questions we had for them. Now all that’s left is the
      waiting game. Usually, the visa will take less than 3 months to
      process, however with the pandemic there’s a bit of a backlog
      and it could take up to 4 months or so. The{' '}
      <SimpleLink link='https://www.gov.uk/guidance/visa-decision-waiting-times-applications-outside-the-uk?msclkid=81bf9ef8d12311ec9cea32779cb8b0d4#join-family-in-the-uk'>
        current status of the waiting time can be seen here
      </SimpleLink>
    </Text>
    <Text>
      About one month after we submitted our application, we received
      an email saying the application had reached the UK Decision
      making centre. They gave a final opportunity for us to provide
      any supporting docs via VSFGlobal or by directly sending the
      documents to an address in Birmingham England. Although they
      charged £100 to send the docs. It’s reassuring to know that if
      you did forget to submit a particular doc at the time of your
      application, it’s not your final chance to give UKVI everything
      they need to make your application succeed.
    </Text>
    <Heading size='md'>Visa Duration</Heading>
    <Text>
      With a UK family visa, you can initially stay in the UK for 2
      years and 9 months. After this you'll be able to apply to extend
      your stay for another 2 years and 6 months. After you have lived
      in the UK for 5 years continuously on a family visa, you can
      apply to settle in the UK (called indefinite leave to remain or
      to put it in even simpler words, permanent residence).
    </Text>
    <Text>
      All the best of luck to you and we wish you and your partner a
      happy life together{' '}
    </Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | UK Family Visa Guide'
    description={blogTitle}
    postUrl='obtaining-a-family-visa'
  >
    <BlogTitle text='Mendapatkan Visa Keluarga Inggris' />
    <Text>
      Visa keluarga, di masa lalu ada beberapa visa lagi seperti visa
      orang tua atau bahkan visa anak, namun sekarang ini semua
      termasuk dalam kategori visa keluarga. Hanya untuk menjernihkan
      kebingungan, ketika kita pertama kali memulai proses ini, kami
      tidak tahu jenis visa apa yang kami inginkan. Ada juga jenis
      visa tunangan/tunangan atau visa pasangan, dengan a visa
      tunangan/pasangan Anda dapat tinggal di Inggris hingga 6 bulan,
      namun, satu salah satu syaratnya adalah kamu harus menikah dalam
      jangka waktu tersebut. Jika Anda melakukannya, Anda dapat
      mengajukan permohonan untuk memperpanjang masa tinggal Anda dan
      mendapatkan keluarga visa (ini bisa menjadi rute yang layak jika
      Anda dan pasangan Anda ingin menikah di Inggris, bagaimanapun,
      itu akan menjadi pernikahan yang mahal karena Anda harus
      membayar aplikasi visa tunangan/pasangan kemudian visa keluarga.
      Kami akan membahas harga visa keluarga lebih jauh).
    </Text>
    <Heading size='md'>Pengeluaran</Heading>
    <Text>
      Visa keluarga itu cukup mahal. Harganya £1.682 untuk aplikasi
      dan tambahan £2.047 untuk IHS (gelombang asuransi kesehatan) a
      pembayaran yang diperlukan sebagai bagian dari aplikasi. Kami
      harus mendapatkannya benar, untuk menjalani hidup kita bersama
      dan membangun masa depan kita.
    </Text>
    <Heading size='md'>Konsultan Visa</Heading>
    <Text>
      Itu sebabnya kami menyewa konsultan visa dari{' '}
      <SimpleLink link='https://www.i-vars.com/'>I-vars</SimpleLink>.
      Milik mereka layanan sangat membantu, mereka mulai dengan
      panggilan awal, pergi melalui proses itu sendiri dan mereka
      memahami Anda dan Anda situasi sehingga mereka dapat mengetahui
      cara terbaik untuk membantu. Setelah mendaftar, mereka mengirim
      bungkus dengan semua informasi tentang proses aplikasi visa dan
      dokumen yang diperlukan untuk mendapatkan persetujuan yang kita
      semua butuhkan. Mereka akan meninjau apa pun dokumen dan
      memberikan panduan selama proses.
    </Text>
    <Heading size='md'>Aplikasi</Heading>
    <Text>
      Ke aplikasi itu sendiri, semuanya dilakukan secara online{' '}
      <SimpleLink link='https://www.gov.uk/uk-family-visa/partner-spouse'>
        di sini melalui GOV website.
      </SimpleLink>{' '}
      Sebagian besar pertanyaan cukup jelas. Beberapa yang menonjol
      itu bisa dilakukan dengan beberapa klarifikasi lebih lanjut:
    </Text>
    <StyledUL
      items={[
        { text: 'When did you first meet?' },
        {
          text: 'Saat kami bertemu online, kami tidak yakin apakah akan mencantumkan tanggal pertama kali kami berbicara online atau pertama kali kami bertemu secara fisik untuk pertama kalinya. Kami disarankan untuk menuliskan tanggal pertama kali kami berbicara satu sama lain secara online',
          isNested: true
        },
        {
          text: 'Have you been declined entry or had a visa application declined before?'
        },
        {
          text: 'Sayangnya, kami gagal mendapatkan visa pengunjung di masa lalu, jadi kami harus meletakkan ya dan menjelaskan sedikit tentang alasannya. Semoga, kata-kata kami dapat membantu Anda jika Anda menemukan diri Anda dalam situasi yang sama',
          isNested: true
        },
        {
          text: '"Saya mengajukan permohonan visa kunjungan ke Inggris sehingga saya bisa menghabiskan waktu bersama suami saya (saat itu tunangan) Aidan. Saya benar-benar ingin menghabiskan waktu berkualitas dengannya dan bertemu keluarganya, tetapi sayangnya aplikasi visa ditolak. ECO tidak sepenuhnya puas saya akan kembali ke Indonesia di akhir perjalanan"',
          isNested: true
        }
      ]}
    />
    <Text>
      Aplikasi ini cukup panjang tetapi sebagian besar pertanyaan yang
      Anda butuhkan untuk memasukkan data tentang diri Anda agar tidak
      terlalu sulit.
    </Text>
    <Text>
      Setelah Anda membayar dan mengirimkan aplikasi Anda, Anda harus
      memesan dan janji untuk memberikan data Biometrik. Setelah janji
      ini telah dipesan, Anda dapat mengirimkan bukti pendukung Anda
      ke pusat visa.
    </Text>
    <Heading size='md'>Dokumen pendukung</Heading>
    <Text>
      Pertama, ada baiknya mengetahui apa yang Anda coba buktikan
      dengan dokumen;
    </Text>
    <StyledUL
      items={[
        {
          text: 'Pasangan atau anggota keluarga Anda adalah salah satu dari berikut ini:'
        },
        { text: 'Memiliki Kewarganegaraan Inggris', isNested: true },
        {
          text: 'Penyelesaian atau status penyelesaian Uni Eropa di Inggris',
          isNested: true
        },
        {
          text: 'Suaka atau perlindungan kemanusiaan di Inggris',
          isNested: true
        },
        { text: 'Anda lebih dari 18' },
        {
          text: 'Anda berada dalam pernikahan yang diakui di Inggris'
        },
        {
          text: 'Anda berniat untuk terus tinggal bersama di Inggris setelah Anda melamar'
        },
        {
          text: 'Anda berniat untuk terus tinggal bersama di Inggris setelah Anda melamar'
        },
        {
          text: 'Anda memiliki pengetahuan bahasa Inggris yang baik (baik gelar yang diajarkan dalam bahasa Inggris divalidasi oleh ECCTIS atau tes aman di minimum A1 CERF)'
        },
        {
          text: 'Anda memenuhi persyaratan keuangan (gaji pasangan Anda harus lebih dari £18.600, yang harus diperoleh pasangan Anda setidaknya selama 6 bulan terakhir)'
        },
        {
          text: 'Anda bebas dari TB (jika Anda tinggal di negara yang mengharuskan ini)'
        }
      ]}
    />
    <Text>
      Dokumen dapat dikirimkan setelah Anda menyelesaikan aplikasi
      online dan membuat janji temu di pusat biometrik pilihan Anda.
      Setelah Anda memesan janji temu, Anda dapat mulai mengirimkan
      dokumen secara online dari kapan Anda memesan janji Anda sampai
      24 jam sebelum janji Anda. Di sana adalah add-on yang dapat Anda
      bayar seperti bantuan pemindaian dokumen, dll.
    </Text>
    <Text>
      Daftar periksa dokumen sebenarnya relatif singkat. Namun, jika
      Anda ingin aplikasi yang sangat solid (yang kita semua lakukan,
      terutama mengingat caranya pricy itu bahkan berlaku), maka Anda
      akan ingin mengirimkan banyak dokumen pendukung untuk membuatnya
      tidak diragukan lagi bahwa Anda memenuhi kriteria disebutkan di
      atas.
    </Text>
    <Heading size='sm'>Dokumen Bersyarat</Heading>
    <Text>
      Tes TB dan tes bahasa Inggris Aman adalah dua bit dokumen yang
      Anda bahkan mungkin tidak perlu berkumpul. Namun, jika Anda
      melakukannya, Anda harus belajar untuk tes bahasa Inggris dan
      membuat janji untuk tes TB yang bisa luangkan waktu, jadi mari
      kita selesaikan dulu.
    </Text>
    <Heading size='xs'>Tes TB</Heading>
    <Text>
      Untuk mengetahui apakah negara Anda terdaftar membutuhkan tes
      TB,{' '}
      <SimpleLink link='https://www.gov.uk/tb-test-visa/countries-where-you-need-a-tb-test-to-enter-the-uk'>
        kunjungi situs ini yang disediakan oleh Pemerintah Inggris
      </SimpleLink>
    </Text>
    <Heading size='xs'>Tes Bahasa Inggris</Heading>
    <Text>
      Nama resmi untuk sertifikat bahasa Inggris yang mungkin perlu
      Anda berikan adalah disebut SELT (Secure English Language Test).
      Jika salah satu dari berikut ini kondisinya benar, kamu
      <strong>JANGAN</strong> perlu memberikan SELT sebagai bagian
      dari aplikasi Anda.
    </Text>
    <StyledUL
      items={[
        { text: 'Anda melamar sebagai seorang anak' },
        {
          text: 'Anda melamar sebagai orang dewasa yang akan dirawat oleh kerabat'
        },
        {
          text: 'Anda telah berada di Inggris dengan visa keluarga selama 5 tahun dan Anda memperpanjangnya sebagai pasangan atau orang tua'
        },
        { text: 'Anda berusia lebih dari 65 tahun' },
        {
          text: 'Anda memiliki kondisi fisik atau mental yang menghalangi Anda untuk memenuhi persyaratan'
        }
      ]}
    />
    <Text>
      Anda juga tidak perlu membuktikan pengetahuan bahasa Inggris
      Anda jika Anda seorang warga negara dari salah satu negara
      berikut:
    </Text>
    <StyledUL
      items={[
        { text: 'Antigua and Barbuda' },
        { text: 'Australia' },
        { text: 'the Bahamas' },
        { text: 'Barbados' },
        { text: 'Belize' },
        { text: 'Canada' },
        { text: 'Dominica' },
        { text: 'Grenada' },
        { text: 'Guyana' },
        { text: 'Jamaica' },
        { text: 'Malta' },
        { text: 'New Zealand' },
        { text: 'St Kitts and Nevis' },
        { text: 'St Lucia' },
        { text: 'St Vincent and the Grenadines' },
        { text: 'Trinidad and Tobago' },
        { text: 'USA' }
      ]}
    />
    <Text>
      Jika Anda tidak memenuhi salah satu dari kondisi di atas, Anda
      perlu belajar untuk tes Anda, yang kami siapkan dan lulus (hore)
      adalah IELTS.{' '}
      <Link href='/posts/how-to-pass-ielts'>
        Temukan panduan belajar kami di sini
      </Link>
    </Text>
    <Text>
      Informasi lebih lanjut tentang CELT dan daftar pusat pengujian
      yang disetujui di negaramu{' '}
      <SimpleLink link='https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'>
        dapat ditemukan di sini di situs web GOV
      </SimpleLink>
    </Text>
    <Heading size='sm'>Dokumen Umum</Heading>
    <Text>
      Inilah putaran cepat mengenai dokumen umum yang harus Anda
      kumpulkan untuk mendukung aplikasi Anda.
    </Text>
    <StyledUL
      items={[
        { text: 'Paspor saat ini dan paspor lama lainnya' },
        { text: 'Salinan paspor pasangan Anda' },
        {
          text: 'Bukti hubungan Anda (termasuk surat nikah Anda dan bukti yang berkaitan dengan waktu yang Anda habiskan bersama sebagai pasangan)'
        },
        {
          text: 'Surat pengantar dari Anda dan pasangan, bersama dengan pernyataan pendukung, termasuk bukti foto, dari keluarga, teman, majikan, dll. Jika Anda menganggap perlu untuk membuktikan bahwa hubungan Anda asli'
        },
        {
          text: 'Pernyataan sponsor dari pasangan/anggota keluarga Anda'
        },
        {
          text: 'Bukti bahwa hubungan sebelumnya untuk Anda berdua telah berakhir sebelum Anda menikah (seperti surat pernyataan atau penegasan)'
        }
      ]}
    />

    <Heading size='sm'>Keuangan dan akomodasi</Heading>
    <Text>
      Ambang batas untuk memenuhi persyaratan keuangan UKVI adalah
      gaji tahunan setidaknya £18.600. Namun, jika Anda tidak memenuhi
      persyaratan ini dan memiliki penghematan yang cukup besar,
      £60,000+, selama Anda bisa membuktikannya tabungan dapat diakses
      oleh Anda, Anda harus baik.
    </Text>
    <Text>
      Dokumen yang harus Anda kumpulkan untuk membuktikan keuangan
      Anda dan yang Anda miliki izin untuk tinggal di mana pun Anda
      mengatakan Anda akan tinggal di visa Anda aplikasi.
    </Text>
    <StyledUL
      items={[
        {
          text: 'Surat dari majikan mitra Anda yang mengonfirmasi peran, gaji, dan masa kerja mereka'
        },
        { text: 'Laporan bank akan kembali 6 bulan' },
        { text: 'Slip gaji akan kembali 6 bulan' },
        {
          text: 'Bukti akomodasi UK Anda seperti; rincian agen real, perjanjian sewa, surat dari pemilik jika Anda menyewa'
        }
      ]}
    />
    <Text>
      Fiuh! Itu banyak bukan! Untuk dukungan yang dipersonalisasi
      dalam mengumpulkan dokumen saja, kami tidak dapat
      merekomendasikan i-vars, penasihat visa, cukup. Mereka adalah
      superstar dan menjawab semua 1.000 pertanyaan yang kami miliki
      mereka. Sekarang yang tersisa hanyalah permainan menunggu.
      Biasanya, visa akan mengambil kurang dari 3 bulan untuk
      diproses, namun dengan pandemi ada sedikit backlog dan bisa
      memakan waktu hingga 4 bulan atau lebih. Itu{' '}
      <SimpleLink link='https://www.gov.uk/guidance/visa-decision-waiting-times-applications-outside-the-uk?msclkid=81bf9ef8d12311ec9cea32779cb8b0d4#join-family-in-the-uk'>
        status waktu tunggu saat ini dapat dilihat di sini
      </SimpleLink>
    </Text>
    <Text>
      Sekitar satu bulan setelah kami mengirimkan aplikasi kami, kami
      menerima email mengatakan aplikasi telah mencapai pusat
      pengambilan keputusan Inggris. Mereka memberikan kesempatan
      terakhir bagi kami untuk memberikan dokumen pendukung melalui
      VSFGlobal atau dengan langsung mengirimkan dokumen ke alamat di
      Birmingham Inggris. Meskipun mereka dikenakan biaya £ 100 untuk
      mengirim dokumen. Ini meyakinkan untuk ketahuilah bahwa jika
      Anda lupa mengirimkan dokumen tertentu pada saat Anda aplikasi,
      ini bukan kesempatan terakhir Anda untuk memberikan UKVI semua
      yang mereka butuhkan untuk membuat aplikasi Anda berhasil.
    </Text>
    <Heading size='md'>Durasi Visa</Heading>
    <Text>
      Dengan visa keluarga Inggris, Anda awalnya dapat tinggal di
      Inggris selama 2 tahun dan 9 bulan. Setelah ini, Anda dapat
      mengajukan permohonan untuk memperpanjang masa tinggal Anda
      untuk yang lain 2 tahun 6 bulan. Setelah Anda tinggal di Inggris
      selama 5 tahun terus menerus dengan visa keluarga, Anda dapat
      mengajukan permohonan untuk menetap di Inggris (disebut cuti
      tidak terbatas untuk tetap atau dengan kata yang lebih
      sederhana, permanen tempat tinggal).
    </Text>
    <Text>
      Semua yang terbaik dari keberuntungan untuk Anda dan kami
      berharap Anda dan pasangan Anda hidup bahagia bersama{' '}
    </Text>
  </BlogLayout>
);

export default function HowToPassIelts() {
  const lang = useSetLang();

  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;

  return blogToDisplay;
}
