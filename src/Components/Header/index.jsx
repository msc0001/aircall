import React from 'react';
import AirCallIcon from '../../Common/Components/Icons/AirCallIcon';
import './styles.css';
import FilterIcon from '../../Common/Components/Icons/FilterIcon';

const Header = () => {
  return (
    <header className='app-header'>
      <div className='logo'>
        <AirCallIcon />
      </div>
      <nav>
        <ul>
          <li className={''}>Inbox</li>
          <li>All calls</li>
          <li><FilterIcon /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
