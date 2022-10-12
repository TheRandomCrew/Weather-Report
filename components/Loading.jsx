import React from 'react';
import styles from '../styles/Loading.module.css';

const Loading = () => (
  <div className={styles['loading-container']}>
    <div className={styles['loading-spinner']}></div>
  </div>
);

export default Loading;
