import React from 'react';
import styles from './header.module.css';
import ImageSlider from './../../ImageSlider/index';
import { sliderData } from './../../ImageSlider/sliderData';

const AboutHeaders = () => {
  return (
    <div className={styles.aboutheaderwrapper}>
        <div className={styles.innercontainer}>
              <div className={styles.contentwrapper}>
                  <h1>Africa’s best-loved e-learning brand.</h1>

                  <h3>Delivering affordable, world-class education for Africans, anywhere.</h3>
              </div>
              <div className={styles.slidderwrapper}>
                 <ImageSlider slides={sliderData}/>
              </div>
        </div>
    </div>
  )
}

export default AboutHeaders