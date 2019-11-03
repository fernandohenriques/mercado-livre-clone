import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.module.scss';

const SuperCard = ({
  className,
  children,
}) => (
  <div className={classnames(styles.container, className)}>
    {children}
  </div>
);

SuperCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

SuperCard.defaultProps = {
  className: null,
};

export default SuperCard;
