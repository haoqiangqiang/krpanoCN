import React from 'react';
import styled from 'styled-components';
import Routers from './routes';
import { Provider } from 'react-redux';
import store from './store';
const Appdiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Appdiv>
          <Routers />
        </Appdiv>
      </Provider>
    </React.StrictMode>
  )
}

export default App;
