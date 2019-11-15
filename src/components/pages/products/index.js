import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from 'components/templates/page';
import Loading from 'components/atoms/loading';
import SuperCard from 'components/atoms/superCard';
import Breadcrumbs from 'components/atoms/breadcrumbs';
import ListProducts from 'components/organisms/listProducts';
import { fetchSearch as fetchSearchAction } from 'store/ducks/search';

import styles from './index.module.scss';

const Products = ({ loading, products, categories }) => (
  <Page title="Mercado Livre - Resultado de Busca">
    <section className={styles.container}>
      {loading ? <Loading /> : (
        <>
          <Breadcrumbs categories={categories} />
          <SuperCard className={styles.products}>
            <ListProducts products={products} />
          </SuperCard>
        </>
      )}
    </section>
  </Page>
);

Products.getInitialProps = ({ store, query: { search } }) => {
  if (search && search !== '') return store.dispatch(fetchSearchAction(search));

  return {};
};

Products.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.number.isRequired,
        decimals: PropTypes.number,
      }).isRequired,
      picture: PropTypes.string.isRequired,
      free_shipping: PropTypes.bool.isRequired,
      address: PropTypes.shape({
        state_id: PropTypes.string,
        state_name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ),
  categories: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Products.defaultProps = {
  loading: false,
  products: [],
  categories: [],
};

const mapStateToProps = ({ search: { loading, result } }) => ({
  loading,
  categories: result.categories,
  products: result.products,
});

export default connect(mapStateToProps)(Products);
