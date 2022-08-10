/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text, Heading } from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import StyledUL from '../../components/StyledUL';
import SimpleLink from '../../components/SimpleLink';

const blogTitle = 'Getting married to a foreigner in Indonesia';
const EnglishBlog = (
  <BlogLayout
    title='Double A Team | Marriage Requirements'
    description={blogTitle}
    postUrl='marriage-requirements'
  >
    <BlogTitle text={blogTitle} />
    <Text>
      Weddings in Indonesia are always religious ceremonies, this can
      make things a bit complicated if you’re from a different
      religious background from your spouse. However, with the right
      documents, this isn’t an issue. We’ll talk through everything we
      needed to get married and the steps we took to get there.
    </Text>
    <Text>
      If you’re a British citizen this will ask you to go through a
      short series of questions to point you to the embassy, you need
      to contact to get the required wedding docs{' '}
      <SimpleLink link='https://www.gov.uk/marriage-abroad'>
        Getting married abroad - GOV.UK
      </SimpleLink>
    </Text>
    <Heading size='md'>Foreign spouse documents</Heading>
    <Text>
      There are a few documents the foreign spouse will need for
      getting married in Indonesia.
    </Text>
    <StyledUL
      items={[
        {
          text: 'Affidavit/affirmation to prove that all previous relationships have ended'
        },
        {
          text: 'Email the relevant embassy in Jakarta and book an appointment to swear an Affidavit – The British Embassy was very responsive and managed to get us an appointment the very week we emailed. They charge a fee of £50',
          isNested: true
        },
        {
          text: 'If the Indonesian spouse is Muslim, you will need a shahada certificate. I got mine from the central London Mosque, you can contact them here. Although some KUAs (the Indonesian registry office) will allow the foreign spouse to take their shahada as part of the wedding ceremony or privately with them just before the wedding.'
        },
        {
          text: 'ID - Your passport, which you should have with you anyways! So, this requirement is a freebee yay. Just in case you might want to bring along something like a driving licence if you have one '
        }
      ]}
    />
    <Text>
      Here’s where you can{' '}
      <SimpleLink link='https://www.iccuk.org/page2.php?section=contact&page=contact'>
        contact the London Mosque
      </SimpleLink>{' '}
      if you are from the UK and need to get your hands on a shahada
      certificate
    </Text>
    <Text>
      These docs may not be necessary however some areas may have
      stricter KUAs who will require the following:
    </Text>
    <StyledUL
      items={[
        { text: 'Birth Certificate' },
        { text: 'Certificate of domicile' }
      ]}
    />
    <Heading size='md'>Local Indonesian spouse documents </Heading>
    <StyledUL
      items={[
        { text: 'Marriage introduction letter from RT & RW' },
        { text: 'KTP' },
        { text: 'KK' }
      ]}
    />
    <Text>
      Again these docs may not be necessary however some KUAs will ask
      for the following:
    </Text>
    <StyledUL
      items={[
        { text: 'Parents KTP and KK' },
        { text: 'Death certificate (if parents have passed away)' },
        { text: 'ID cards of 2 witnesses' }
      ]}
    />
    <Heading size='md'>Photos</Heading>
    <Text>
      You will both need to get professional photos taken where with
      the following format: 2 x 3 with a blue background – 3 sheets
    </Text>
    <Text>
      English documents will need to be translated by an approved
      sworn translator; we used the Juliani Language Centre (WA: +62
      818-588-036){' '}
      <SimpleLink link='https://www.gov.uk/government/publications/indonesia-list-of-lawyers/list-of-translatorsinterpreters-in-indonesia'>
        A list of translators provided by the British gov site.
      </SimpleLink>
    </Text>
    <Text>
      You want to choose a translator who can translate documents,
      it’s best to ask a few for their price list as they can vary a
      lot from one translator to another.
    </Text>
    <Text>
      The only two documents I needed translating were my birth
      certificate and passport. Luckily for us, the British embassy
      printed out the Affidavit in both English and Indonesian so that
      didn’t need translating, if you don’t have the Affidavit/
      affirmation in Indonesian you’ll have to get that translated
      too.
    </Text>
    <Heading size='md'>
      Prenup and Indonesian marriage rights for marriages with foreign
      spouses
    </Heading>
    <Text>
      This part is a bit complicated… sadly if you do get married to a
      foreign spouse, the local spouse will lose their property and
      inheritance rights in Indonesia. This is because when married,
      they share the rights of their spouse, their spouse being
      foreign doesn’t have property rights therefore they inherit the
      same rights as a result… Or something along those lines!
    </Text>
    <Text>
      To avoid this, we contacted a notary to arrange a prenup
      (pre-marital agreement) that would allow my lovely wife the
      rights she deserves. A list of English-speaking notaries who are
      in Indonesia{' '}
      <SimpleLink link='https://www.gov.uk/government/publications/indonesia-list-of-lawyers/list-of-notaries-public-in-indonesia'>
        can be found here.
      </SimpleLink>{' '}
      Although we just found a notary local to where my wife lives in
      Bandung and they were super helpful. Overall, the prenup cost us
      2.5 million Indonesia Rupia (est £140)
    </Text>
    <Heading size='md'>
      Documents from various Indonesian administration areas (RT & RW
      & Kelurahan & Kecematan)
    </Heading>
    <Text>
      First, a bit of explaining what those words above mean:
      Indonesia is divided into different regions, in these regions
      they’re third-level administrative subdivisions below regencies
      or cities known as Kacematans. Kelurahan is a subdivision below
      kacematans, so they’re a fourth-level subdivision which
      translates to “villages” in English. Finally, below this, we
      have the RT (rukun tetangga which can translate to
      “neighbourhood unit”) and RW (Rukan Warga which can translate to
      “community unit”). These are the division below the Kelurahan.
      An RW is made up of many RT, so that is the most local area to
      an Indonesian resident. I hope this at least slightly makes
      sense, to me it’s still confusing, Indonesia is just such a huge
      country, so it can take a lot to get our heads around how it’s
      divided up and organised if you haven’t lived there.
    </Text>
    <Text>
      You’ll need to grab a handful of documents from your local RT/RW
      and attach some of the documents mentioned above in the
      documents required section. Once you have the translated
      documents, visit the local Kelurahan and provide them with the
      relevant documents. After finishing with the kelurahan
      documents, go to the kacamatan to request the documents for the
      KUA.
    </Text>
    <Heading size='md'>Immunisation</Heading>
    <Text>
      After we visited the KUA with copies of the documents from the
      various regency offices, the Indonesian spouse had to get a
      tetanus immunisation before we could marry.
    </Text>
    <Heading>Congratulations</Heading>
    <Text>
      Bring all the documents to the KUA and that’s that! You’re ready
      to get married
    </Text>
    <Text>
      The start of your new life as husband and wife, suami and istri,
      can now begin. Enjoy the precious time with family and friends,
      savour the moment, but most importantly look after each other
      and enjoy the rest of your lives together ❤️
    </Text>
    <Text>We wish you all the best in your future</Text>
  </BlogLayout>
);

const IndonesianBlog = (
  <BlogLayout
    title='Double A Team | Marriage Requirements'
    description={blogTitle}
    postUrl='marriage-requirements'
  >
    <BlogTitle text='Menikah dengan orang asing di Indonesia' />
    <Text>
      Pernikahan di Indonesia selalu upacara keagamaan, ini bisa bikin
      hal-hal yang agak rumit jika Anda berasal dari latar belakang
      agama yang berbeda dari pasangan Anda. Namun, dengan dokumen
      yang tepat, ini bukan masalah. Kami akan membicarakan semua yang
      kami butuhkan untuk menikah dan langkah yang kami ambil untuk
      sampai ke sana.
    </Text>
    <Text>
      Jika Anda seorang warga negara Inggris, ini akan meminta Anda
      untuk membaca seri pendek pertanyaan untuk mengarahkan Anda ke
      kedutaan, Anda perlu menghubungi untuk mendapatkan dokumen
      pernikahan yang diperlukan{' '}
      <SimpleLink link='https://www.gov.uk/marriage-abroad'>
        Menikah di luar negeri - GOV.UK
      </SimpleLink>
    </Text>
    <Heading size='md'>Dokumen pasangan asing</Heading>
    <Text>
      Ada beberapa dokumen yang dibutuhkan pasangan asing untuk
      menikah di Indonesia.
    </Text>
    <StyledUL
      items={[
        {
          text: 'Surat pernyataan / penegasan untuk membuktikan bahwa semua hubungan sebelumnya telah berakhir'
        },
        {
          text: 'Email kedutaan terkait di Jakarta dan pesan janji untuk bersumpah - Kedutaan Besar Inggris sangat responsif dan berhasil membuat kami membuat janji pada minggu kami mengirim email. Mereka mengenakan biaya sebesar £50',
          isNested: true
        },
        {
          text: 'Jika pasangan Indonesia adalah Muslim, Anda akan memerlukan sertifikat syahadat. Saya mendapatkan milik saya dari Masjid pusat London, Anda dapat menghubungi mereka di sini. Meskipun beberapa KUA (kantor catatan sipil Indonesia) akan mengizinkan pasangan asing untuk mengucapkan syahadat sebagai bagian dari upacara pernikahan atau secara pribadi dengan mereka sebelum pernikahan.'
        },
        {
          text: 'ID -  Paspor Anda, yang harus Anda bawa! Jadi, persyaratan ini adalah freebee yay. Untuk berjaga-jaga jika Anda mungkin ingin membawa sesuatu seperti SIM jika Anda memilikinya'
        }
      ]}
    />
    <Text>
      Di sinilah Anda bisa{' '}
      <SimpleLink link='https://www.iccuk.org/page2.php?section=contact&page=contact'>
        hubungi London Mosque
      </SimpleLink>{' '}
      jika Anda berasal dari Inggris dan perlu mendapatkan sertifikat
      syahadat
    </Text>
    <Text>
      Dokumen ini mungkin tidak diperlukan namun beberapa area mungkin
      memiliki KUA yang lebih ketat yang akan membutuhkan berikut
      ini::
    </Text>
    <StyledUL
      items={[
        { text: 'Birth Certificate' },
        { text: 'Certificate of domicile' }
      ]}
    />
    <Heading size='md'>Dokumen pasangan lokal Indonesia</Heading>
    <StyledUL
      items={[
        { text: 'Marriage surat pengantar dari RT & RW' },
        { text: 'KTP' },
        { text: 'KK' }
      ]}
    />
    <Text>
      Sekali lagi, dokumen ini mungkin tidak diperlukan, namun
      beberapa KUA akan meminta mengikuti:
    </Text>
    <StyledUL
      items={[
        { text: 'KTP and KK Orang tua' },
        {
          text: 'Surat Keterangan Kematian Orang Tua (jika orang tua telah meninggal dunia)'
        },
        { text: 'ID kartu 2 saksi' }
      ]}
    />
    <Heading size='md'>Foto</Heading>
    <Text>
      Anda berdua perlu mendapatkan foto profesional yang diambil di
      mana dengan format berikut: 2 x 3 dengan latar belakang biru – 3
      lembar
    </Text>
    <Text>
      Dokumen bahasa Inggris perlu diterjemahkan oleh orang tersumpah
      yang disetujui Penerjemah; kami menggunakan{' '}
      <strong>Juliani Language Centre</strong> (WA: +62 818-588-036){' '}
      <SimpleLink link='https://www.gov.uk/government/publications/indonesia-list-of-lawyers/list-of-translatorsinterpreters-in-indonesia'>
        Daftar penerjemah yang disediakan oleh situs pemerintah
        Inggris.
      </SimpleLink>
    </Text>
    <Text>
      Anda ingin memilih penerjemah yang dapat menerjemahkan dokumen,
      sebaiknya tanyakan beberapa daftar harga mereka karena mereka
      dapat sangat bervariasi dari satu penerjemah ke yang lainnya.
    </Text>
    <Text>
      Hanya dua dokumen yang perlu saya terjemahkan adalah akta
      kelahiran saya dan paspor. Beruntung bagi kami, kedutaan Inggris
      mencetak Affidavit di baik bahasa Inggris maupun bahasa
      Indonesia jadi tidak perlu diterjemahkan, jika tidak memiliki
      Affidavit / penegasan dalam bahasa Indonesia Anda harus
      mendapatkannya diterjemahkan juga.
    </Text>
    <Heading size='md'>
      Prenup and Indonesian hak perkawinan untuk perkawinan dengan
      pasangan asing
    </Heading>
    <Text>
      Bagian ini agak rumit ... sayangnya jika Anda menikah dengan
      orang asing pasangan, pasangan lokal akan kehilangan harta benda
      dan hak warisnya di Indonesia. Hal ini karena ketika menikah,
      mereka berbagi hak-hak mereka pasangan, pasangan mereka yang
      asing tidak memiliki hak milik karena itu mereka mewarisi hak
      yang sama sebagai hasilnya ... Atau sesuatu seperti itu!
    </Text>
    <Text>
      Untuk menghindari hal ini, kami menghubungi notaris untuk
      mengatur perjanjian pranikah (pranikah). persetujuan) yang akan
      memberikan hak yang layak untuk istri tercinta saya. Sebuah
      daftar notaris berbahasa Inggris yang berada di Indonesia{' '}
      <SimpleLink link='https://www.gov.uk/government/publications/indonesia-list-of-lawyers/list-of-notaries-public-in-indonesia'>
        dapat ditemukan di sini.
      </SimpleLink>{' '}
      Meskipun kami baru saja menemukan notaris lokal tempat istri
      saya tinggal di Bandung dan mereka sangat membantu. Secara
      keseluruhan, perjanjian pranikah merugikan kami 2.5 juta
      Indonesia Rupia (est £140)
    </Text>
    <Heading size='md'>
      Dokumen dari berbagai wilayah administrasi Indonesia (RT & RW &
      Kelurahan & Kecematan)
    </Heading>
    <Text>
      Pertama, sedikit menjelaskan apa arti kata-kata di atas:
      Indonesia adalah dibagi menjadi beberapa wilayah, di wilayah ini
      mereka tingkat ketiga pembagian administrasi di bawah kabupaten
      atau kota yang dikenal sebagai Kacematans. Kelurahan adalah
      subdivisi di bawah kacematan, jadi mereka adalah tingkat keempat
      subdivisi yang diterjemahkan menjadi "desa" dalam bahasa
      Inggris. Akhirnya, di bawah ini ini, kami memiliki RT (rukun
      tetangga yang dapat diterjemahkan menjadi "tetangga" unit”) dan
      RW (Rukan Warga yang dapat diterjemahkan menjadi “satuan
      masyarakat”). Ini adalah pembagian di bawah Kelurahan. Sebuah RW
      terdiri dari banyak RT, sehingga adalah daerah yang paling lokal
      untuk penduduk Indonesia. Saya harap ini setidaknya sedikit
      masuk akal, bagi saya itu masih membingungkan, Indonesia hanya
      seperti itu negara besar, jadi butuh banyak waktu untuk memahami
      bagaimana keadaannya dibagi dan diatur jika Anda belum tinggal
      di sana.
    </Text>
    <Text>
      Anda perlu mengambil beberapa dokumen dari RT/RW setempat dan
      lampirkan beberapa dokumen yang disebutkan di atas dalam dokumen
      yang diperlukan bagian. Setelah Anda memiliki dokumen yang
      diterjemahkan, kunjungi Kelurahan setempat dan memberi mereka
      dokumen yang relevan. Setelah selesai dengan dokumen kelurahan,
      pergi ke kacamatan untuk request dokumen KUA.
    </Text>
    <Heading size='md'>Imunisasi</Heading>
    <Text>
      Setelah kami mengunjungi KUA dengan salinan dokumen dari
      berbagai kantor kabupaten, pasangan Indonesia harus mendapatkan
      imunisasi tetanus sebelum kita bisa menikah.
    </Text>
    <Heading>Congratulations</Heading>
    <Text>
      Bawa semua dokumen ke KUA dan hanya itu! Anda siap untuk
      mendapatkan telah menikah
    </Text>
    <Text>
      Awal kehidupan baru Anda sebagai suami istri, suami istri,
      sekarang bisa mulai. Nikmati waktu berharga bersama keluarga dan
      teman, nikmati momennya, tapi yang terpenting saling menjaga dan
      menikmati sisa hidupmu hidup bersama ❤️
    </Text>
    <Text>Kami berharap yang terbaik untuk masa depan Anda</Text>
  </BlogLayout>
);

export default function MarriageRequirements() {
  const lang = useSetLang();
  let blogToDisplay = lang === 'Ind' ? IndonesianBlog : EnglishBlog;
  return blogToDisplay;
}
