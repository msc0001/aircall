import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header/index.jsx';
import Inbox from './Pages/Inbox/index.jsx';
import Footer from './Components/Footer/index.jsx';


/**
 * As the boiler plate is using react 16.3 so handling component
 * cycles with class based components approach.
 * 
 * Else we would have used hooks in the application
 */


const App = () => {
  return (
    <div className='container'>
      <Header/>
      <main className="container-view">
        <Inbox />
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
