import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ItemPreviewPage from './pages/item-preview/item-preview.component';

import { selectCurrentItem } from './redux/item/item.selectors';

import './App.scss';

class App extends React.Component {

  componentDidUpdate() {
    console.log(this.props.currentItem);
  }

  render() {
    return (
      <div className='App'>
        <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/preview' render={() => this.props.currentItem ? (<ItemPreviewPage />) : (<Redirect to='/' />)}  />
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentItem: selectCurrentItem
});

export default connect(mapStateToProps)(App);