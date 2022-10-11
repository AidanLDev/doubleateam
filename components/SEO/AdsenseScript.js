import Script from 'next/script';

export default function AdsenseScript() {
  return (
    <Script
      async
      src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647500966281017'
      crossorigin='anonymous'
      onError={e => console.error('Script failed to load', e)}
      strategy='beforeInteractive'
    />
  );
}
