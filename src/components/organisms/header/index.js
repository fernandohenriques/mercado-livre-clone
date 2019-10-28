import React from 'react';
import Router from 'next/router';
import SearchInput from 'components/molecules/searchInput';

import logo from 'assets/images/logo.png';
import styles from './index.module.scss';

const Header = () => {
  const altText = 'Mercado Livre - Onde comprar e vender de Tudo';

  const handleSearch = (term) => {
    if (term && term !== '') Router.push(`/items?search=${term}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <figure>
          <img src={logo} title={altText} alt={altText} />
        </figure>
        <SearchInput onSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
