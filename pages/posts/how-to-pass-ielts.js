import React from 'react';
import { Text, Heading, Image, Flex, Box } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import SimpleLink from '../../components/SimpleLink';
import StyledUL from '../../components/StyledUL';

// const rows = [
//     'IELTS Life Skills – A1 Speaking & Listening',
//     'IELTS SELT Consortium',
//     'Pass',
//     <Box>
//       <SimpleLink link='https://www.ielts.org/about-ielts/ielts-for-migration/united-kingdom/ielts-life-skills'>
//         Providers website
//       </SimpleLink>{' '}
//       <SimpleLink link='https://www.ielts.org/for-test-takers/book-a-test'>
//         Book a test here
//       </SimpleLink>
//     </Box>,
//     '3.4m IDR (est £189)',
//     'Within one week'
// ];

//  https://chakra-ui.com/docs/components/table/usage

{
  /* Table data
        
        IELTS Life Skills – A1 Speaking & Listening
        Test Provider - IELTS SELT Consortium
        Minimum score required – Pass
        Providers website https://www.ielts.org/about-ielts/ielts-for-migration/united-kingdom/ielts-life-skills
        Book a test here https://www.ielts.org/for-test-takers/book-a-test
        Price – 3.4m IDR
        Results time – within one week

        LanguageCert International ESOL SELT A1 (Speaking & Listening)
        Test Provider – LanguageCert
        Minimum score required – 60/100
        Providers Website https://www.languagecert.org/en/language-exams/english/languagecert-selt/a1-sl-2730
        Book a test here https://selt.languagecert.org/?exam=A104EE3F80A249B9A74B3C1862FE3CE9&country=50EB9A019EAB4678AE83D2DA8A4EC680
        Price – 165 USD (est 2.37m IDR)
        Results time – 5 working days
        Address - The Indonesia Int`L Educ.Foundation, Menara Imperium 28Th Floor Suite B, Jakarta, 12980, IDN

        PTE Home A1
        Test provider – Pearson
        Minimum score required – Pass
        Providers Website https://www.pearsonpte.com/selt-tests/pte-academic-ukvi
        Book a test here https://findseats.pearsonvue.com/testtaker/registration/CombinedTestCenterSearchPage/PEARSONLANGUAGE?conversationId=191788
        Price – N/A (Couldn’t find on site)
        Note – Low availability, possibly due to pandemic
        Results time -

        Skills for English UKVI A1 (2 component)
        Test Provider – PSI Service (UK) Ltd
        Minimum score required – Pass
        Providers Website https://www.psionline.com/en-gb/certification/skills-for-english/
        Price – 210 USD (est 3m IDR)
        Results time - >14 Days
        Address - Jakarta - PT. International Test Center (SfE) Plaza Sentral 17th Floor, Jakarta, Indonesia
      */
}

export default function HowToPassIelts() {
  const blogTitle =
    'How to get an IELTS A1 Certification for UKVI Family Visa Applications';
  return (
    <BlogLayout
      title='Double A Team | How to pass IELTs'
      description={blogTitle}
      postUrl='how-to-pass-ielts'
    >
      <BlogTitle text={blogTitle} />
      <Text>
        The IELTs A1 exam is almost like a short interview, there will be you
        and one other test taker in the room with the examiner. The examiner
        will ask you and your partner a serise of questions which you must reply
        to in English, there will also be sections in the test where you will
        need to communicate with your partner. Luckily the test is broken up
        into 4 sections, and each section is clearly defined so you can go into
        the exam confident, knowing exactly what to expect.
      </Text>
      <Text>
        Here is the structure of the exam, it&apos;s broken up into 4 phases 1A,
        1B, 2A and 2B:
        <Flex justify='center'>
          <Image
            alt='IELTs A1 exam structure'
            src='/images/IELTSA1TestStructure.jpeg'
          />
        </Flex>
      </Text>
      <Heading size='md'>Test Providers</Heading>
      <Text>
        To get a UK family visa, you&apos;ll need to prove your English speaking
        skills by passing a secure English language test (SELT). The IELTs test
        is one of the popular ones as they have a few different providers.
        <SimpleLink link='https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'>
          A list of approved English test providers from the UK Gov website
        </SimpleLink>
        To potentially save you a click and some reading, at the time of
        writting, 2022/07/21, the approved test providers are:
        <Heading size='md'>If you are in the UK</Heading>
        <StyledUL
          items={[
            {
              text: 'Trinity College London',
            },
            {
              text: 'IELTS SELT Consortium',
            },
            {
              text: 'LanguageCert',
            },
            {
              text: 'Pearson',
            },
          ]}
        />
        <Heading size='md'>If you are outside the UK</Heading>
        <StyledUL
          items={[
            {
              text: 'PSI Services (UK) Ltd',
            },
            {
              text: 'IELTS SELT Consortium',
            },
            {
              text: 'LanguageCert',
            },
            {
              text: 'Pearson',
            },
          ]}
        />
      </Text>
      <Text>
        Some information regarding a few of the different test providers that
        they have in Indonesia:
        {/* TODO Add table here */}
      </Text>
      <Heading size='md'>Finding a test centre</Heading>
      <Text>
        Now you should have a good idea of which test provider you want to go
        with, finding an official test centre is luckily quite easy as the UK
        gov have a list of approved centres.
        <SimpleLink link='https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt#approved-test-centres'>
          A list of approved test centres can be found here on the gov website.
        </SimpleLink>{' '}
        Now you know where, it&apos;s now just up to you to book the test when
        you feel comfortabke and get that certificate! (You can do it!)
      </Text>
    </BlogLayout>
  );
}
