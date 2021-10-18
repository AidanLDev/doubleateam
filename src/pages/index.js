import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <h1>Where Merah met Putih</h1>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <StaticImage
        src='../images/Indonesia.png'
        alt='Indonesia Flag'
        quality={95}
        width={300}
        formats={['auto', 'webp', 'avif']}
      />
      <StaticImage
        src='../images/Britian.png'
        alt='British Flag'
        quality={95}
        width={300}
        formats={['auto', 'webp', 'avif']}
      />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <StaticImage
        src='../images/FirstdayStreetSelfie.jpg'
        alt='Selfie on an Instanbul Street'
        quality={95}
        width={500}
        height={700}
        formats={['auto', 'webp', 'avif']}
        style={{ margin: '10px 15px 0 0' }}
      />
      <StaticImage
        src='../images/BlueMosque.jpg'
        alt='The Blue Mosque'
        quality={95}
        width={500}
        height={700}
        formats={['auto', 'webp', 'avif']}
        style={{ margin: '10px 0 0 15px' }}
      />
    </div>
  </Layout>
);

export default IndexPage;
