import React from 'react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import { useTranslation } from 'react-i18next';
import { Text, Heading } from '@chakra-ui/react';
import StyledUL from '../../components/StyledUL';

const tp = 'blogs.awsEC2.';

export default function AWSS3() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title='Double A Team | AWS EC2 Basics'
      description={t(`${tp}title`)}
      postUrl='aws-ec2'
    >
      <Text>{t(`${tp}intro`)}</Text>
      <Heading>{t(`${tp}whatIsEC2Heading`)}</Heading>
      <Text>{t(`${tp}whatIsEC2`)}</Text>
      <Heading>{t(`${tp}howDoesEC2WorkHeading`)}</Heading>
      <Text>{t(`${tp}howDoesEC2WorkP1`)}</Text>
      <Text>{t(`${tp}howDoesEC2WorkP2`)}</Text>
      <Heading>{t(`${tp}keyFeaturesHeader`)}</Heading>
      <StyledUL
        items={[
          {
            text: t(`${tp}kfScalability`),
          },
          {
            text: t(`${tp}kfSecurity`),
          },
          {
            text: t(`${tp}kfAvailability`),
          },
          {
            text: t(`${tp}kfPricing`),
          },
          {
            text: t(`${tp}kfIntegration`),
          },
        ]}
      />
      <Heading>{t(`${tp}conclusionHeader`)}</Heading>
      <Text>{t(`${tp}conclusion`)}</Text>
    </BlogLayout>
  );
}
