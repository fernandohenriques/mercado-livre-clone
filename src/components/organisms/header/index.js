import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import debounce from 'lodash.debounce';
import SearchInput from 'components/molecules/searchInput';

import logo from 'assets/images/logo.png';
import styles from './index.module.scss';

const Header = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const url = new URL(document.location);

    if (url.searchParams.has('search')) setTerm(url.searchParams.get('search'));
  }, [setTerm]);

  const goToHome = () => {
    Router.push('/');
  };

  const bounceOnSearch = debounce((search) => {
    Router.push(`/items?search=${search}`);
  }, 750);

  const handleSearch = (search) => {
    if (search && search !== '') bounceOnSearch(search);
  };

  const altText = 'Mercado Livre - Onde comprar e vender de Tudo';

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
