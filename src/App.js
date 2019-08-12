import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';

import './App.scss';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <Route path='/' component={Homepage} />
      </div>
    );
  }
}

export default App;