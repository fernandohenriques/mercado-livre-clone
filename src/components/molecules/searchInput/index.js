import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import Input from 'components/atoms/input';

import searchIcon from 'assets/images/ic-search.png';
import styles from './index.module.scss';

const SearchInput = ({ value, onSearch }) => {
  const [inputText, setInputText] = useState(value);

  useEffect(() => {
    setInputText(value);
  }, [value, setInputText]);

  const bounceOnSearch = debounce(onSearch, 1000);

  const handleInput = (e) => {
    setInputText(e.target.value);
    bounceOnSearch(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputText);
  };

  return (
    <div className={styles.container}>
      <Input
        type="text"
        value={inputText}
        placeholder="Buscar produtos..."
        className={styles.input}
        onChange={handleInput}
        autofocus />
      <button type="button" onClick={handleSearch}>
        <img src={searchIcon} title="Buscar" alt="Buscar" />
      </button>
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  value: '',
};

export default SearchInput;
