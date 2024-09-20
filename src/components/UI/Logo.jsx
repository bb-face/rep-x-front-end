import React from 'react';

import logoWhite from '../../assets/logo-white.svg';
import logoColor from '../../assets/logo-color.svg';
import logoBlack from '../../assets/logo-black.svg';
import logoNoBackground from '../../assets/logo-no-background.svg';

function Logo() {
  return (
    <a href="/">
      <img src={logoWhite} width={150} className="margin-auto" />
    </a>
  );
}

export default Logo;
