import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <div
    style={{
      background: 'red',
      borderTop: '2px solid black',
      padding: '10px 0 0 0',
      marginBottom: `1.45rem`,
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to='/blogs/'>Blogs</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
