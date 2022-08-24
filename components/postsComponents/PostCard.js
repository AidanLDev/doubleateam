import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GridItem,
  HStack,
  Tag,
  Icon,
  Box,
  Flex,
  Divider,
} from '@chakra-ui/react';
import CardTitle from '../CardTitle';
import { AiFillTag } from 'react-icons/ai';
import { BsClipboard, BsClipboardCheck } from 'react-icons/bs';
import useIsMobile from '../../hooks/useIsMobile';
import useSetLang from '../../hooks/useSetLang';

const MotionContainer = motion(Box);

export default function PostCard({ blog, idx, filterValue }) {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();
  const lang = useSetLang();

  return (
    <GridItem
      overflow='hidden'
      h='100%'
      w='100%'
      minH='600px'
      maxH='600px'
      colSpan={isMobile || filterValue !== '' ? 1 : blog.size.colSpan}
      rowSpan={isMobile || filterValue !== '' ? 1 : blog.size.rowSpan}
      _hover={{
        boxShadow: '5px 7px 16px -5px rgba(0,0,0,0.56)',
      }}
      borderRadius='6%'
    >
      <Box>
        <Link href={`/posts/${blog.path}`} passHref maxH='600px'>
          <MotionContainer
            backgroundImage={`/images/blog/${blog.path}.jpg`}
            backgroundSize='cover'
            cursor='pointer'
            colSpan={blog.size.colSpan}
            rowSpan={blog.size.rowSpan}
            p='24px'
            h='600px'
            w='100%'
            whileHover={{ scale: 1.02 }}
          />
        </Link>
        <Flex
          flexDir='column'
          justifyContent='space-between'
          position='relative'
          top='-580px'
        >
          <Box>
            <Flex justifyContent='space-around'>
              <CardTitle
                titleText={
                  lang !== 'Ind' ? blog.title : blog.indTitle
                }
                fontSize='26px'
                pos='relative'
              />
              <Icon
                as={copied ? BsClipboardCheck : BsClipboard}
                color='primary'
                boxSize={8}
                zIndex='20'
                onClick={() => setCopied(copied => !copied)}
              />
            </Flex>
            <Divider />
            <CardTitle
              titleText={blog.published}
              fontSize='16px'
              pos='relative'
            />
          </Box>
        </Flex>
        <HStack pos='relative' top='-150px'>
          <Icon as={AiFillTag} fill='white' />
          {lang !== 'Ind'
            ? blog.tags.map((tag, tagIdx) => (
                <Tag key={`${tag}__${idx}__${tagIdx}`}>{tag}</Tag>
              ))
            : blog.indTags.map((tag, tagIdx) => (
                <Tag key={`${tag}__${idx}__${tagIdx}`}>{tag}</Tag>
              ))}
        </HStack>
      </Box>
    </GridItem>
  );
}
