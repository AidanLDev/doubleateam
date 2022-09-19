/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Heading, Text, AspectRatio, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import BlogLayout from "../../components/blogLayout/BlogLayout";
import ThemeparkBox from "../../components/blogComponents/ThemeparkBox";
import SimpleLink from "../../components/SimpleLink";
import StyledUL from "../../components/StyledUL";
import SmallBlogImg from "../../components/blogComponents/SmallBlogImg";

const imgPath = "/images/blog/theme-parks/alton-towers/";

const tp = "blogs.altonTowers.";

export default function AltonTowers() {
  const { t } = useTranslation();
  return (
    <BlogLayout
      title="Double A Team | Alton Towers"
      description={t(`${tp}blogTitle`)}
      postUrl="alton-towers"
    >
      <Text>{t(`${tp}intro`)}</Text>
      <ThemeparkBox
        park={t(`${tp}location`)}
        parkDetails="Far${tp}ley Ln, Alton, Stoke-on-Trent ST10 4DB"
        imageSrc={`${imgPath}staffordshire-countryside.webp`}
      >
        <Text>{t(`${tp}p1`)}</Text>
        <Text>
          {t(`${tp}p2`)}
          <SimpleLink link="https://www.premierinn.com/gb/en/hotels/england/staffordshire/stoke-on-trent/stoke-on-trent-hanley.html?cid=GLBC_STOHAN">
            {t(`${tp}link1`)}
          </SimpleLink>{" "}
          {t(`${tp}p3`)}
          <SmallBlogImg src={`${imgPath}premier-inn.webp`} alt="Premier Inn" />
        </Text>
        <Text>
          {t(`${tp}p4`)}
          <SmallBlogImg src={`${imgPath}spoons-breakfast.webp`} />
        </Text>
      </ThemeparkBox>
      <Heading>{t(`${tp}price`)}</Heading>
      <Text>
        {t(`${tp}p5`)}{" "}
        <SimpleLink link="https://www.altontowers.com/tickets-passes/#decoy">
          {t(`${tp}link2`)}
        </SimpleLink>
      </Text>
      <Text>{t(`${tp}p6`)}</Text>
      <Text>
        {t(`${tp}p7`)}{" "}
        <SimpleLink link="https://www.merlinannualpass.co.uk/">
          {t(`${tp}link3`)}
        </SimpleLink>
        {t(`${tp}p9`)}
      </Text>
      <StyledUL
        items={[
          { text: t(`${tp}b1`) },
          { text: t(`${tp}b2`) },
          { text: t(`${tp}b3`) },
          { text: t(`${tp}b4`) },
        ]}
      />
      <Text>{t(`${tp}p10`)}</Text>
      <StyledUL
        items={[
          { text: t(`${tp}list2b1`) },
          { text: t(`${tp}list2b2`) },
          { text: t(`${tp}list2b3`) },
          { text: t(`${tp}list2b4`) },
          { text: t(`${tp}list2b5`) },
          { text: t(`${tp}list2b6`) },
          { text: t(`${tp}list2b7`) },
          { text: t(`${tp}list2b8`) },
          { text: t(`${tp}list2b9`) },
        ]}
      />
      <Text>{t(`${tp}p11`)}</Text>
      <Text>{t(`${tp}list3Title`)}</Text>
      <StyledUL
        items={[
          {
            text: t(`${tp}list3b1`),
          },
          {
            text: t(`${tp}list3b2`),
          },
          {
            text: t(`${tp}list3b3`),
          },
          {
            text: t(`${tp}list3b4`),
          },
        ]}
      />
      <Text>{t(`${tp}bfridayP`)} 😉</Text>
      <Heading>{t(`${tp}ridesAndAttractions`)}</Heading>
      <Text>{t(`${tp}ridesNAttratcionsIntro`)}</Text>
      <Heading>{t(`${tp}rolleroasters`)}</Heading>
      <ThemeparkBox
        park="The Smiler"
        parkDetails={t(`${tp}smilerDetails`)}
        imageSrc={`${imgPath}smiler.webp`}
      >
        <Text>{t(`${tp}smilerP`)}</Text>
      </ThemeparkBox>
      <ThemeparkBox
        park="Galactica"
        parkDetails={t(`${tp}galacitcaDetails`)}
        imageSrc={`${imgPath}air.webp`}
      >
        <Text>{t(`${tp}galacticaP`)}</Text>
      </ThemeparkBox>
      <ThemeparkBox
        park="Nemesis"
        imageSrc={`${imgPath}nemesis.webp`}
        parkDetails={t(`${tp}NemesisDetails`)}
      >
        <Text>{t(`${tp}NemesisP`)}</Text>
      </ThemeparkBox>
      <ThemeparkBox
        park="Oblivion"
        imageSrc={`${imgPath}oblivion.webp`}
        parkDetails={t(`${tp}OblivionDetails`)}
      >
        <Text>{t(`${tp}OblivionP`)}</Text>
      </ThemeparkBox>
      <ThemeparkBox
        park="Rita"
        imageSrc={`${imgPath}rita.webp`}
        parkDetails={t(`${tp}ritaD`)}
      ></ThemeparkBox>
      <ThemeparkBox
        park="Spinball Whizzer"
        parkDetails={t(`${tp}spinballD`)}
        imageSrc={`${imgPath}spinball.webp`}
      ></ThemeparkBox>
      <ThemeparkBox
        park="Th13teen"
        parkDetails={t(`${tp}thirteenD`)}
        imageSrc={`${imgPath}Thirteen-Alton_towers.webp`}
      ></ThemeparkBox>
      <ThemeparkBox
        park="Wicker Man"
        parkDetails={t(`${tp}wickermanD`)}
        imageSrc="/images/blog/best-uk-theme-parks.webp"
      >
        <Text>{t(`${tp}wickermanP`)}</Text>
      </ThemeparkBox>
      <Text>{t(`${tp}familyF`)}</Text>
      <ThemeparkBox
        park="Octonauts Rollercoaster Adventure"
        imageSrc={`${imgPath}octonoughts.webp`}
      ></ThemeparkBox>
      <ThemeparkBox
        park="Runaway Mine Train"
        imageSrc={`${imgPath}runaway-mine-train.webp`}
      ></ThemeparkBox>
      <Heading>{t(`${tp}flatRides`)}</Heading>
      <Text>{t(`${tp}flatRidesIntro`)}</Text>
      <ThemeparkBox
        park="Gangsta Granny The Ride"
        parkDetails={t(`${tp}gangsterG`)}
        imageSrc={`${imgPath}gangsta-granny.webp`}
      ></ThemeparkBox>
      <ThemeparkBox
        park="Retro Squad"
        parkDetails={t(`${tp}retroSquadD`)}
        imageSrc={`${imgPath}retro.webp`}
      >
        <Text>{t(`${tp}retroSquadP`)}</Text>
      </ThemeparkBox>
      <ThemeparkBox
        park="Enterprise"
        parkDetails={t(`${tp}enterpriseD`)}
        imageSrc={`${imgPath}enterprise.webp`}
      ></ThemeparkBox>
      {/* TODO: Add Hex */}
      <ThemeparkBox
        park="Duel: The Haunted House Strikes Back"
        parkDetails={t(`${tp}duelD`)}
        imageSrc={`${imgPath}duel.webp`}
      ></ThemeparkBox>
      <Heading>{t(`${tp}towersGardens`)}</Heading>
      <Text>{t(`${tp}towersIntro`)}</Text>
      <Text>
        {t(`${tp}towersHistoryP1`)}
        <SmallBlogImg src={`${imgPath}stately-home.webp`} alt="stately home" />
      </Text>
      <Text>
        {t(`${tp}towersHistoryP2`)}
        <SmallBlogImg
          src={`${imgPath}corckscrew.webp`}
          alt="Old corckscrew rollercoaster"
        />
      </Text>
      <Text>{t(`${tp}towersHistoryP3`)}</Text>
      <Text>
        {t(`${tp}towersHistoryP4`)}
        <Center>
          <AspectRatio w="500px" ratio={1}>
            <video
              title="Towers Garden Waterfeature"
              src={`${imgPath}water-feature.MOV`}
              autoPlay
              muted
              loop
            />
          </AspectRatio>
        </Center>
      </Text>
      <Text>
        {t(`${tp}towersHistoryP5`)}
        <SmallBlogImg src={`${imgPath}waterfall-still.webp`} alt="Waterfall" />
      </Text>
      <Heading>{t(`${tp}gallery`)}</Heading>
      <SmallBlogImg src={`${imgPath}me-and-bob.webp`} alt="Me and big b" />
      <Text>
        <Center>
          <AspectRatio w="500px" ratio={1}>
            <video
              title="Oblivion"
              src={`${imgPath}oblivion.MOV`}
              autoPlay
              muted
              loop
            />
          </AspectRatio>
        </Center>
      </Text>

      <Text>
        <Center>
          <AspectRatio w="500px" ratio={1}>
            <video
              title="Waterfall"
              src={`${imgPath}waterfall.MOV`}
              autoPlay
              muted
              loop
            />
          </AspectRatio>
        </Center>
      </Text>
      <Text>{t(`${tp}towersNature`)}</Text>
    </BlogLayout>
  );
}
