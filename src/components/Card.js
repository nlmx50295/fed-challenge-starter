import React from 'react';
import Hero from './Hero';
import Workouts from './Workouts';
import Header from './Header';
import Meta from './Meta';
import ViewDetails from './ViewDetails';
import styles from './Card.module.css';

export default function Card({id, type, hero, title, avatar, avatarTitle, time, size, workoutsNumber, activeCardId, dispatchActiveCardId}) {

  return (
    <div onClick={() => dispatchActiveCardId({type: 'SET_ACTIVE_CARD_ID', payload: id})} className={`${styles.card} ${activeCardId === id ? styles.cardActive : ''}`}>
      <div className={styles.banner}>
        <Hero hero={hero} title={title} />
        {type === 'playlist'
          ? <Workouts workoutsNumber={workoutsNumber} />
          : null
        }
      </div>
      <div className={styles.content}>
        <Header title={title} avatarTitle={avatarTitle} avatar={avatar} />
        {type === 'single' 
          ? <>
              <Meta time={time} size={size} />
              <ViewDetails />
            </>
          : null 
        }
      </div>
    </div>
  );
}