import React from 'react';

import Toggle from '../toggle/index';
import styles from '../toggle/toggle.module.css'
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className={styles.darkmodetoggle}>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
