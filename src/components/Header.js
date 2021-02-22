import React from 'react';
import styles from './Header.module.css';

export default function Header({title, avatarTitle, avatar}) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.avatar} alt={avatarTitle} src={`img/avatars/${avatar}`} />
    </header>      
  );
}