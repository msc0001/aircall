import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';

import Header from './Components/Header/index.jsx';
import Inbox from './Pages/Inbox/index.jsx';
import Footer from './Components/Footer/index.jsx';
import store from './Store/index.js';
import Archived from './Pages/Archived/index.jsx';
import CallDetails from './Components/CallDetails/index.jsx';

const Content = () => {
  const activeTab = useSelector(state => state.activeTab);

  if (activeTab == 1) {
    return <Archived />
  }

  return <Inbox />
}

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header/>
        <main className="container-view">
          <Content />
          <CallDetails />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
