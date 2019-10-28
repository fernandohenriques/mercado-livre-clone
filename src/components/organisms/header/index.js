import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import SearchInput from 'components/molecules/searchInput';

import logo from 'assets/images/logo.png';
import styles from './index.module.scss';

const Header = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const url = new URL(document.location);

    if (url.searchParams.has('search')) setTerm(url.searchParams.get('search'));
  }, [setTerm]);

  const altText = 'Mercado Livre - Onde comprar e vender de Tudo';

  const goToHome = () => {
    Router.push('/');
  };

  const handleSearch = (search) => {
    if (search && search !== '') Router.push(`/items?search=${search}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={goToHome} onKeyDown={goToHome} role="button" tabIndex={0}>
          <figure>
            <img src={logo} title={altText} alt={altText} />
          </figure>
        </div>
        <SearchInput value={term} onSearch={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
