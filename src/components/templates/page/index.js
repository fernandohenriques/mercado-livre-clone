import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from 'components/organisms/header';

import 'styles/index.scss';
import favicon from 'assets/images/favicon.ico';

const Page = ({ children, title }) => (
  <>
    <Head>
      <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
      <title>
        {title}
      </title>
      <link rel="shortcut icon" href={favicon} />
    </Head>
    <Header />
    <main>
      {children}
    </main>
  </>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Page;
