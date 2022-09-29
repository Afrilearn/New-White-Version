import React from 'react';

import Toggle from '../toggle/index';
import useDarkMode from 'use-dark-mode';

const DarkModeCommands = () => {
  const darkMode = useDarkMode(false);

  return (
    <span>
      Dark Mode is <code>{darkMode.value ? 'enabled' : 'disabled'}</code>. Turn
      it{' '}
      <button onClick={darkMode.toggle}>{darkMode.value ? 'off' : 'on'}</button>
      .
    </span>
  );
};

export default DarkModeCommands;