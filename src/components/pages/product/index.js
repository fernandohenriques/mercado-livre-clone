import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'components/atoms/button';
import Page from 'components/templates/page';
import Loading from 'components/atoms/loading';
import SuperCard from 'components/atoms/superCard';
import Breadcrumbs from 'components/atoms/breadcrumbs';
import { fetchProduct as fetchProductAction } from 'store/ducks/product';

import styles from './index.module.scss';

const Product = ({ loading, product, categories }) => {
  const conditions = new Map([
    ['new', 'Nuevo'],
    ['not_specified', 'No especificado'],
    ['used', 'Usado'],
  ]);

  const hasSoldQuantity = typeof product.sold_quantity !== 'undefined';

  return (
    <Page title={`Mercado Livre - ${product ? product.title : 'Produto não encontrado'}`}>
      <div className={styles.container}>
        {loading ? <Loading /> : (
          <>
            <Breadcrumbs categories={categories} />
            <SuperCard className={styles.product}>
              {product ? (
                <>
                  <section className={styles.coverAndData}>
                    <div className={styles.cover}>
                      <img src={product.picture} alt={product.title} title={product.title} />
                    </div>
                    <div className={styles.data}>
                      <div className={styles.condition}>
                        {`${conditions.get(product.condition)}${hasSoldQuantity ? ` - ${product.sold_quantity} vendidos` : ''}`}
                      </div>
                      <div className={styles.name}>
                        <strong>{product.title}</strong>
                      </div>
                      <div className={styles.price}>
                        <strong>{`$ ${product.price.amount.toFixed(2)}`}</strong>
                      </div>
                      <Button onClick={() => null}>
                        Comprar
                      </Button>
                    </div>
                  </section>
                  {product.description && (
                    <section className={styles.description}>
                      <span>Descripción del producto</span>
                      <p>{product.description}</p>
                    </section>
                  )}
                </>
              ) : <h3>Produto não encontrado.</h3>}
            </SuperCard>
          </>
        )}
      </div>
    </Page>
  );
};

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
      currency: PropTypes.string,
      amount: PropTypes.number.isRequired,
      decimals: PropTypes.number,
    }).isRequired,
    picture: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
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
