import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import Input from 'components/atoms/input';

import searchIcon from 'assets/images/ic-search.png';
import styles from './index.module.scss';

const SearchInput = ({ onSearch }) => {
  const handleInput = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Input
        type="text"
        placeholder="Buscar produtos..."
        className={styles.input}
        onChange={debounce((e) => handleInput(e), 750)}
        autofocus />
      <button type="button" onClick={onSearch}>
        <img src={searchIcon} title="Buscar" alt="Buscar" />
      </button>
    </div>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
