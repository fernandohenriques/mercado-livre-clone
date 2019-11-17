import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.scss';

const Price = ({ amount, decimals, size }) => {
  const availablesSizes = ['small', 'medium', 'large'];
  const formatedAmount = amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  const sizeClass = size && availablesSizes.includes(size) ? size : 'medium';

  return (
    <span className={classnames(styles.price, styles[sizeClass])}>
      <span className={styles.amount}>{`$ ${formatedAmount}`}</span>
      {decimals > 0 ? (
        <span className={styles.decimals}>
          {decimals.toString().length < 2 ? `0${decimals}` : decimals}
        </span>
      ) : null}
    </span>
  );
};

Price.propTypes = {
  amount: PropTypes.number.isRequired,
  decimals: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Price.defaultProps = {
  size: 'medium',
};

export default Price;
