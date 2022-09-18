/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { Heading, Text } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import StyledUL from '../../components/StyledUL';
import SimpleLink from '../../components/SimpleLink';
import { useTranslation } from 'react-i18next';

const transPath = 'blogs.obtainingAFamilyVisa.';

export default function HowToPassIelts() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title='Double A Team | UK Family Visa Guide'
      description={t(`${transPath}blogHeading`)}
      postUrl='obtaining-a-family-visa'
    >
      <Text>{t(`${transPath}intro`)}</Text>
      <Heading size='md'>{t(`${transPath}expensesHeader`)}</Heading>
      <Text>{t(`${transPath}expensesP`)}</Text>
      <Heading size='md'>{t(`${transPath}visaConHeader`)}</Heading>
      <Text>
        {t(`${transPath}iVarsIntro`)}{' '}
        <SimpleLink link='https://www.i-vars.com/'>I-vars</SimpleLink>.{' '}
        {t(`${transPath}iVarsDesc`)}
      </Text>
      <Heading size='md'>{t(`${transPath}theApplicationHeading`)}</Heading>
      <Text>
        {t(`${transPath}applicationIntro`)}{' '}
        <SimpleLink link='https://www.gov.uk/uk-family-visa/partner-spouse'>
          {t(`${transPath}govWebLink`)}
        </SimpleLink>{' '}
        {t(`${transPath}govExplanation`)}
      </Text>
      <StyledUL
        items={[
          { text: t(`${transPath}govb1`) },
          {
            text: t(`${transPath}gobb2`),
            isNested: true,
          },
          {
            text: t(`${transPath}govb3`),
          },
          {
            text: t(`${transPath}govb4`),
            isNested: true,
          },
          {
            text: t(`${transPath}govb5`),
            isNested: true,
          },
        ]}
      />
      <Text>{t(`${transPath}postGovP1`)}</Text>
      <Text>{t(`${transPath}postGovP2`)}</Text>
      <Heading size='md'>{t(`${transPath}supportingDocsHeader`)}</Heading>
      <Text>{t(`${transPath}supportingDocsIntro`)}</Text>
      <StyledUL
        items={[
          {
            text: t(`${transPath}supportingDocsB1`),
          },
          { text: t(`${transPath}supportingDocsB2`), isNested: true },
          {
            text: t(`${transPath}supportingDocsB3`),
            isNested: true,
          },
          {
            text: t(`${transPath}supportingDocsB4`),
            isNested: true,
          },
          { text: t(`${transPath}supportingDocsB5`) },
          { text: t(`${transPath}supportingDocsB6`) },
          {
            text: t(`${transPath}supportingDocsB7`),
          },
          {
            text: t(`${transPath}supportingDocsB8`),
          },
          {
            text: t(`${transPath}supportingDocsB9`),
          },
          {
            text: t(`${transPath}supportingDocsB10`),
          },
          {
            text: t(`${transPath}supportingDocsB11`),
          },
        ]}
      />
      <Text>{t(`${transPath}docDetails1`)}</Text>
      <Text>{t(`${transPath}docDetails2`)}</Text>
      <Heading size='sm'>{t(`${transPath}conditionalDocsHeader`)}</Heading>
      <Text>{t(`${transPath}conditionalDocsP`)}</Text>
      <Heading size='xs'>{t(`${transPath}tbTestHeader`)}</Heading>
      <Text>
        {t(`${transPath}tbTestP1`)}{' '}
        <SimpleLink link='https://www.gov.uk/tb-test-visa/countries-where-you-need-a-tb-test-to-enter-the-uk'>
          {t(`${transPath}tbTestLink`)}
        </SimpleLink>
      </Text>
      <Heading size='xs'>{t(`${transPath}englishTestHeader`)}</Heading>
      <Text>{t(`${transPath}englishTestIntro`)}</Text>
      <StyledUL
        items={[
          { text: t(`${transPath}engTestB1`) },
          {
            text: t(`${transPath}engTestB2`),
          },
          {
            text: t(`${transPath}engTestB3`),
          },
          { text: t(`${transPath}engTestB4`) },
          {
            text: t(`${transPath}engTestB5`),
          },
        ]}
      />
      <Text>{t(`${transPath}engTestP1`)}</Text>
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
          { text: 'USA' },
        ]}
      />
      <Text>
        {t(`${transPath}engTestP2`)}{' '}
        <Link href='/posts/how-to-pass-ielts'>
          {t(`${transPath}engTestLink1`)}
        </Link>
      </Text>
      <Text>
        {t(`${transPath}engTestP3`)}{' '}
        <SimpleLink link='https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'>
          {t(`${transPath}engTestLink2`)}
        </SimpleLink>
      </Text>
      <Heading size='sm'>{t(`${transPath}generalDocsHeader`)}</Heading>
      <Text></Text>
      <StyledUL
        items={[
          { text: t(`${transPath}generalDocsB1`) },
          { text: t(`${transPath}generalDocsB2`) },
          {
            text: t(`${transPath}generalDocsB3`),
          },
          {
            text: t(`${transPath}generalDocsB4`),
          },
          {
            text: t(`${transPath}generalDocsB5`),
          },
          {
            text: t(`${transPath}generalDocsB6`),
          },
        ]}
      />

      <Heading size='sm'>
        {t(`${transPath}financialAndAccomodationHeader`)}
      </Heading>
      <Text>{t(`${transPath}finAccomP1`)}</Text>
      <Text>{t(`${transPath}finAccomP2`)}</Text>
      <StyledUL
        items={[
          {
            text: t(`${transPath}finAccomB1`),
          },
          { text: t(`${transPath}finAccomB2`) },
          { text: t(`${transPath}finAccomB3`) },
          {
            text: t(`${transPath}finAccomB4`),
          },
        ]}
      />
      <Text>
        {t(`${transPath}concP1`)}{' '}
        <SimpleLink link='https://www.gov.uk/guidance/visa-decision-waiting-times-applications-outside-the-uk?msclkid=81bf9ef8d12311ec9cea32779cb8b0d4#join-family-in-the-uk'>
          {t(`${transPath}concLink1`)}
        </SimpleLink>
      </Text>
      <Text>{t(`${transPath}concP2`)}</Text>
      <Heading size='md'>{t(`${transPath}visaDurationHeading`)}</Heading>
      <Text>{t(`${transPath}visaDurationIntro`)}</Text>
      <Text>{t(`${transPath}finalWords`)} </Text>
    </BlogLayout>
  );
}
