import React from 'react';

import logo from 'assets/images/logo.png';
import styles from './index.module.scss';

const Header = () => {
  const altText = 'Mercado Livre - Onde comprar e vender de Tudo';

  return (
    <header className={styles.header}>
      <figure>
        <img src={logo} title={altText} alt={altText} />
      </figure>
    </header>
  );
};

export default Header;
