/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Text, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import BlogLayout from "../../components/blogLayout/BlogLayout";
import SimpleLink from "../../components/SimpleLink";
import StyledUL from "../../components/StyledUL";
import SmallBlogImg from "../../components/blogComponents/SmallBlogImg";

const tp = "blogs.netlifyFreeStaticHosting.";

export default function UsingAstro() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title="Double A Team | Hosting With Netlify"
      description={t(`${tp}blogTitle`)}
      postUrl="netlify-free-static-hosting"
    >
      <Text>{t(`${tp}intro`)}</Text>
      <Heading>{t(`${tp}preReqs`)}</Heading>
      <Text>
        {t(`${tp}preReqsIntro`)}
        <StyledUL
          items={[
            {
              text: (
                <span>
                  {t(`${tp}preReqList1p1`)}{" "}
                  <SimpleLink link="https://github.com/">GitHub</SimpleLink>
                </span>
              ),
            },
            {
              text: (
                <span>
                  {t(`${tp}preReqList1p2`)}{" "}
                  <SimpleLink link="https://www.netlify.com/">
                    Netlify
                  </SimpleLink>{" "}
                  {t(`${tp}preReqP3`)}
                </span>
              ),
            },
          ]}
        />
      </Text>
      <Heading>{t(`${tp}gettingStarted`)}</Heading>
      <Text>{t(`${tp}gettingStartedIntro`)}</Text>
      <Text>{t(`${tp}gettingStartedP2`)}</Text>
      <Text>{t(`${tp}gettingStartedP3`)}</Text>
      <Heading>{t(`${tp}updatingYourWebsite`)}</Heading>
      <Text>
        {t(`${tp}updatingP1`)} <code>GitHub</code>.
        <SmallBlogImg
          alt="Netlify Deploying message"
          src="/images/blog/deploying-netlify/netlify-deploy-message.png"
        />
        {t(`${tp}UpdatingP2`)}
        <code>master</code>...
        <SmallBlogImg
          alt="Netlify Deployed message"
          src="/images/blog/deploying-netlify/netlify-deployed-message.png"
        />
      </Text>
      <Text>
        {t(`${tp}updatingP3`)}{" "}
        <SimpleLink link="https://www.heroku.com/">Heroku</SimpleLink>
        {t(`${tp}updatingP4`)}
      </Text>
    </BlogLayout>
  );
}
