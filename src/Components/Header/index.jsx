import React from 'react';
import AirCallIcon from '../../Common/Components/Icons/AirCallIcon';
import './styles.css';
import FilterIcon from '../../Common/Components/Icons/FilterIcon';
import { resetActivitiesUseCase } from '../../UseCases/getActivitiesUseCase';

const Header = () => {
  return (
    <header className='app-header'>
      <div className='logo'>
        <AirCallIcon />
      </div>
      <nav className='nav-links'>
        <ul>
          <li className={''}>Inbox</li>
          <li>All calls</li>
          <li className='btn' onClick={resetActivitiesUseCase}><FilterIcon /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
