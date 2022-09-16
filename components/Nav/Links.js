import React from 'react';
import Link from 'next/link';
import useIsMobile from '../../hooks/useIsMobile';
import { useTranslation } from 'react-i18next';

const transPath = 'topBar.';

export default function Links() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <>
      <Link href='/posts'>
        <a>{t(`${transPath}allBlogs`)}</a>
      </Link>
      {!isMobile && <span>|</span>}
      <Link href='/about-us' passHref>
        <a>{t(`${transPath}aboutUs`)}</a>
      </Link>
      <Link href='/contact-us' passHref>
        <a>{t(`${transPath}contactUs`)}</a>
      </Link>
      <Link href='/privacy-policy' passHref>
        <a>{t(`${transPath}privacyPolicy`)}</a>
      </Link>
    </>
  );
}
