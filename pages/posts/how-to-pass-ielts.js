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
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SimpleLink from '../../components/SimpleLink';
import StyledUL from '../../components/StyledUL';
import StyledDivider from '../../components/StyledDivider';
import BlockQuote from '../../components/blogComponents/BlockQuote';

const transPath = 'blogs.howToPassIelts.';

export default function HowToPassIelts() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title='Double A Team | How to pass IELTS'
      description={t(`${transPath}heading`)}
      postUrl='how-to-pass-ielts'
    >
      <Text>{t(`${transPath}intro`)}</Text>
      <Text>
        {t(`${transPath}structureIntro`)}
        <Flex justify='center'>
          <Image
            alt='IELTS A1 exam structure'
            src='/images/IELTSA1TestStructure.webp'
          />
        </Flex>
      </Text>
      <Text>
        {t(`${transPath}breakdownIntro`)}
        <Text>
          <b>{t(`${transPath}p1a`)}</b>
        </Text>
        <StyledUL
          items={[
            { text: t(`${transPath}b1`) },
            { text: t(`${transPath}b2`), isNested: true },
            {
              text: t(`${transPath}b3`),
              isNested: true,
            },
            { text: t(`${transPath}b4`), isNested: true },
            {
              text: t(`${transPath}b5`),
            },
          ]}
        />
        <b>{t(`${transPath}p1b`)}</b>
        <StyledUL
          items={[
            {
              text: t(`${transPath}b6`),
            },
          ]}
        />
        <b>{t(`${transPath}p2a`)}</b>
        <StyledUL
          items={[
            {
              text: t(`${transPath}b7`),
            },
          ]}
        />
        <b>{t(`${transPath}p2b`)}</b>
        <StyledUL
          items={[
            {
              text: t(`${transPath}b8`),
            },
          ]}
        />
        <StyledDivider />
        {t(`${transPath}structureConclusion`)}
      </Text>
      <BlockQuote
        quote={t(`${transPath}quote`)}
        by={t(`${transPath}quoteBy`)}
      ></BlockQuote>
      <Heading size='md'>{t(`${transPath}testPrepHeading`)}</Heading>
      <Text>
        {t(`${transPath}tp1`)}
        <SimpleLink link='https://www.ielts.org/about-ielts/ielts-for-migration/united-kingdom/ielts-life-skills'>
          {t(`${transPath}tpLink1`)}
        </SimpleLink>{' '}
        {t(`${transPath}tp2`)}
      </Text>
      <Text>
        {t(`${transPath}tp3`)}
        <SimpleLink link='https://www.ieltsdeal.com/ielts-life-skills-level-a1-speaking-basic-questions-with-answers/'>
          {t(`${transPath}tpLink2`)}
        </SimpleLink>{' '}
        {t(`${transPath}tp4`)}{' '}
        <SimpleLink link='https://www.ielts.org/for-test-takers/sample-test-questions'>
          {t(`${transPath}tpLink3`)}
        </SimpleLink>
      </Text>
      <Text>
        {t(`${transPath}tp5`)}{' '}
        <SimpleLink link='https://www.youtube.com/watch?v=iXm_rcv0GJA&list=PLOdYbfVGcVAaQcbaVFaE_S2ylP9Fib6Me&index=5'>
          {t(`${transPath}tpLink4`)}
        </SimpleLink>{' '}
        {t(`${transPath}tp6`)}
      </Text>
      {/* List of a1 speaking basic questions with answers:  */}
      <Heading size='lg'>{t(`${transPath}bookingTestHeading`)}</Heading>
      <Text>{t(`${transPath}bookTestP`)}</Text>
      <Heading size='md'>{t(`${transPath}testProvidersHeading`)}</Heading>
      <Text>
        {t(`${transPath}testProvidersP`)}
        <SimpleLink link='https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'>
          {t(`${transPath}testPLink`)}
        </SimpleLink>
        {t(`${transPath}testP2`)}
        <Heading size='md'>{t(`${transPath}inUK`)}</Heading>
        <StyledUL
          items={[
            {
              text: t(`${transPath}ukb1`),
            },
            {
              text: t(`${transPath}ukb2`),
            },
            {
              text: t(`${transPath}ukb3`),
            },
            {
              text: t(`${transPath}ukb4`),
            },
          ]}
        />
        <Heading size='md'>{t(`${transPath}outsideUK`)}</Heading>
        <StyledUL
          items={[
            {
              text: t(`${transPath}ob1`),
            },
            {
              text: t(`${transPath}ob2`),
            },
            {
              text: t(`${transPath}ob3`),
            },
            {
              text: t(`${transPath}ob4`),
            },
          ]}
        />
      </Text>
      <Text>
        {t(`${transPath}tableIntro`)}
        <TableContainer>
          <Table variant={'unstyled'}>
            <TableCaption>{t(`${transPath}tableCaption`)}</TableCaption>
            <Thead>
              <Tr>
                <Th>{t(`${transPath}tHeading1`)}</Th>
                <Th>{t(`${transPath}tHeading2`)}</Th>
                <Th>{t(`${transPath}tHeading3`)}</Th>
                <Th>{t(`${transPath}tHeading4`)}</Th>
                <Th>{t(`${transPath}tHeading5`)}</Th>
                <Th>{t(`${transPath}tHeading6`)}</Th>
                <Th>{t(`${transPath}tHeading7`)}</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{t(`${transPath}r1td1`)}</Td>
                <Td>{t(`${transPath}r1td2`)}</Td>
                <Td>{t(`${transPath}r1td3`)}</Td>
                <Td>
                  {' '}
                  <Box>
                    <SimpleLink link='https://www.ielts.org/about-ielts/ielts-for-migration/united-kingdom/ielts-life-skills'>
                      {t(`${transPath}r1td4`)}
                    </SimpleLink>{' '}
                    <SimpleLink link='https://www.ielts.org/for-test-takers/book-a-test'>
                      {t(`${transPath}r1td5`)}
                    </SimpleLink>
                  </Box>
                </Td>
                <Td>{t(`${transPath}r1td6`)}</Td>
                <Td>{t(`${transPath}r1td7`)}</Td>
              </Tr>
              <Tr>
                <Td>{t(`${transPath}r2td1`)}</Td>
                <Td>{t(`${transPath}r2td2`)}</Td>
                <Td>{t(`${transPath}r2td3`)}</Td>
                <Td>
                  <Box>
                    <SimpleLink link='https://www.languagecert.org/en/language-exams/english/languagecert-selt/a1-sl-2730'>
                      {t(`${transPath}r2td4`)}
                    </SimpleLink>{' '}
                    <SimpleLink link='https://selt.languagecert.org/?exam=A104EE3F80A249B9A74B3C1862FE3CE9&country=50EB9A019EAB4678AE83D2DA8A4EC680'>
                      {t(`${transPath}r2td5`)}
                    </SimpleLink>
                  </Box>
                </Td>
                <Td>{t(`${transPath}r3td1`)}</Td>
                <Td>{t(`${transPath}r3td2`)}</Td>
                <Td>{t(`${transPath}r3td3`)}</Td>
              </Tr>
              <Tr>
                <Td>{t(`${transPath}r4td1`)}</Td>
                <Td>{t(`${transPath}r4td2`)}</Td>
                <Td>{t(`${transPath}r4td3`)}</Td>
                <Td>
                  <Box>
                    <SimpleLink link='https://www.pearsonpte.com/selt-tests/pte-academic-ukvi'>
                      {t(`${transPath}r4td4`)}
                    </SimpleLink>{' '}
                    <SimpleLink link='https://home.pearsonvue.com/Test-takers.aspx'>
                      {t(`${transPath}r4td5`)}
                    </SimpleLink>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td>{t(`${transPath}r5td1`)}</Td>
                <Td>{t(`${transPath}r5td2`)}</Td>
                <Td>{t(`${transPath}r5td3`)}</Td>
                <Td>
                  <Box>
                    <SimpleLink link='https://www.psionline.com/en-gb/certification/skills-for-english/'>
                      {t(`${transPath}r5td4`)}
                    </SimpleLink>
                  </Box>
                </Td>
                <Td>{t(`${transPath}r5td5`)}</Td>
                <Td>{t(`${transPath}r5td6`)}</Td>
                <Td>{t(`${transPath}r5td7`)}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Text>
      <Heading size='md'>{t(`${transPath}findingTestCentreHeading`)}</Heading>
      <Text>
        {t(`${transPath}findingTestCentreP1`)}
        <SimpleLink link='https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt#approved-test-centres'>
          {t(`${transPath}findingTestCentreLink`)}
        </SimpleLink>
        .<Text>{t(`${transPath}findingTestCentreP2`)}</Text>
      </Text>
    </BlogLayout>
  );
}
