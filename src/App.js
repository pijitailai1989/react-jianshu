import React, { Component } from 'react';
import { GlobalStyled } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <IconfontStyle />
        <GlobalStyled />
        <Provider store={store}>
           <BrowserRouter>
             <div>
             <Header />
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/detail/:id' component={Detail}></Route>
             </div> 
           </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
