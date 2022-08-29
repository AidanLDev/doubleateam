import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Center,
  Heading,
  Input,
  Tag,
  Text,
  Grid,
  Divider,
} from '@chakra-ui/react';
import useSetLang from '../../hooks/useSetLang';
import { getBlogPostPaths } from '../../lib/posts';
import { messages } from '../../lib/messages';
import Footer from '../../components/Footer';
import styles from './styles.module.scss';
import SEO from '../../components/SEO';
import Topbar from '../../components/Nav/Topbar';
import useIsMobile from '../../hooks/useIsMobile';
import useIsTablet from '../../hooks/useIsTablet';
import PostCard from '../../components/postsComponents/PostCard';

export async function getStaticProps() {
  const blogs = getBlogPostPaths();
  return {
    props: {
      blogs,
    },
  };
}

const tags = [
  'Education',
  'Visa',
  'Travel',
  'Indonesia',
  'Marriage',
  'UK',
  'Days out',
  'Roller coasters',
  'Web dev',
  'Programming',
  'Astro',
  'JS frameworks',
  'React',
  'Svelt',
  'Vue',
  'Solid-js',
  'lit',
  'Preact',
  'Netlify',
  'Hosting',
  'CI/CD',
  'CircleCI',
  'All',
];

export default function Posts({ blogs }) {
  const [filterValue, setFilterValue] = useState('');
  const [messageCount, setMessageCount] = useState(0);
  const lang = useSetLang();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  let flashingTextWidth;

  const handleInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  const timeoutFunction = () => {
    setTimeout(function () {
      setMessageCount(messageCount++);
      if (messageCount === messages.length) {
        setMessageCount(0);
      }
      if (messageCount < messages.length) {
        timeoutFunction();
      }
    }, 12000);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    flashingTextWidth = window.innerWidth;
    setTimeout(function () {
      timeoutFunction();
    }, 12000);
  }, []);

  return (
    <>
      <SEO
        title='Double A Team | Blogs'
        description="All of the blogs we've written, scroll through and pick whatever takes your fancy or search via tags or by blog title if you have something specific in mind."
        url='https://doubleateam.co.uk/posts'
        image='/images/IstanbulHagiaSopia.jpg'
      />
      <Box
        height='500px'
        backgroundImage='url(/images/sky2-resize.jpg)'
        padding='20px'
        borderBottom='2px solid red'
      >
        <Heading
          color='primary'
          width='50%'
          margin='0 38%'
          className={styles.logo}
        >
          <Link href={'/'}>Double A Team</Link>
        </Heading>
        {
          <Text
            position='absolute'
            top={Math.floor(Math.random() * 300 + 100)}
            left={Math.floor(
              Math.random() * flashingTextWidth || isMobile ? 200 : 800
            )}
            fontSize={isMobile ? 'large' : '6xl'}
            className='fadingText'
          >
            {messages[messageCount]}
          </Text>
        }
      </Box>
      <Topbar />
      <Text
        fontSize={isMobile ? '32px' : '42px'}
        align='center'
        color='red'
        padding='24px 0'
        cursor='default'
      >
        {lang !== 'Ind'
          ? 'Spreading what we know, with those who want to know'
          : 'Menyebarkan apa yang kita ketahui, dengan mereka yang ingin tahu'}
      </Text>
      <Divider borderColor='red' paddingBottom='12px' />
      <Text align='center' color='red' fontSize='18px' paddingBottom='8px'>
        Filter by tag
      </Text>
      <Flex p='0 12px' flexWrap='wrap' gap='4px' justify='center'>
        {tags.map((tag, id) => (
          <Tag
            key={`${id}__${tag}`}
            onClick={() => {
              if (tag === 'All') {
                setFilterValue('');
              } else {
                setFilterValue(tag);
              }
            }}
            colorScheme={tag === filterValue ? 'green' : 'blue'}
            cursor='pointer'
          >
            {tag}
          </Tag>
        ))}
      </Flex>
      <Center padding='12px 0'>
        <Input
          variant='filled'
          placeholder={lang !== 'Ind' ? 'Blog Search...' : 'Pencarian blog...'}
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
