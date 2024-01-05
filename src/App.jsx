import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Header from './Components/Header/index.jsx';
import Inbox from './Pages/Inbox/index.jsx';
import Footer from './Components/Footer/index.jsx';
import store from './Store/index.js';

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <Header/>
        <main className="container-view">
          <Inbox />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
