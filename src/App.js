import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ItemPreviewPage from './pages/item-preview/item-preview.component';

import { selectCurrentItem } from './redux/item/item.selectors';

import './App.scss';

const App = ({ currentItem }) => {

  return (
    <div className='App'>
    <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/preview' render={() => currentItem ? (<ItemPreviewPage />) : (<Redirect to='/' />)}  />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentItem: selectCurrentItem
});

export default connect(mapStateToProps)(App);