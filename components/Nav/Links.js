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
        <a>{lang !== 'Ind' ? 'Home' : 'Rumah'}</a>
      </Link>
      <Link href='/posts'>
        <a>{lang !== 'Ind' ? 'All Blogs' : 'Semua Blog'}</a>
      </Link>
      {!isMobile && <span>|</span>}
      <Link href='/about-us' passHref>
        <a>{lang !== 'Ind' ? 'About Us' : 'Tentang kami'}</a>
      </Link>
      <Link href='/contact-us' passHref>
        <a>{lang !== 'Ind' ? 'Contact Us' : 'Hubungi kami'}</a>
      </Link>
      <Link href='/privacy-policy' passHref>
        <a>{lang !== 'Ind' ? 'Privacy Policy' : 'Kebijakan pribadi'}</a>
      </Link>
    </>
  );
}
