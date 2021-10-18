/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Header from './header';
import Nav from '../components/Nav';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Nav />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          marginTop: `2rem`,
          background: 'red',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <StaticImage
          src='../images/FB.png'
          alt='Facebook logo'
          width={50}
          height={50}
        />
        <StaticImage
          src='../images/Insta.png'
          alt='Instagram logo'
          width={50}
          height={50}
        />
        <StaticImage
          src='../images/YouTube.png'
          alt='YouTube logo'
          width={50}
          height={50}
        />
        <StaticImage
          src='../images/Mail.png'
          alt='Mail logo'
          width={50}
          height={50}
        />
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
