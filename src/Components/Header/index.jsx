import React from 'react';
import { useSelector } from 'react-redux';
import AirCallIcon from '../../Common/Components/Icons/AirCallIcon';
import './styles.css';
import FilterIcon from '../../Common/Components/Icons/FilterIcon';
import { resetActivitiesUseCase } from '../../UseCases/getActivitiesUseCase';
import { setActiveTab } from '../../Store/actions';

const Header = () => {
  const activeTab = useSelector(state => state.activeTab);
  const openTab = (tabId) => setActiveTab(tabId);

  return (
    <header className='app-header'>
      <div className='logo'>
        <AirCallIcon />
      </div>
      <nav className='nav-links'>
        <ul>
          {['Inbox', 'Archived'].map((tab, index) => (
            <li 
              key={tab} 
              className={activeTab == index ? 'active' : ''}
              onClick={() => openTab(index)}
            >{tab}</li>
          ))}
          <li 
            className='btn' 
            title='Reset'
            onClick={resetActivitiesUseCase}>
              <FilterIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
