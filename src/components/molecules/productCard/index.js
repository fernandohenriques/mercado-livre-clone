import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Price from 'components/atoms/price';

import freeShippingIcon from 'assets/images/ic-shipping.png';
import styles from './index.module.scss';

const ProductCard = ({
  id,
  title,
  photoUrl,
  amount,
  decimals,
  stateName,
  freeShipping,
}) => {
  const freeShippingText = 'Envío gratis';

  return (
    <Link href={`/items/item?id=${id}`} as={`/items/${id}`}>
      <div className={styles.card}>
        <img src={photoUrl} title={title} alt={title} />
        <div className={styles.data}>
          <div className={styles.priceAndTitle}>
            <div className={styles.price}>
              <Price amount={amount} decimals={decimals} size="medium" />
              {freeShipping ? <img src={freeShippingIcon} alt={freeShippingText} title={freeShippingText} /> : null}
            </div>
            <span className={styles.title}>
              {title}
            </span>
          </div>
          <div className={styles.state}>
            {stateName}
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  decimals: PropTypes.number,
  photoUrl: PropTypes.string.isRequired,
  freeShipping: PropTypes.bool.isRequired,
  stateName: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  decimals: 0,
};

export default ProductCard;
