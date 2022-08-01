/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Text,
  Heading,
  Image,
  Flex,
  Box,
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Divider
} from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';
import SimpleLink from '../../components/SimpleLink';
import StyledUL from '../../components/StyledUL';
import StyledDivider from '../../components/StyledDivider';

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
        The IELTs A1 exam is almost like a short interview, there will
        be you and one other test taker in the room with the examiner.
        The examiner will ask you and your partner a serise of
        questions which you must respond to in English, there will
        also be sections in the test where you will need to
        communicate with your partner. Luckily the test is broken up
        into 4 sections, and each section is clearly defined so you
        can go into the exam confident, knowing exactly what to
        expect.
      </Text>
      <Text>
        Here is the structure of the exam, it&apos;s broken up into 4
        phases 1A, 1B, 2A and 2B:
        <Flex justify='center'>
          <Image
            alt='IELTs A1 exam structure'
            src='/images/IELTSA1TestStructure.jpeg'
          />
        </Flex>
      </Text>
      <Text>
        Just to make that crystal clear, the sections are as follows:
        <StyledUL
          items={[
            {
              text: <b>Phase 1A</b>
            },
            { text: 'Answering these 3 questions:' },
            { text: "What's your name?", isNested: true },
            {
              text: 'Can you spell it for me? (You will be expected to spell out your full name, letter by letter)',
              isNested: true
            },
            { text: 'Where do you come from?', isNested: true },
            {
              text: 'Then you will answer some basic questions on small talk topics, such as food, hobbies and interests etc.'
            },
            { text: <b>Phase 1B</b> },
            {
              text: 'You and your partner will be given a topic each, write down questions based on this topic and when instructed, you will ask your partner the questions you prepared and visa versa.'
            },
            { text: <b>Phase 2A</b> },
            {
              text: 'The examiner will play a short recording, you will be given some paper with a few pictures on it, answer the question by ticking one of the pictures provided'
            },
            { text: <b>Phase 2B</b> },
            {
              text: 'The examiner will give you both a topic that you need to have a conversation about.'
            }
          ]}
        />
        <StyledDivider />I know that was a lot about the structure of
        the test, but knowing this well is so valuable to
        understanding how to pass the test.
      </Text>
      <Heading size='md'>How we prepared for the test</Heading>
      <Text>
        There&apos;s a lot of great free resources outthere that can
        make you as prepared as you&apos;ll ever be to pass the IELTs
        test. To get a better understanding of what we&apos;ve
        discussed and to see what your strengths/weaknesses are, you
        can go through a{' '}
        <SimpleLink link='https://www.ielts.org/about-ielts/ielts-for-migration/united-kingdom/ielts-life-skills'>
          sample test on ielts.org
        </SimpleLink>
        . There are two samples on this website, paper A and B, both
        have their own audio tracks which should be played to answer
        the phase 2A questions.
      </Text>
      <Text>
        Seeing where your weak points are by going through a practice
        test is really valuable, so you can focus on the areas you
        need to improve in. If it&apos;s the speaking phases of the
        test, phase 1A, 2A and 2B, going through{' '}
        <SimpleLink link='https://www.ieltsdeal.com/ielts-life-skills-level-a1-speaking-basic-questions-with-answers/'>
          this list of practice questions
        </SimpleLink>{' '}
        and understanding the example answers given should help. On
        the other hand if it&apos;s the listening segmant, phase 2a,
        that you struggle with, there&apos;s a bunch of{' '}
        <SimpleLink link='https://www.ielts.org/for-test-takers/sample-test-questions'>
          practise listening questions here on the IELTs website.
        </SimpleLink>
      </Text>
      <Text>
        A really valuable learning resource is this YouTube playlist,
        go through some of the{' '}
        <SimpleLink link='https://www.youtube.com/watch?v=iXm_rcv0GJA&list=PLOdYbfVGcVAaQcbaVFaE_S2ylP9Fib6Me&index=5'>
          IELTS Life Skills A1 Speaking and Listening videos
        </SimpleLink>{' '}
        and pay attention to the answers given. Just going through a
        couple of these to really drill the format of the test into
        your mind will be super helpful as you can see live examples
        of questions and answers to the same sort of questions you'll
        be asked on the day of your exam.
      </Text>
      {/* List of a1 speaking basic questions with answers:  */}
      <Heading size='lg'>
        Useful information for booking a test
      </Heading>
      <Text>
        Now we have gone through some tips that will help you prepare
        for your test, when it comes to booking the IELTs A1 test,
        there are a few things you should keep in mind. We will
        compare the different test providers and make it clear which
        ones are approved by the UK government so you can have peace
        of mind that the certificate you&apos;re getting is going to
        be the right one.
      </Text>
      <Heading size='md'>Test Providers</Heading>
      <Text>
        To get a UK family visa, you&apos;ll need to prove your
        English speaking skills by passing a secure English language
        test (SELT). The IELTs test is one of the popular ones as they
        have a few different providers.
        <SimpleLink link='https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'>
          A list of approved English test providers from the UK Gov
          website
        </SimpleLink>
        To potentially save you a click and some reading, at the time
        of writing, 2022/07/21, the approved test providers are:
        <Heading size='md'>If you are in the UK</Heading>
        <StyledUL
          items={[
            {
              text: 'Trinity College London'
            },
            {
              text: 'IELTS SELT Consortium'
            },
            {
              text: 'LanguageCert'
            },
            {
              text: 'Pearson'
            }
          ]}
        />
        <Heading size='md'>If you are outside the UK</Heading>
        <StyledUL
          items={[
            {
              text: 'PSI Services (UK) Ltd'
            },
            {
              text: 'IELTS SELT Consortium'
            },
            {
              text: 'LanguageCert'
            },
            {
              text: 'Pearson'
            }
          ]}
        />
      </Text>
      <Text>
        Some information regarding a few of the different test
        providers that they have in Indonesia:
        <TableContainer>
          <Table variant={'unstyled'}>
            <TableCaption>Test Provider Comparison</TableCaption>
            <Thead>
              <Tr>
                <Th>Test Format</Th>
                <Th>Provider</Th>
                <Th>Min Score Required</Th>
                <Th>Useful Links</Th>
                <Th>Price</Th>
                <Th>Result Time</Th>
                <Th>Address</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>IELTS Life Skills – A1 Speaking & Listening</Td>
                <Td>IELTS SELT Consortium</Td>
                <Td>Pass</Td>
                <Td>
                  {' '}
                  <Box>
                    <SimpleLink link='https://www.ielts.org/about-ielts/ielts-for-migration/united-kingdom/ielts-life-skills'>
                      Providers Website
                    </SimpleLink>{' '}
                    <SimpleLink link='https://www.ielts.org/for-test-takers/book-a-test'>
                      Book a test here
                    </SimpleLink>
                  </Box>
                </Td>
                <Td>3.4m IDR (est £189)</Td>
                <Td>Within one week</Td>
              </Tr>
              <Tr>
                <Td>
                  LanguageCert International ESOL SELT A1 (Speaking &
                  Listening)
                </Td>
                <Td>LanguageCert</Td>
                <Td>60/100</Td>
                <Td>
                  <Box>
                    <SimpleLink link='https://www.languagecert.org/en/language-exams/english/languagecert-selt/a1-sl-2730'>
                      Providers Website
                    </SimpleLink>{' '}
                    <SimpleLink link='https://selt.languagecert.org/?exam=A104EE3F80A249B9A74B3C1862FE3CE9&country=50EB9A019EAB4678AE83D2DA8A4EC680'>
                      Book a test here
                    </SimpleLink>
                  </Box>
                </Td>
                <Td>165 USD (est 2.37m IDR)</Td>
                <Td>5 working days</Td>
                <Td>
                  The Indonesia Int`L Educ.Foundation, Menara Imperium
                  28Th Floor Suite B, Jakarta, 12980, IDN
                </Td>
              </Tr>
              <Tr>
                <Td>PTE Home A1</Td>
                <Td>Pearson</Td>
                <Td>Pass</Td>
                <Td>
                  <Box>
                    <SimpleLink link='https://www.pearsonpte.com/selt-tests/pte-academic-ukvi'>
                      Providers Website
                    </SimpleLink>{' '}
                    <SimpleLink link='https://home.pearsonvue.com/Test-takers.aspx'>
                      Book a test here
                    </SimpleLink>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td>Skills for English UKVI A1 (2 component)</Td>
                <Td>PSI Service (UK) Ltd</Td>
                <Td>Pass</Td>
                <Td>
                  <Box>
                    <SimpleLink link='https://www.psionline.com/en-gb/certification/skills-for-english/'>
                      Providers Website
                    </SimpleLink>
                  </Box>
                </Td>
                <Td>210 USD (est 3m IDR)</Td>
                <Td>14 Days</Td>
                <Td>
                  Jakarta - PT. International Test Center (SfE) Plaza
                  Sentral 17th Floor, Jakarta, Indonesia
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Text>
      <Heading size='md'>Finding a test centre</Heading>
      <Text>
        Now you should have a good idea of which test provider you
        want to go with, finding an official test centre is luckily
        quite easy as the UK gov has{' '}
        <SimpleLink link='https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt#approved-test-centres'>
          a list of approved centres on their website
        </SimpleLink>
        .
        <Text>
          Now you know where, it&apos;s now just up to you to book the
          test when you feel comfortable and get that certificate!
          (You can do it! 🤞)
        </Text>
      </Text>
    </BlogLayout>
  );
}
