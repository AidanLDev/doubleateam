import React from 'react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import { useTranslation } from 'react-i18next';
import { Text, Heading } from '@chakra-ui/react';
import StyledUL from '../../components/StyledUL';

const tp = 'blogs.lessonsInChemistry.';

export default function AWSS3() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title='Double A Team | Lessons In Chemistry'
      description={t(`${tp}title`)}
      postUrl='lessons-in-chemistry-bonnie-garmus'
    >
      <Text>{t(`${tp}intro`)}</Text>
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
