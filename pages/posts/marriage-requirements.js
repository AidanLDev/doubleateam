/* eslint-disable react/no-unescaped-entities */
import { Text, Heading } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import StyledUL from '../../components/StyledUL';
import SimpleLink from '../../components/SimpleLink';

export default function HowToPassIelts() {
  const blogTitle = 'Getting married to a foreigner in Indonesia';
  return (
    <BlogLayout
      title='Double A Team | Marriage Requirements'
      description={blogTitle}
      postUrl='marriage-requirements'
    >
      <BlogTitle text={blogTitle} />
      <Text>
        Weddings in Indonesia are always religious ceremonies, this
        can make things a bit complicated if you’re from a different
        religious background from your spouse. However, with the right
        documents, this isn’t an issue. We’ll talk through everything
        we needed to get married and the steps we took to get there.
      </Text>
      <Text>
        If you’re a British citizen this will ask you a short series
        of questions to point you to the embassy you need to contact
        to get the required wedding docs{' '}
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
            text: 'Affidavit/affirmation to prove that all previous relationships have ended '
          },
          {
            text: 'Email the relevant embassy in Jakarta and book an appointment to swear an Affidavit – The British embassy were very responsive and managed to get us an appointment the very week we emailed. They charge a fee of £50',
            isNested: true
          },
          {
            text: 'If the Indonesian spouse is Muslim, you will need a shahada certificate. I got mine from the central London Mosque, you can contact them here. Although some KUAs (the Indonesian registry office) will allow the foreign spouse to take their shahada as part of the wedding ceremony or privately with them just before the wedding.'
          },
          {
            text: 'ID - Your passport, which you should have with you anyways! So, this requirement is a freebee yay. Just in-case you might want to bring along something like a driving licence too if you have one '
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
        stricter KUAs and will require the following:
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
          { text: 'Marriage introduction letter from RT & RW ' },
          { text: 'KTP' },
          { text: 'KK' }
        ]}
      />
      <Text>
        Again these docs may not be necessary however some KUAs will
        ask for the following:
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
        The only two documents I needed translating was my birth
        certificate and passport. Luckily for us the British embassy
        printed out the Affidavit in both English and Indonesian so
        that didn’t need translating, if you don’t have the Affidavit/
        affirmation in Indonesian you’ll have to get that translated
        too.
      </Text>
      <Heading size='md'>
        Prenup and Indonesian marriage rights for marriages with
        foreign spouses
      </Heading>
      <Text>
        This part is a bit complicated… sadly if you do get married to
        a foreign spouse, the local spouse will lose their property
        and inheritance rights in Indonesia. This is because when
        married, they share the rights of their spouse, their spouse
        being foreign doesn’t have property rights therefore they
        inherit the same rights as a result… Or something along those
        lines!
      </Text>
      <Text>
        To avoid this, we contacted a notary to arrange a prenup
        (pre-marital agreement) that would allow my lovely wife the
        rights she deserves. A list of English-speaking notaries who
        are in Indonesia{' '}
        <SimpleLink link='https://www.gov.uk/government/publications/indonesia-list-of-lawyers/list-of-notaries-public-in-indonesia'>
          can be found here.
        </SimpleLink>{' '}
        Although we just found a notary local to where my wife lives
        in Bandung and they were super helpful. Overall, the prenup
        cost us 2.5 million Indonesia Rupia (est £140)
      </Text>
      <Heading size='md'>
        Documents from various Indonesian administration areas (RT &
        RW & Kelurahan & Kecematan)
      </Heading>
      <Text>
        First, a bit of explaining what those words above mean:
        Indonesia is divided into different regions, in these regions
        they’re third-level administrative subdivisions below
        regencies or cities known as Kacematans. Kelurahan are a
        subdivison below kacematans, so they’re fourth-level
        subdivision which an translate to “villages” in English.
        Finally, below this we have the RT (rukun tetangga which can
        translate to “neighbourhood unit”) and RW (Rukan Warga which
        can translate to “community unit”). These are the division
        below the Kelurahan. An RW is made up of many RT, so that is
        the most local area to an Indonesian resident. I hope this at
        least slightly makes sense, to me it’s still confusing,
        Indonesia is just such a huge country it can take a lot to get
        our heads around how it’s divided up and organised if you
        haven’t lived there.
      </Text>
      <Text>
        You’ll need to grab a handful of documents from your local
        RT/RW and attach some of the documents mentioned above in the
        documents required section. Once you have the translated
        documents, visit the local Kelurahan and provide them with the
        relevant documents. After finishing with the kelurahan
        documents, go to the kacamatan to request the documents for
        the KUA.
      </Text>
      <Heading size='md'>Immunisation</Heading>
      <Text>
        After we visited the KUA with copies of the documents from the
        various regency offices, the Indonesian spouse had to get a
        tetanus immunisation before we could marry.
      </Text>
      <Heading>Congratulations</Heading>
      <Text>
        Bring all the documents to the KUA and that’s that! You’re
        ready to get married
      </Text>
      <Text>
        The start of your new life as husband and wife, suami and
        istri, can now begin. Enjoy the precious time with family and
        friends, savour the moment, but most importantly look after
        each other and enjoy the rest of your lives together ❤️
      </Text>
      <Text>We wish you all the best in your future</Text>
    </BlogLayout>
  );
}
