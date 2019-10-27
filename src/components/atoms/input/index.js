import React, { useRef, forwardRef, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.module.scss';

const Input = ({
  autofocus,
  className,
  ...restProps
}, ref) => {
  const inputRef = useRef();

  useEffect(() => {
    if (autofocus) inputRef.current.focus();
  }, [autofocus]);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} className={classnames(styles.input, className)} {...restProps} />;
};

Input.propTypes = {
  autofocus: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

Input.defaultProps = {
  autofocus: false,
  className: null,
};

export default forwardRef(Input);
