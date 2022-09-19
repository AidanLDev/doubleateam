/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Text, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import BlogLayout from "../../components/blogLayout/BlogLayout";
import StyledUL from "../../components/StyledUL";
import SimpleLink from "../../components/SimpleLink";

const tp = "blogs.marriageRequirements.";

export default function MarriageRequirements() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title="Double A Team | Marriage Requirements"
      description={t(`${tp}blogTitle`)}
      postUrl="marriage-requirements"
    >
      <Text>{t(`${tp}intro`)}</Text>
      <Text>
        {t(`${tp}introP1`)}{" "}
        <SimpleLink link="https://www.gov.uk/marriage-abroad">
          {t(`${tp}introLink1`)}
        </SimpleLink>
      </Text>
      <Heading size="md">{t(`${tp}fSpouseDocs`)}</Heading>
      <Text>{t(`${tp}fSpouseIntro`)}</Text>
      <StyledUL
        items={[
          {
            text: t(`${tp}fB1`),
          },
          {
            text: t(`${tp}fB2`),
            isNested: true,
          },
          {
            text: t(`${tp}fB3`),
          },
          {
            text: t(`${tp}fB4`),
          },
        ]}
      />
      <Text>
        {t(`${tp}shahadaInt`)}{" "}
        <SimpleLink link="https://www.iccuk.org/page2.php?section=contact&page=contact">
          {t(`${tp}shahadaLink`)}
        </SimpleLink>{" "}
        {t(`${tp}shahadaP1`)}
      </Text>
      <Text>{t(`${tp}optionalDocs`)}</Text>
      <StyledUL items={[{ text: t(`${tp}odB1`) }, { text: t(`${tp}odB2`) }]} />
      <Heading size="md">{t(`${tp}localIdDocs`)} </Heading>
      <StyledUL
        items={[
          { text: t(`${tp}lIB1`) },
          { text: t(`${tp}lIB2`) },
          { text: t(`${tp}lIB3`) },
        ]}
      />
      <Text>{t(`${tp}optional2`)}</Text>
      <StyledUL
        items={[
          { text: t(`${tp}o2B1`) },
          { text: t(`${tp}o2B2`) },
          { text: t(`${tp}o2B3`) },
        ]}
      />
      <Heading size="md">{t(`${tp}photos`)}</Heading>
      <Text>{t(`${tp}photosIntro`)}</Text>
      <Text>
        {t(`${tp}transIntro`)} (WA: +62 818-588-036){" "}
        <SimpleLink link="https://www.gov.uk/government/publications/indonesia-list-of-lawyers/list-of-translatorsinterpreters-in-indonesia">
          {t(`${tp}transLink`)}
        </SimpleLink>
      </Text>
      <Text>{t(`${tp}transp1`)}</Text>
      <Text>{t(`${tp}transp2`)}</Text>
      <Heading size="md">{t(`${tp}prenup`)}</Heading>
      <Text>{t(`${tp}prenupIntro`)}</Text>
      <Text>
        {t(`${tp}prenupP1`)}{" "}
        <SimpleLink link="https://www.gov.uk/government/publications/indonesia-list-of-lawyers/list-of-notaries-public-in-indonesia">
          {t(`${tp}prenupLink`)}
        </SimpleLink>{" "}
        {t(`${tp}prenupP2`)}
      </Text>
      <Heading size="md">{t(`${tp}adminAreas`)}</Heading>
      <Text>{t(`${tp}adminAreasP1`)}</Text>
      <Text>{t(`${tp}adminAreasP2`)}</Text>
      <Heading size="md">{t(`${tp}immune`)}</Heading>
      <Text>{t(`${tp}immuneIntro`)}</Text>
      <Heading>{t(`${tp}congrats`)}</Heading>
      <Text>{t(`${tp}congratsP`)}</Text>
      <Text>{t(`${tp}outro1`)} ❤️</Text>
      <Text>{t(`${tp}outro2`)}</Text>
    </BlogLayout>
  );
}
