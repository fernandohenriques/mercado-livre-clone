import React from 'react';
import SearchInput from 'components/molecules/searchInput';

import logo from 'assets/images/logo.png';
import styles from './index.module.scss';

const Header = () => {
  const altText = 'Mercado Livre - Onde comprar e vender de Tudo';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <figure>
          <img src={logo} title={altText} alt={altText} />
        </figure>
        <SearchInput onSearch={() => console.log('saerch term')} />
      </div>
    </header>
  );
};

export default Header;
