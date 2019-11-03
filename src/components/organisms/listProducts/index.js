import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Divider from 'components/atoms/divider';
import ProductCard from 'components/molecules/productCard';

const ListProducts = ({ products }) => products.map((product, i) => {
  const {
    id,
    title,
    picture,
    price: { amount },
    address: { state_name: stateName },
    free_shipping: freeShipping,
  } = product;

  return (
    <Fragment key={id}>
      <ProductCard
        id={id}
        title={title}
        price={amount}
        photoUrl={picture}
        stateName={stateName}
        freeShipping={freeShipping} />
      {products.length !== (i + 1) ? <Divider /> : null}
    </Fragment>
  );
});

ListProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.shape({
        currency: PropTypes.string.isRequired,
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
  ).isRequired,
};

export default ListProducts;
