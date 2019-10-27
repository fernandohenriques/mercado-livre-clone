import React from 'react';
import Page from 'components/templates/page';

import Breadcrumbs from 'components/atoms/breadcrumbs';

import styles from './index.module.scss';

const Home = () => (
  <Page title="Mercado Livre - Busca">
    <div className={styles.container}>
      <Breadcrumbs categories={['Eletronica y Audio', 'iPod', 'reproductores', '32 GB']} />
      <h1>Home</h1>
    </div>
  </Page>
);

export default Home;
