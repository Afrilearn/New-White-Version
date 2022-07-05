import React from 'react';

import styles from '../../../styles/parentdashboard.module.css';
import ClassContent from './extra/classContent';
import GeneratePerformance from './extra/generatePerformance';
import ParentHeader from './extra/header';
import Middlebar from './extra/middlebar';
import Proaddvert from './extra/proaddvert';


const Parent = () => {
  return (
    <div className={styles.parentcomponentwrapper}>
           <div className={styles.innerparentwrapper}>
                <ParentHeader />
                <Middlebar />
                <Proaddvert />
           </div>
            <GeneratePerformance />
            <ClassContent />
    </div>
  )
}

export default Parent