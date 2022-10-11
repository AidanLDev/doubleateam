import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Box, Flex, Center, Input, Tag, Text, Grid } from '@chakra-ui/react';
import { getBlogPostPaths } from '../../lib/posts';
const Footer = dynamic(() => import('../../components/Footer'));
import SEO from '../../components/SEO';
import AdsenseScript from '../../components/SEO/AdsenseScript';
const Topbar = dynamic(() => import('../../components/Nav/Topbar'));
import { useTranslation } from 'react-i18next';
import useIsMobile from '../../hooks/useIsMobile';
import useIsTablet from '../../hooks/useIsTablet';
const PostCard = dynamic(() =>
  import('../../components/postsComponents/PostCard')
);

export async function getStaticProps() {
  const blogs = getBlogPostPaths();
  return {
    props: {
      blogs,
    },
  };
}

const transPath = 'posts.';

export default function Posts({ blogs }) {
  const { t } = useTranslation();
  const [filterValue, setFilterValue] = useState('');
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const handleInputChange = e => {
    setFilterValue(e.target.value);
  };

  const tags = [
    'education',
    'visa',
    'travel',
    'ind',
    'marriage',
    'UK',
    'daysOut',
    'rollerCoasters',
    'webDev',
    'programming',
    'astro',
    'jsFrameworks',
    'react',
    'svelt',
    'vue',
    'solidJs',
    'lit',
    'preact',
    'netlify',
    'hosting',
    'ciCd',
    'circleCI',
    'history',
    'language',
    'all',
  ];

  return (
    <>
      <SEO
        title='Double A Team | Blogs'
        description='All of the blogs available on double a team, scroll through and pick whatever takes your fancy or search via tags or by blog title if you have something specific in mind.'
        url='https://doubleateam.co.uk/posts'
        image='/images/IstanbulHagiaSopia.webp'
      />
      <AdsenseScript />
      <Box borderBottom='2px solid red' paddingBottom='12px'>
        <Topbar />
        <Text
          fontSize={isMobile ? '32px' : '42px'}
          align='center'
          color='red'
          padding='24px 0'
          cursor='default'
        >
          {t(`${transPath}allBlogsHeading`)}
        </Text>
      </Box>
      <Text align='center' color='red' fontSize='18px' p='12px 0'>
        {t(`${transPath}filterHeading`)}
      </Text>
      <Flex p='0 12px' flexWrap='wrap' gap='4px' justify='center'>
        {tags.map((tag, id) => (
          <Tag
            key={`${id}__${tag}`}
            onClick={() => {
              if (tag === 'all') {
                setFilterValue('');
              } else {
                setFilterValue(tag);
              }
            }}
            colorScheme={tag === filterValue ? 'green' : 'blue'}
            cursor='pointer'
          >
            {t(`blogs.tags.${tag}`)}
          </Tag>
        ))}
      </Flex>
      <Center padding='12px 0'>
        <Input
          variant='filled'
          placeholder={t(`${transPath}blogSearchPlaceHolder`)}
          width='25%'
          value={filterValue}
          onChange={handleInputChange}
          _placeholder={{ opacity: 1, color: 'black' }}
          color='#0070f3'
          minW='200px'
        />
      </Center>
      <Grid
        gap={24}
        templateColumns={`repeat(${isTablet ? '1' : '3'}, 1fr)`}
        templateRows={`repeat(${isTablet ? '1' : '2'}, 1fr)`}
        p='0 24px'
      >
        {blogs.map((blog, idx) => {
          if (
            filterValue === '' ||
            RegExp(filterValue, 'i').test(blog.title) ||
            blog.tags.includes(filterValue)
          ) {
            return (
              <PostCard
                blog={blog}
                idx={idx}
                filterValue={filterValue}
                key={`${blog}__${idx}`}
              />
            );
          }
        })}
      </Grid>
      <Footer />
    </>
  );
}
