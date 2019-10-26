import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import 'styles/index.scss';

const Page = ({ children, title }) => (
  <main>
    <Head>
      <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
      <title>
Mercado Livre --
        {title}
      </title>
    </Head>
    {children}
  </main>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Page;
