import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ExampleHeader from './example_header';
import { Globalstyle } from "./style";
import './App.css';

function App() {
  return (
    <div className='app'>
        <Globalstyle />
        <ExampleHeader />
    </div>
  );
}

export default App;
