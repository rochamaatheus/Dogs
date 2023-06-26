import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  function handleLoad({ target }) {
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}></div>
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;
