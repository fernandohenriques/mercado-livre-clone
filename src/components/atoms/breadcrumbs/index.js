import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Chevron from '-!svg-react-loader!assets/icons/chevron.svg';

const Breadcrumbs = ({ categories }) => (
  <div className={styles.container}>
    {categories.map((category, i) => (categories.length !== (i + 1)
      ? (
        <span key={category}>
          {`${category} `}
          <Chevron />
          {' '}
        </span>
      )
      : <strong key={category}>{category}</strong>))}
  </div>
);

Breadcrumbs.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Breadcrumbs;
