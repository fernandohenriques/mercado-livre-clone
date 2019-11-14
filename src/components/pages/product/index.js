import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Page from 'components/templates/page';
import Loading from 'components/atoms/loading';
import SuperCard from 'components/atoms/superCard';
import Breadcrumbs from 'components/atoms/breadcrumbs';
import { fetchProduct as fetchProductAction } from 'store/ducks/product';

import styles from './index.module.scss';

const Product = ({ loading, product, categories }) => (
  <Page title={`Mercado Livre - ${product ? product.title : 'Produto não encontrado'}`}>
    <section className={styles.container}>
      {loading ? <Loading /> : (
        <>
          <Breadcrumbs categories={categories} />
          <SuperCard className={styles.product}>
            {product ? (
              <>
                Informações do produto
              </>
            ) : <h3>Produto não encontrado.</h3>}
          </SuperCard>
        </>
      )}
    </section>
  </Page>
);

Product.getInitialProps = ({ store, query: { id } }) => {
  if (id && id !== '') return store.dispatch(fetchProductAction(id));

  return {};
};

Product.propTypes = {
  loading: PropTypes.bool,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      decimals: PropTypes.number,
    }).isRequired,
    picture: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    sold_quantity: PropTypes.number,
  }),
  categories: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Product.defaultProps = {
  loading: false,
  product: null,
  categories: [],
};

const mapStateToProps = ({ product: { loading, lastIdfetched, products }, search: { result } }) => ({
  loading,
  product: products.find((item) => item.id === lastIdfetched),
  categories: result.categories,
});

export default connect(mapStateToProps)(Product);
