import React from 'react';
import styles from './Workouts.module.css';

export default function Workouts({workoutsNumber}) {
  return (
    <div class={styles.workouts}>
      <div class={styles.workoutsNumber}>{workoutsNumber}</div>
      <div class={styles.workoutsText}>Workouts</div>
      <img alt="Workout Playlist" src="img/icons/icn_playlist.png" />
    </div>            
  );
}