import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

const Button = ({ children, onClick }) => (
  <button type="button" className={styles.button} onClick={onClick} title={children}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
