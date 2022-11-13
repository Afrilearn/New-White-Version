import React from 'react';
import Cards from '../Cards';

import styles from './flipable.module.css';

const FlipableCard = ({flippers}) => {
  return (
    <div className={styles.flippablecardcontainer}>
        <Cards flippers={flippers}/>
    </div>
  )
}

export default FlipableCard