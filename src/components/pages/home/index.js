import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from 'components/templates/page';
import Loading from 'components/atoms/loading';

import styles from './index.module.scss';

const Home = ({ loading }) => (
  <Page title="Mercado Livre - Busca">
    <div className={styles.container}>
      {loading ? <Loading /> : <h3>Encontre tudo que precisa.</h3>}
    </div>
  </Page>
);

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ search: { loading } }) => ({
  loading,
});

export default connect(mapStateToProps)(Home);
