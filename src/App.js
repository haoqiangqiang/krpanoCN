import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ExampleHeader from './example_header';
import Menu from './menu';
import News from './main/news/news';
import Examples from './main/example/examples';
import { Globalstyle } from "./style";
import './App.css';


function App() {

  return (
    <div className='app'>
        <Provider store={store}>
          <Globalstyle />
          <BrowserRouter>
            <ExampleHeader />
            <Menu />
            <Route path="/" render={() => <Redirect to="/examples" />}></Route>
            <Route path='/news' exact component={News}></Route>
            <Route path='/examples' exact component={Examples}></Route>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
