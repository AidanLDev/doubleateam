import React from 'react';
import Link from 'next/link';
import useIsMobile from '../../hooks/useIsMobile';
import { useTranslation } from 'react-i18next';
import Styles from './styles.module.scss';
import { useRouter } from 'next/router';

const transPath = 'topBar.';

export async function getStaticProps() {
  return {
    props: {
      isHome,
    },
  };
}

export default function Links({ isHome }) {
  const router = useRouter();
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <>
      <Link href='/posts'>
        <a
          className={
            router.pathname === '/posts' ? Styles.active : ''
          }
        >
          {t(`${transPath}allBlogs`)}
        </a>
      </Link>
      {!isMobile && !isHome && <span>|</span>}
      <Link href='/about-us' passHref>
        <a
          className={
            router.pathname === '/about-us' ? Styles.active : ''
          }
        >
          {t(`${transPath}aboutUs`)}
        </a>
      </Link>
      <Link href='/contact-us' passHref>
        <a
          className={
            router.pathname === '/contact-us' ? Styles.active : ''
          }
        >
          {t(`${transPath}contactUs`)}
        </a>
      </Link>
      <Link href='/privacy-policy' passHref>
        <a
          className={
            router.pathname === '/privacy-policy' ? Styles.active : ''
          }
        >
          {t(`${transPath}privacyPolicy`)}
        </a>
      </Link>
    </>
  );
}
