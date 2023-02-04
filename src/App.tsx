import React from 'react';
import styled from 'styled-components';
import Routers from './routes';

const Appdiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <Appdiv>
      <Routers />
    </Appdiv> 
  )
}

export default App;
