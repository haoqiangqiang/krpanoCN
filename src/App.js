import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ExampleHeader from './example_header';
import Menu from './menu';
import News from './main/news';
import Examples from './main/examples';
import { Globalstyle } from "./style";
import './App.css';

function App() {
  return (
    <div className='app'>
        <Globalstyle />
        <BrowserRouter>
          <ExampleHeader />
          <Menu />
          <Route path='/news' exact component={News}></Route>
          <Route path='/examples' exact component={Examples}></Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
