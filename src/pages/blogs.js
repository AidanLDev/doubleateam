import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = () => (
  <Layout>
    <Seo title='Blogs' />
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
);

export default BlogPage;
