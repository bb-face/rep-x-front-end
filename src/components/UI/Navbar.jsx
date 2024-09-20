import React from 'react';

import UserWallet from '../../components/UserWallet';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Logo />
        </div>
        
        <div>
          <UserWallet />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;