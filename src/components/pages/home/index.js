import React from 'react';
import Page from 'components/templates/page';

import styles from './index.module.scss';

const Home = () => (
  <Page title="Mercado Livre - Busca">
    <div className={styles.container}>
      <h3>Encontre tudo que precisa.</h3>
    </div>
  </Page>
);

export default Home;
