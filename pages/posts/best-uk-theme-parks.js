/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import BlogLayout from "../../components/blogLayout/BlogLayout";
import ThemeparkBox from "../../components/blogComponents/ThemeparkBox";
import SimpleLink from "../../components/SimpleLink";

const imgPath = "/images/blog/theme-parks/";

const tp = "blogs.bestUkThemeParks.";

export default function HowToPassIelts() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title="Double A Team | Best UK Theme Parks"
      description={t(`${tp}blogTitle`)}
      postUrl="best-uk-theme-parks"
    >
      {" "}
      <Text> {t(`${tp}intro`)} </Text>
      <ThemeparkBox
        park="Alton Towers"
        parkDetails={t(`${tp}towersDetails`)}
        imageSrc="/images/blog/best-uk-theme-parks.webp"
      >
        {" "}
        <Text> {t(`${tp}towersP1`)} </Text> <Text>{t(`${tp}towersP2`)} </Text>{" "}
        <Text> {t(`${tp}towersP3`)} </Text>{" "}
        <Text>
          {" "}
          <SimpleLink link="/posts/alton-towers">
            {" "}
            {t(`${tp}towersLink`)}{" "}
          </SimpleLink>{" "}
        </Text>{" "}
      </ThemeparkBox>
      <ThemeparkBox
        park="Thorpe Park"
        parkDetails={t(`${tp}thorpeDetails`)}
        imageSrc={`${imgPath}thorpe-park/stealth.webp`}
      >
        {" "}
        <Text> {t(`${tp}thorpeP1`)} </Text> <Text> {t(`${tp}thorpeP2`)} </Text>{" "}
      </ThemeparkBox>
      <ThemeparkBox
        park="Chessington World of Adventures"
        parkDetails={t(`${tp}chessingtonDetails`)}
        imageSrc={`${imgPath}/chessington/crock-drop-img.webp`}
      >
        {" "}
        <Text> {t(`${tp}chessyP1`)} </Text> <Text> {t(`${tp}chessyP2`)} </Text>{" "}
        <Text> {t(`${tp}chessyP3`)} </Text> <Text> {t(`${tp}chessyP4`)} </Text>{" "}
      </ThemeparkBox>
      <ThemeparkBox
        park="Legoland Windsor"
        parkDetails={t(`${tp}legoLandDetails`)}
        imageSrc={`${imgPath}legoland-windsor.webp`}
      >
        {" "}
        <Text> {t(`${tp}legoLandP1`)} </Text>{" "}
        <Text> {t(`${tp}legolandP2`)} 🔥 </Text>{" "}
        <Text> {t(`${tp}legoLandP3`)} </Text>{" "}
      </ThemeparkBox>
      <ThemeparkBox
        park="Blackpool Pleasure Beach"
        parkDetails={t(`${tp}bPoolDetails`)}
        imageSrc={`${imgPath}/blackpool/icon.webp`}
      >
        {" "}
        <Text> {t(`${tp}bPoolP1`)} </Text> <Text>{t(`${tp}bPoolP2`)}</Text>{" "}
        <Text> {t(`${tp}bPoolP3`)} </Text>{" "}
      </ThemeparkBox>
      <ThemeparkBox
        park="Paultons"
        parkDetails={t(`${tp}paultonsDesc`)}
        imageSrc={`${imgPath}paultons.webp`}
      >
        {" "}
        <Text> {t(`${tp}paultonsP1`)} </Text>{" "}
        <Text> {t(`${tp}paultonsP2`)} </Text>{" "}
      </ThemeparkBox>
      <ThemeparkBox
        park="Adventure Island"
        parkDetails={t(`${tp}adventureIslandDesc`)}
        imageSrc={`${imgPath}adventure-island.webp`}
      >
        {" "}
        <Text> {t(`${tp}adventureIslandP1`)} </Text>{" "}
        <Text> {t(`${tp}adventureIslandP2`)} </Text>{" "}
      </ThemeparkBox>
      <ThemeparkBox
        park="Flamingo Land"
        parkDetails={t(`${tp}flamingoLandDesc`)}
        imageSrc={`${imgPath}flamingoland.webp`}
      >
        {" "}
        <Text> {t(`${tp}flamingoLandP1`)} </Text>{" "}
        <Text> {t(`${tp}flamingoLandP2`)} </Text>{" "}
        <Text> {t(`${tp}flamingoLandP3`)} </Text>{" "}
      </ThemeparkBox>
      <ThemeparkBox
        park="Drayton Manor"
        parkDetails={t(`${tp}DraytonDesc`)}
        imageSrc={`${imgPath}drayton-manor.webp`}
      >
        {" "}
        <Text> {t(`${tp}DraytonP1`)} </Text>{" "}
        <Text> {t(`${tp}DraytonP2`)} </Text>{" "}
        <Text> {t(`${tp}DraytonP3`)} </Text>{" "}
      </ThemeparkBox>
      <ThemeparkBox
        park="Oakwood Theme Park"
        parkDetails={t(`${tp}oaklyDesc`)}
        imageSrc={`${imgPath}oakwood.webp`}
      >
        {" "}
        <Text> {t(`${tp}oaklyP1`)} </Text> <Text> {t(`${tp}oaklyP2`)} </Text>{" "}
      </ThemeparkBox>
    </BlogLayout>
  );
}
