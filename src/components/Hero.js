import React from 'react';
import styles from './Hero.module.css';

export default function Hero({hero, title}) {
  return (
    <img className={styles.hero} alt={title} src={`img/heroes/${hero}`} />
  );
}