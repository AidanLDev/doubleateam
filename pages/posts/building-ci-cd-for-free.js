/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Text, Heading } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import SimpleLink from '../../components/SimpleLink';
import StyledUL from '../../components/StyledUL';
import SmallBlogImg from '../../components/blogComponents/SmallBlogImg';
import CodeSyntax from '../../components/blogComponents/CodeSyntax';
import { useTranslation } from 'react-i18next';

const imgPath = '/images/blog/ci-cd-pipeline/';

const tp = 'blogs.buildingCICDForFree.';
export default function BuildingCiCDForFree() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title='Double A Team | Free CI/CD'
      description={t(`${tp}blogTitle`)}
      postUrl='building-ci-cd-for-free'
    >
      <Text>{t(`${tp}intro`)}</Text>
      <Text>
        {t(`${tp}uses`)}
        <StyledUL
          items={[
            {
              text: 'AWS S3',
            },
            { text: 'GitHub' },
            { text: 'CircleCI' },
          ]}
        />
      </Text>
      <Heading>{t(`${tp}s3Static`)}</Heading>
      <Text>
        {t(`${tp}linkIntro`)}{' '}
        <SimpleLink link='https://eu-west-2.console.aws.amazon.com/console/home?region=eu-west-2'>
          AWS Console.
        </SimpleLink>{' '}
        {t(`${tp}s3Desc`)}
        <SmallBlogImg
          alt='Creating an S3 bucket'
          src={`${imgPath}create-s3-bucket.webp`}
        />
        {t(`${tp}s3RegionDesc`)}
        <SmallBlogImg
          alt='Allowing public access'
          src={`${imgPath}creating-bucket2.png`}
        />
      </Text>
      <Heading>{t(`${tp}iamHead`)}</Heading>
      <Text>{t(`${tp}iamIntro`)}</Text>
      <Text>
        {t(`${tp}iamP1`)}
        <SmallBlogImg alt='IAM user name' src={`${imgPath}iam-user-name.png`} />
        {t(`${tp}iamP2`)}
        <SmallBlogImg
          alt='IAM user permissions'
          src={`${imgPath}iam-permissions.png`}
        />
        {t(`${tp}iamP3`)}{' '}
        <SimpleLink link='https://www.lastpass.com/'>LastPass</SimpleLink>
        {t(`${tp}iamP4`)}
      </Text>
      <Heading>{t(`${tp}gh`)}</Heading>
      <Text>
        {t(`${tp}ghIntro`)}{' '}
        <SimpleLink link='https://github.com/'>GitHub</SimpleLink>
        {t(`${tp}ghOutro`)}
      </Text>
      <Heading>{t(`${tp}circleCI`)}</Heading>
      <Text>
        <SimpleLink link='https://circleci.com/'>CircleCI</SimpleLink>{' '}
        {t(`${tp}circleCIIntro`)}
        <SmallBlogImg
          alt='CircleCI set up 1'
          src={`${imgPath}circleci-setup-yml-file.png`}
        />
        {t(`${tp}circleCIP1`)}
      </Text>
      <Heading>{t(`${tp}circleCIConfig`)}</Heading>
      <Text>{t(`${tp}codeHeading`)}</Text>
      <Text>
        <CodeSyntax language='yaml'>
          {`
          version: 2.1
          orbs:
            aws-s3: circleci/aws-s3@1.0.6
          description: |
            copy files to S3 bucket and then create an Cloudfront invalidation
            on the distribution.
          
          jobs:
            build:
              docker:
                - image: 'circleci/python:latest'
          
              steps:
                - checkout
                - aws-s3/sync:
                    from: out
                    to: 's3://example.com'
                    arguments: |
                      --acl public-read \
  
                      --cache-control "max-age=86400" \
  
                      --exclude ".git/*" \
  
                      --exclude ".gitignore" \
  
                      --exclude ".circleci/*" \
  
                    overwrite: true
          
          `}
        </CodeSyntax>
      </Text>
      <Text>
        {t(`${tp}swap`)}
        <StyledUL
          items={[
            {
              text: `${t(
                `${tp}toNote1`
              )}'s3://example.com'to be s3://yourbucketname`,
            },
            {
              text: t(`${tp}toNote2`),
            },
          ]}
        />
      </Text>
      <Text>{t(`${tp}debugging`)}</Text>
      <Text>
        {t(`${tp}debugging1`)} <span style={{ color: 'green' }}>Green</span>.
      </Text>
      <Heading>{t(`${tp}debuggingHeader`)}</Heading>
      <Text>{t(`${tp}debuggingIntro`)}</Text>
      <Text>
        <code>
          usage: aws s3 sync {'<LocalPath>'} {'<S3Uri>'} or {'<S3Uri>'}{' '}
          {'<LocalPath>'} or {'<S3Uri>'} {'<S3Uri>'}
          Error: Invalid argument type
        </code>{' '}
        {t(`${tp}iHadTo`)}
        <code>to: 's3://your-bucket'</code> {t(`${tp}toMatch`)}
      </Text>
      <Text>
        <code>
          The user-provided path ./out/* does not exist. Exited with code exit
          status 255
        </code>
        {t(`${tp}iHadTo2`)}
        <code>.gitignore</code> file.
        {t(`${tp}iHadTo2p2`)} <code>out</code> iHadTo2p3"./folderName/*"
      </Text>
      <Text>
        {t(`${tp}quickAside`)}"[ci skip]". {t(`${tp}forExample`)}{' '}
        <code>$ git commit -m "{t(`${tp}commitMsg`)}[ci skip]"</code>
      </Text>
      <Text>
        {t(`${tp}conclusion`)}{' '}
        <SimpleLink link='/contact-us'>{t(`${tp}getInContactLink`)}</SimpleLink>{' '}
        {t(`${tp}iWillHelp`)}
      </Text>
    </BlogLayout>
  );
}
