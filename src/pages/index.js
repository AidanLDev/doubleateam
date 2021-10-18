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
  </Layout>
);

export default IndexPage;
