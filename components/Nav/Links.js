import React from 'react';
import Link from 'next/link';
import useIsMobile from '../../hooks/useIsMobile';

export default function Links() {
  const isMobile = useIsMobile();
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/posts'>
        <a>All Blogs</a>
      </Link>
      {!isMobile && <span>|</span>}
      <Link href='/about-us' passHref>
        <a>About Us</a>
      </Link>
      <Link href='/contact-us' passHref>
        <a>Contact Us</a>
      </Link>
      <Link href='/privacy-policy' passHref>
        <a>Privacy Policy</a>
      </Link>
    </>
  );
}
