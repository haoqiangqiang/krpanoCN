import React, {useEffect} from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import ExampleHeader from './example_header';
import Menu from './menu';
import News from './main/news/news';
import Examples from './main/example/examples';
import { Globalstyle } from "./style";
import './App.css';
import {  useDispatch } from 'react-redux';
import { actionCreators } from './main/example/store';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('app dispatch');
    dispatch(actionCreators.fetchExampleData());
  })
  return (
    <div className='app'>
        {/* <Provider store={store}> */}
          <Globalstyle />
          <BrowserRouter>
            <ExampleHeader />
            <Menu />
            <Route path="/" render={() => <Redirect to="/examples" />}></Route>
            <Route path='/news' exact component={News}></Route>
            <Route path='/examples' exact component={Examples}></Route>
          </BrowserRouter>
        {/* </Provider> */}
    </div>
  );
}

export default App;
