import React from 'react';
import Link from 'next/link';
import useIsMobile from '../../hooks/useIsMobile';
import useSetLang from '../../hooks/useSetLang';

export default function Links() {
  const isMobile = useIsMobile();
  const lang = useSetLang();
  return (
    <>
      <Link href='/'>
        <a>{lang === 'Eng' ? 'Home' : 'rumah'}</a>
      </Link>
      <Link href='/posts'>
        <a>{lang === 'Eng' ? 'All Blogs' : 'Semua Blog'}</a>
      </Link>
      {!isMobile && <span>|</span>}
      <Link href='/about-us' passHref>
        <a>{lang === 'Eng' ? 'About Us' : 'Tentang kami'}</a>
      </Link>
      <Link href='/contact-us' passHref>
        <a>{lang === 'Eng' ? 'Contact Us' : 'Hubungi kami'}</a>
      </Link>
      <Link href='/privacy-policy' passHref>
        <a>{lang === 'Eng' ? 'Privacy Policy' : 'Kebijakan pribadi'}</a>
      </Link>
    </>
  );
}
