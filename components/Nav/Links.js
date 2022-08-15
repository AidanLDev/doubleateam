import React from 'react';
import Link from 'next/link';

export default function Links() {
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/posts'>
        <a>All Blogs</a>
      </Link>
      <span>|</span>
      <Link href='/about-us' passHref>
        <a>About Us</a>
      </Link>
    </>
  );
}
