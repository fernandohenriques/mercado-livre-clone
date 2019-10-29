import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Api from 'services/api';
import Page from 'components/templates/page';
import Scroller from 'components/atoms/scroller';
import Breadcrumbs from 'components/atoms/breadcrumbs';
import ListProducts from 'components/organisms/listProducts';

import styles from './index.module.scss';

const Products = ({ products, categories }) => {
  const [state, setState] = useState({
    products,
    categories,
  });

  const getProducts = async (search, refSetState) => {
    const { getProducts: getProductsFromApi } = new Api();
    const { categories: categoriesFromApi, items: productsFromApi } = await getProductsFromApi(search);

    refSetState((prevState) => ({
      ...prevState,
      products: productsFromApi,
      categories: categoriesFromApi,
    }));
  };

  useEffect(() => {
    const url = new URL(document.location);

    if (url.searchParams.has('search')) {
      const search = url.searchParams.get('search');
      getProducts(search, setState);
    }
  }, [setState]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      products,
      categories,
    }));
  }, [products, categories, setState]);

  return (
    <Page title="Mercado Livre - Resultado de Busca">
      <section className={styles.container}>
        <Breadcrumbs categories={state.categories} />
        <Scroller className={styles.products}>
          <ListProducts products={state.products} />
        </Scroller>
      </section>
    </Page>
  );
};

Products.getInitialProps = async ({ query: { search } }) => {
  const emptyResult = {
    products: [],
    categories: [],
  };

  if (search && search !== '') {
    const { getProducts } = new Api();

    try {
      const { categories, items: products } = await getProducts(search);
      return { products, categories };
    } catch (e) {
      return emptyResult;
    }
  }

  return emptyResult;
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: {
        currency: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        decimals: PropTypes.number,
      },
      picture: PropTypes.string.isRequired,
      free_shipping: PropTypes.bool.isRequired,
      address: {
        state_id: PropTypes.string,
        state_name: PropTypes.string.isRequired,
      },
    }).isRequired,
  ),
  categories: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Products.defaultProps = {
  products: [],
  categories: [],
};

export default Products;
