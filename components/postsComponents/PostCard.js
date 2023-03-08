import React, { useState, useEffect } from "react";
// import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GridItem,
  HStack,
  Tag,
  Icon,
  Box,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import CardTitle from "../CardTitle";
import { AiFillTag } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import useIsMobile from "../../hooks/useIsMobile";
import useIsTablet from "../../hooks/useIsTablet";

import styles from "./styles.module.scss";
import CopyClipboard from "../CopyClipboard";

const MotionContainer = motion(Box);

const transPath = "blogs.";

export default function PostCard({ blog, idx, filterValue }) {
  const { t } = useTranslation();

  const [isLaptop, setIsLaptop] = useState(false);
  const [mediaQuery] = useMediaQuery("(max-width: 1500px)");
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  useEffect(() => {
    setIsLaptop(mediaQuery);
  }, [mediaQuery]);
  return (
    <GridItem
      overflow="hidden"
      h="100%"
      w="100%"
      minH="600px"
      maxH="600px"
      colSpan={isTablet || filterValue !== "" ? 1 : blog.size.colSpan}
      rowSpan={isTablet || filterValue !== "" ? 1 : blog.size.rowSpan}
      _hover={{
        boxShadow: "5px 7px 16px -5px rgba(0,0,0,0.56)",
      }}
      borderRadius="6%"
      className={styles.postCardWrapper}
    >
      <Box>
        <Flex
          flexDir="column"
          justifyContent="space-between"
          position="absolute"
        >
          <Box>
            <Flex maxW={isLaptop ? "300px" : "500px"} alignItems="baseline">
              <CardTitle
                titleText={t(`${transPath}${blog.title}.title`)}
                fontSize={
                  isTablet && !isMobile
                    ? "26px"
                    : isMobile || isLaptop
                    ? "18px"
                    : "26px"
                }
                pos="relative"
              />
              <CopyClipboard
                postUrl={`https://doubleateam.co.uk/posts/${blog.path}`}
              />
            </Flex>
            <CardTitle
              titleText={blog.published}
              fontSize="16px"
              pos="relative"
            />
          </Box>
        </Flex>
        <Link href={`/posts/${blog.path}`} passHref maxH="600px">
          <MotionContainer
            backgroundImage={`/images/blog/${blog.path}.webp`}
            backgroundSize="cover"
            cursor="pointer"
            colSpan={blog.size.colSpan}
            rowSpan={blog.size.rowSpan}
            p="24px"
            h="600px"
            w="100%"
            whileHover={{ scale: 1.02 }}
          />
        </Link>
        <HStack
          pos="relative"
          zIndex="20"
          top="-85px"
          left="12px"
          flexWrap="wrap"
          gap="2px"
        >
          <Icon as={AiFillTag} fill="white" />
          {blog.tags.map((tag, tagIdx) => (
            <Tag key={`${tag}__${idx}__${tagIdx}`}>
              {t(`${transPath}tags.${tag}`)}
            </Tag>
          ))}
          ;
        </HStack>
      </Box>
    </GridItem>
  );
}
