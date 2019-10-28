import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/atoms/input';

import searchIcon from 'assets/images/ic-search.png';
import styles from './index.module.scss';

const SearchInput = ({ onSearch }) => (
  <div className={styles.container}>
    <Input type="text" placeholder="Buscar produtos..." className={styles.input} autofocus />
    <button type="button" onClick={onSearch}>
      <img src={searchIcon} title="Buscar" alt="Buscar" />
    </button>
  </div>
);

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
