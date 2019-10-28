import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const ProductCard = ({ product: {
  id,
  title,
  photoUrl,
  price,
  stateName,
  freeShipping,
}}) => (
  <div className={styles.card}>
    <img src={photoUrl} title={title} />
    <div className={styles.data}>
      <div className={styles.priceAndTitle}>
        <div className={styles.price}>
          {`$ ${price}`}
        </div>
        <span className={styles.title}>
          {`$ ${title}`}
        </span>
      </div>
      <div className={styles.state}>
        {stateName}
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
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
};

export default ProductCard;
