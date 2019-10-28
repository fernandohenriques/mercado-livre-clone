import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'components/atoms/divider';
import ProductCard from 'components/atoms/productCard';

const ListProducts = ({ products }) =>
  products.map((product, i) => {
    const { id, title, picture, price: { amount }, adress: { state_name }, free_shipping } = product;
    return (
      <>
        <ProductCard
          key={id}
          id={id}
          title={title}
          photoUrl={picture}
          stateName={state_name}
          freeShipping={free_shipping} />
        {products.length !== (i+1) ? <Divider /> : null}
      </>
    );
  });

ListProducts.propTypes = {
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
  ).isRequired,
};

export default ListProducts;