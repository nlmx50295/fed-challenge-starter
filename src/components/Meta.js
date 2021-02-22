import React from 'react';
import styles from './Meta.module.css';

export default function Meta({time, size}) {
  return (
    <div className={styles.meta}>
      <span className={styles.time}>{time}</span>
      <span className={styles.size}>{size}</span>
    </div>   
  );
}