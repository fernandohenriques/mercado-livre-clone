import React from 'react';
import Page from 'components/templates/page';
import Scroller from 'components/atoms/scroller';
import Breadcrumbs from 'components/atoms/breadcrumbs';
import ListProducts from 'components/organisms/listProducts';

import styles from './index.module.scss';

const Products = () => (
  <Page title="Mercado Livre - Resultado de Busca">
    <section className={styles.container}>
      <Breadcrumbs categories={['Eletronica y Audio', 'iPod', 'reproductores', '32 GB']} />
      <Scroller className={styles.products}>
        <ListProducts products={[]} />
      </Scroller>
    </section>
  </Page>
);

export default Products;
