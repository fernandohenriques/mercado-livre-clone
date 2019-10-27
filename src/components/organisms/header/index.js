import React from 'react';
import Input from 'components/atoms/input';

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
        <Input type="text" placeholder="Buscar produtos..." autofocus />
      </div>
    </header>
  );
};

export default Header;
