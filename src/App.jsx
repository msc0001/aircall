import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Inbox from './Pages/Inbox/index.jsx';
import Footer from './Components/Footer/index.jsx';

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
