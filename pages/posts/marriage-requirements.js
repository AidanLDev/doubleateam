import { Text, Heading } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import StyledUL from '../../components/StyledUL';

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
      Weddings in Indonesia are always religious ceremonies, this can make things a bit complicated if you’re from a different religious background from your spouse. However, with the right documents, this isn’t an issue. We’ll talk through everything we needed to get married and the steps we took to get there. 
      </Text>
      <Text>
        If you’re a British citizen this will ask you a short series of questions to point you to the embassy you need to contact to get the required wedding docs <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.gov.uk/marriage-abroad'
        >
          Getting married abroad - GOV.UK (www.gov.uk)
        </a>
      </Text>
      <Heading size="md">Foreign spouse documents</Heading>
      <Text>
      There are a few documents the foreign spouse will need for getting married in Indonesia. 
      </Text>
      <StyledUL
        items={[{
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
        Here’s where you can <a target='_blank'
          rel='noopener noreferrer'
          href="https://www.iccuk.org/page2.php?section=contact&page=contact">contact the London Mosque</a> if you are from the UK and need to get your hands on a shahada certificate
      </Text>
      <Text>
      These docs may not be necessary however some areas may have stricter KUAs and will require the following: 
      </Text>
      <StyledUL
        items={[
          {text: 'Birth Certificate'},
          {text: 'Certificate of domicile'}
        ]}
      />
      <Heading size="md">Local Indonesian spouse documents </Heading>
      <StyledUL
        items={[
          {text: 'Marriage introduction letter from RT & RW '},
          {text: 'KTP'},
          {text: 'KK'}
        ]}
      />
      <Text>
        Again these docs may not be necessary however some KUAs will ask for the following:
      </Text>
      <StyledUL
        items={[
          {text: 'Parents KTP and KK'},
          {text: 'Death certificate (if parents have passed away)'},
          {text: 'ID cards of 2 witnesses'}
        ]}
      />
      <Heading size="md">Photos</Heading>
      <Text>
      You will both need to get professional photos taken where with the following format: 
      2 x 3 with a blue background – 3 sheets 
      </Text>
      <Text>
      English documents will need to be translated by an approved sworn translator; we used the Juliani Language Centre (WA: +62 818-588-036) 
      <a>A list of translators provided by the British gov site.</a>
      </Text>
    </BlogLayout>
  );
}


/*
Foreign spouse documents 

There are a few documents the foreign spouse will need for getting married in Indonesia. 

Affidavit/affirmation to prove that all previous relationships have ended 

Email the relevant embassy in Jakarta and book an appointment to swear an Affidavit – The British embassy were very responsive and managed to get us an appointment the very week we emailed. They charge a fee of £50 

The British gov website has a 

If the Indonesian spouse is Muslim, you will need a shahada certificate. I got mine from the central London Mosque, you can contact them here. Although some KUAs (the Indonesian registry office) will allow the foreign spouse to take their shahada as part of the wedding ceremony or privately with them just before the wedding. https://www.iccuk.org/page2.php?section=contact&page=contact 

ID - Your passport, which you should have with you anyways! So, this requirement is a freebee yay. Just in-case you might want to bring along something like a driving licence too if you have one 

These docs may not be necessary however some areas may have stricter KUAs and will require the following: 

Birth Certificate 

Certificate of domicile 

 

Local Indonesian spouse documents 

Marriage introduction letter from RT & RW 

KTP 

KK 

 

These docs may not be necessary however some areas may have stricter KUAs and will require the following: 

Parents KTP and KK 

Death certificate (if parents have passed away) 

ID cards of 2 witnesses 

Photos 

You will both need to get professional photos taken where with the following format: 
2 x 3 with a blue background – 3 sheets 

Translation 

English documents will need to be translated by an approved sworn translator; we used the Juliani Language Centre (WA: +62 818-588-036) 

A list of translators provided by the British gov site can be found here: https://www.gov.uk/government/publications/indonesia-list-of-lawyers/list-of-translatorsinterpreters-in-indonesia 

You want to choose a translator who can translate documents, it’s best to ask a few for their price list as they can vary a lot. 

The only two documents I needed translating was my birth certificate and passport. Luckily for us the British embassy printed out the Affidavit in both English and Indonesian so that didn’t need translating, if you don’t have the Affidavit/ affirmation in Indonesian you’ll have to get that translated too. 

Prenup and Indonesian marriage rights for marriages with foreign spouses 

This part is a bit complicated… sadly if you do get married to a foreign spouse, the local spouse will lose their property and inheritance rights in Indonesia. This is because when married, they share the rights of their spouse, their spouse being foreign doesn’t have property rights therefore they inherit the same rights as a result… Or something along those lines, it’s quite complicated! 

To avoid this, we contacted a notary to arrange a prenup (pre-marital agreement) that would allow my lovely wife the rights she deserves. A list of English-speaking notaries who are in Indonesia can be found here: https://www.gov.uk/government/publications/indonesia-list-of-lawyers/list-of-notaries-public-in-indonesia . Although we just found a notary local to where my wife lives in Bandung and they were super helpful. 

Overall the prenup cost us 2.5 million Indonesia Rupia (est £140) 

Documents from various Indonesian administration areas (RT & RW & Kelurahan & Kecematan) 

Indonesia is divided into different regions, in these regions they’re third-level administrative subdivisions below regencies or cities known as Kacematans. Kelurahan are a subdivison below kacematans, so they’re fourth-level subdivision which an translate to “villages” in English. Finally, below this we have the RT (rukun tetangga which can translate to “neighbourhood unit”) and RW (Rukan Warga which can translate to “community unit”). These are the divison below the Kelurahan. I hope this at least slightly makes sense, to me it’s still confusing, Indonesia is just such a huge country it can take a lot to get our heads around how it’s divided up and organised if you haven’t lived there. 

You’ll need to grab a handful of documents from your local RT/RW and attach some of the documents mentioned above. 

Once you have the translated documents, visit the local Kelurahan and provide them with the relevant documents.  

After finishing with the kelurahan documents, go to the kacamatan to request the documents for the KUA. 

Immunisation 

After we visited the KUA with copies of the documents from the various regency offices, the Indonesian spouse had to get a tetanus immunisation before we could marry. 

Congratulations 

Bring all the documents to the KUA and that’s that! You’re ready to get married 

The start of your new life as husband and wife, suami and istri, can now begin. Enjoy the precious time with family and friends, savour the moment, but most importantly look after each other and enjoy the rest of your lives together 
 
We wish you all the best in your future 

*/