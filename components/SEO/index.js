import Head from 'next/head';

const SEO = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      {image && <meta itemProp='image' content={image} />}
    </Head>
  );
};

export default SEO;
