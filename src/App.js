import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ItemPreviewPage from './pages/item-preview/item-preview.component';

import './App.scss';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/preview' component={ItemPreviewPage} />
          </Switch>
      </div>
    );
  }
}

export default App;