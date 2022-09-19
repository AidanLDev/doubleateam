/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Text, Heading, Image, Center } from "@chakra-ui/react";
import BlogLayout from "../../components/blogLayout/BlogLayout";
import SimpleLink from "../../components/SimpleLink";
import { useTranslation } from "react-i18next";

const imagePath = "/images/blog/whatToDoInIndonesia/Jogja/";

const transPath = "blogs.whatToDoInJogja.";

export default function HowToPassIelts() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title="Double A Team | What to do in Jogja"
      description={t(`${transPath}blogTitle`)}
      postUrl="what-to-do-in-jogja"
    >
      <Heading>{t(`${transPath}hotel`)}</Heading>
      <Text>
        {t(`${transPath}hotelIntro`)}
        <b>Jambuluwuk Malioboro Hotel</b>
        {t(`${transPath}hotelP1`)}
        <Center>
          <Image
            src={`${imagePath}hotelBreakfastGarden.webp`}
            alt="Hotel garden"
          />
        </Center>
        {t(`${transPath}hotelP2`)}
      </Text>
      <Heading>{t(`${transPath}resturant`)}</Heading>
      <Text>
        {t(`${transPath}restP1`)}
        <b>Candhari Heaven</b>
        {t(`${transPath}restP2`)}
        <Image
          src={`${imagePath}niceResturantFood.webp`}
          alt="Candhari Heaven restaurants food"
        />
        {t(`${transPath}restP3`)}{" "}
        <SimpleLink link="https://www.instagram.com/candhariheaven/">
          {t(`${transPath}restLink`)}
        </SimpleLink>{" "}
        {t(`${transPath}restNum`)}
        <b>+6281282677677</b>.
      </Text>
      <Center>
        <Image
          src={`${imagePath}niceResturant.webp`}
          alt="Candhari Heaven restaurant"
        />
      </Center>
      <Center>
        <Image
          src={`${imagePath}niceResturantView2.webp`}
          alt="Candhari Heaven restaurant view"
        />
      </Center>
      <Heading>Malioboro</Heading>
      <Text>
        {t(`${transPath}marioboroIntro`)}
        <Center>
          <Image src={`${imagePath}malioboro.webp`} alt="Malioboro street" />
        </Center>
        <Center>
          <Image
            src={`${imagePath}malioboroGelato.webp`}
            alt="Gelato in malioboro"
          />
        </Center>
        {t(`${transPath}marioboroP2`)}
      </Text>
      <Heading>Hotel 2</Heading>
      <Text>
        {t(`${transPath}hotel2Intro`)}{" "}
        <b>Balkondes Ngargogondo The Gade Village</b>
        {t(`${transPath}hotel2P1`)}
        <Center>
          <Image
            src={`${imagePath}hotel2Rooms.webp`}
            alt="Gade Village rooms"
          />
        </Center>
        {t(`${transPath}hotel2P2`)}
        <Center>
          <Image
            src={`${imagePath}hotel2Breakfast.webp`}
            alt="Gade Village Breakfst"
          />
        </Center>{" "}
        {t(`${transPath}hotel2P3`)}
      </Text>
      <Heading>Punthuk Setumbu</Heading>
      <Text>
        {t(`${transPath}sunrisePlace`)}
        <Image src={`${imagePath}sunriseSignCrop.webp`} alt="Punthuk Setumbu" />
        {t(`${transPath}sunrisePlaceP1`)}
        <Image src={`${imagePath}sunrisePlace.webp`} alt="Punthuk Setumbu" />
        {t(`${transPath}sunrisePlaceP2`)}
        <Image src={`${imagePath}loveSign.webp`} alt="Punthuk Setumbu" />
        {t(`${transPath}sunrisePlaceP3`)}
        <Image src={`${imagePath}sunrisePlace2.webp`} alt="Punthuk Setumbu" />
        <Image src={`${imagePath}sunrisePlace3.webp`} alt="Punthuk Setumbu" />
        {t(`${transPath}sunrisePlaceP4`)}
      </Text>
      <Heading>Borobudur</Heading>
      <Text>
        {t(`${transPath}borobudurIntro`)}
        <Center>
          <Image src={`${imagePath}boroboudor.webp`} alt="boroboudor" />
        </Center>
      </Text>
      <Heading>{t(`${transPath}travellingToJogja`)}</Heading>
      <Text>
        {t(`${transPath}travellingToJogjaDesc`)}
        <Center>
          <Image
            src="/images/blog/whatToDoInIndonesia/Jogja/bus-bandung-jogja.webp"
            alt="bus to Jogja"
          />
        </Center>
        {t(`${transPath}travellingToJogjaP1`)}
      </Text>
      <Text>{t(`${transPath}conculusion`)}</Text>
    </BlogLayout>
  );
}
