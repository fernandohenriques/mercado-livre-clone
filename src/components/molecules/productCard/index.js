import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const ProductCard = ({
  id,
  title,
  photoUrl,
  price,
  stateName,
  freeShipping,
}) => (
  <div className={styles.card} data-id={id}>
    <img src={photoUrl} title={title} alt={title} />
    <div className={styles.data}>
      <div className={styles.priceAndTitle}>
        <div className={styles.price}>
          {`$ ${price.toFixed(2)}`}
        </div>
        <span className={styles.title}>
          {title}
        </span>
      </div>
      <div className={styles.state}>
        {stateName}
      </div>
    </div>
    {freeShipping}
  </div>
);

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  photoUrl: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool.isRequired,
  stateName: PropTypes.string.isRequired,
};

export default ProductCard;
