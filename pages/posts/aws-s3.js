import React from 'react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import { useTranslation } from 'react-i18next';
import { Text, Heading } from '@chakra-ui/react';
import StyledUL from '../../components/StyledUL';

const tp = 'blogs.awsS3.';

export default function AWSS3() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title='Double A Team | AWS S3 Basics'
      description={t(`${tp}title`)}
      postUrl='aws-s3'
    >
      <Heading>{t(`${tp}introHeader`)}</Heading>
      <Text>{t(`${tp}intro`)}</Text>
      <Heading>{t(`${tp}whatIsAWSHeader`)}</Heading>
      <Text>{t(`${tp}whatIsAWSP`)}</Text>
      <Heading>{t(`${tp}keyFeaturesHeader`)}</Heading>
      <StyledUL
        items={[
          {
            text: t(`${tp}keyFeatureList1`),
          },
          {
            text: t(`${tp}keyFeatureList2`),
          },
          {
            text: t(`${tp}keyFeatureList3`),
          },
          {
            text: t(`${tp}keyFeatureList4`),
          },
          {
            text: t(`${tp}keyFeatureList5`),
          },
        ]}
      />
      <Heading>{t(`${tp}howToUseS3`)}</Heading>
      <Text>{t(`${tp}howToUseS3P`)}</Text>
      <Heading>{t(`${tp}conclusionHeader`)}</Heading>
      <Text>{t(`${tp}conclusion`)}</Text>
    </BlogLayout>
  );
}
