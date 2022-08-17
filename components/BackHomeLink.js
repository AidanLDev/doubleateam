import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';

export default function BackHomeLink({ blog }) {
  const [lang, setLang] = useState();

  useEffect(() => {
    if (!lang) {
      setLang(sessionStorage.getItem('language'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Link href={blog ? '/posts/' : '/'} passHref>
      <Text color='secondary' m='20px 0'>
        <a>
          {blog
            ? lang !== 'Ind' || !lang
              ? 'All blogs'
              : 'Semua blog'
            : lang !== 'Ind' || !lang
            ? 'Take me home'
            : 'Bawa aku pulang'}
        </a>
      </Text>
    </Link>
  );
}
