/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Heading, Text } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import StyledUL from '../../components/StyledUL';
import BlogTitle from '../../components/BlogTitle';
import SimpleLink from '../../components/SimpleLink';

export default function HowToPassIelts() {
  const blogTitle = 'Getting a UK Family Visa';
  return (
    <BlogLayout
      title='Double A Team | UK Family Visa Guide'
      description={blogTitle}
      postUrl='obtaining-a-family-visa'
    >
      <BlogTitle text={blogTitle} />
      <Text>
        The family visa, in the past there were a couple more visas such as the
        parent visa or even the child visa, however now these all fall under the
        family visa category. Just to clear up any confusion, as when we first
        started this process, we had no idea what the type of visa we actually
        wanted was. There are also fiance/fiancee visas or spouse visa types,
        with a fiance/spouse visa you can stay in the UK for up to 6 months,
        however one of the requirements is that you must get married within this
        time period. If you do so, you can then apply to extend your stay and
        obtain a family visa (this can be a viable route if you and your partner
        both want to marry in the UK, however it's going to be a pricy one as
        you'll have to pay for both the fiance/spouse visa application then the
        family visa. We'll get onto family visa pricing further down).
      </Text>
      <Heading size='md'>Expenses</Heading>
      <Text>
        For the family visa it’s quite expensive. It cost us £1,682 for the
        application and an extra £2,047 for the IHS (health insurance surge)
        payment that’s required as part of the application. We needed to get it
        right, to live our lives together and build our future.
      </Text>
      <Heading size='md'>Visa Consultant</Heading>
      <Text>
        That’s why we hired a visa consultant from{' '}
        <SimpleLink link='https://www.i-vars.com/'>I-vars</SimpleLink>. Their
        service was unbelievably helpful, they start with an initial call, going
        through the process itself and they get to understand you and your
        situation so they can know how to best help. Once signed up they send a
        pack with all the information about the visa application process and
        documents required to get the approval we all need. They will review any
        documents and give guidance throughout the process.
      </Text>
      <Heading size='md'>The application</Heading>
      <Text>
        On to the application itself then, it’s all done online{' '}
        <SimpleLink link='https://www.gov.uk/uk-family-visa/partner-spouse'>
          here through the gov website.
        </SimpleLink>{' '}
        The majority of questions are self-explanatory. A few stand out ones
        that could do with some further clarification:
      </Text>
      <StyledUL
        items={[
          { text: 'When did you first meet?' },
          {
            text: 'As we met online, we weren’t really sure whether to put the date we first talked online or the first time we physically met each other in person for the first time. We were advised to put down the date we first talked to each online',
            isNested: true,
          },
          {
            text: 'Have you been declined entry or had a visa application declined before?',
          },
          {
            text: 'Sadly, we had failed to obtain a visitor visa in the past, so we had to put down yes and explain a little about why. Hopefully our wording can help you if you find yourself in a similar situation',
            isNested: true,
          },
          {
            text: '"I applied for a visit visa to the UK so I could spend some time with my husband (at the time fiancé) Aidan. I really wanted to spend some quality time with him and meet his family, but sadly the visa application was declined The ECO was not completely satisfied I would return to Indonesia at the end of the trip"',
            isNested: true,
          },
        ]}
      />
      <Text>
        The application is pretty lengthy but most of the questions you just
        need to input data about yourself so they’re not too difficult.
      </Text>
      <Text>
        Once you’ve paid and submitted your application, you will have to book
        an appointment to provide Biometric data. Once this appointment has been
        booked you can submit your supporting evidence to the visa centre.
      </Text>
      <Heading size='md'>Supporting Documents</Heading>
      <Text>
        First off, it helps to know what you’re trying to prove with the
        documents;
      </Text>
      <StyledUL
        items={[
          { text: 'Your partner or family member is one of the following:' },
          { text: 'Has a British Citizenship', isNested: true },
          {
            text: 'Settlement or EU pre-settled status in the UK',
            isNested: true,
          },
          {
            text: 'Asylum or humanitarian protection in the UK',
            isNested: true,
          },
          { text: 'You’re over 18' },
          { text: 'You’re in a marriage that is recognised in the UK' },
          {
            text: 'You intend to continue to living together in the UK after you apply',
          },
          {
            text: 'You and your family will have an adequate place to live in the UK',
          },
          {
            text: 'You have a good knowledge of English (either a degree taught in English validated by ECCTIS or a secure test at A1 CERF minimum)',
          },
          {
            text: 'You meet the financial requires (your partners salary must be over £18,600, which your partner has to of earned for the last 6 months at least)',
          },
          {
            text: 'You’re free from TB (if you live in a country that requires this)',
          },
        ]}
      />
      <Text>
        Documents can be submitted after you've completed the online application
        and created an appointment at your biometric centre of choice. Once
        you've booked an appointment, you can start submitting documents online
        from when you book your appointment until 24 hours before your
        appointment. There are add-ons you can pay for such as document scanning
        assistance etc.
      </Text>
      <Text>
        The actual documents checklist is relatively short. However, if you want
        a really solid application (which we all do, especially considering how
        pricy it is to even apply), then you’re going to want to submit a lot of
        supporting documents to make it undoubtable that you hit the criteria
        mentioned above.
      </Text>
      <Heading size='sm'>Conditional Documents</Heading>
      <Text>
        The TB test and Secure English language test are two bits of documents
        you may not even need to gather. However if you do, you will need to
        study for the English test and book an appointment for the TB test which
        could take some time, so lets get those out the way with first.
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
        The official name for the English certificate you may need to provide is
        called the SELT (Secure English Language Test). If any of the following
        conditions are true, you <strong>DO NOT</strong> need to provide an SELT
        as part of your application.
      </Text>
      <StyledUL
        items={[
          { text: "You're applying as a child" },
          {
            text: "You're applying as an adult coming to be cared for by a relative",
          },
          {
            text: "You've been in the UK on a family visa for 5 years and you're extending it as a partner or parent",
          },
          { text: "You're over 65" },
          {
            text: 'You have a physical or mental condition that prevents you from meeting the requirement',
          },
        ]}
      />
      <Text>
        You also will not need to prove your knowledge of English if you’re a
        national of one of the following countries:
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
          { text: 'USA' },
        ]}
      />
      <Text>
        If you don't meet any of the above conditions, you will need to study
        for your test, the one we prepared for and passed (hurray) was the
        IELTs.{' '}
        <Link href='/posts/how-to-pass-ielts'>Find our study guide here</Link>
      </Text>
      <Text>
        More information about the CELT and a list of approved test centres in
        your country{' '}
        <SimpleLink link='https://www.gov.uk/guidance/prove-your-english-language-abilities-with-a-secure-english-language-test-selt'>
          can be found here on the GOV website
        </SimpleLink>
      </Text>
      <Heading size='sm'>General Documents</Heading>
      <Text>
        Here's a quickfire round regarding general documents you'll need to
        gather to support your application.
      </Text>
      <StyledUL
        items={[
          { text: 'Current and any old passports' },
          { text: 'A copy of your partners passport' },
          {
            text: 'Proof of your relationship (including your marriage certificate and evidence relating to time you have spent together as a couple)',
          },
          {
            text: 'Cover letters from you and your partner, together with supporting statements, including photographic evidence, from family, friends, employers etc. As you deem necessary to prove your relationship is genuine',
          },
          { text: 'Sponsorship declaration from your partner/family member' },
          {
            text: 'Proof that any earlier relationships for either of you were over before you married (such as an affidavit or affirmation)',
          },
        ]}
      />

      <Heading size='sm'>Financial and accommodation</Heading>
      <Text>
        The threshold to meet the UKVI financial requirements is an annual
        salary of at least £18,600. However, if you don't meet this requirement
        and have a substantial amount in savings, £60,000+, as long as you can
        prove these savings are accessible to you, you should be good.
      </Text>
      <Text>
        The documents you should gather to prove your finances and that you've
        got permission to stay wherever you said you would be staying in your
        visa application.
      </Text>
      <StyledUL
        items={[
          {
            text: 'A letter from your partners employers confirming their role, salary and tenure',
          },
          { text: 'Bank statements going back 6 months' },
          { text: 'Payslips going back 6 months' },
          {
            text: 'Evidence for your UK accommodation such as; estate agent’s details, tenancy agreements, a letter from the landlord if you’re renting',
          },
        ]}
      />
      <Text>
        Phew! That was a lot wasn't it! For personalised support on gathering
        the documents alone, we couldn't reccomed i-vars, the visa counciler,
        enough. They were super stars and answered all 1,000 questions we had
        for them. Now all that’s left is the waiting game. Usually, the visa
        will take less than 3 months to process, however with the pandemic
        there’s a bit of a back log and it could take up to 4 months or so. The{' '}
        <SimpleLink link='https://www.gov.uk/guidance/visa-decision-waiting-times-applications-outside-the-uk?msclkid=81bf9ef8d12311ec9cea32779cb8b0d4#join-family-in-the-uk'>
          current status of the waiting time can be seen here
        </SimpleLink>
      </Text>
      <Text>
        About one month after we submitted our application, we received an email
        saying the application had reached the UK Decision making centre. They
        gave a final opportunity for us to provide any supporting docs via
        VSFGlobal or by directly sending the documents to an address in
        Birmingham England. Although they charged £100 to send the docs. It’s
        reassuring to know that if you did forget to submit a particular doc at
        the time of your application, it’s not your final chance to give UKVI
        everything they need to make your application succeed.
      </Text>
      <Heading size='md'>Visa Duration</Heading>
      <Text>
        With a UK family visa, you can initially stay in the UK for 2 years and
        9 months. After this you'll be able to apply to extend your stay for
        another 2 years and 6 months. After you have lived in the UK for 5 years
        continuously on a family visa, you can apply to settle in the UK (called
        indefinite leave to remain or to put it in even simpler words, permanent
        residence).
      </Text>
      <Text>
        All the best of luck to you and we wish you and your partner a happy
        life together{' '}
      </Text>
    </BlogLayout>
  );
}
