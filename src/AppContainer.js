import React, { useState } from 'react';
import App from './App';

const AppContainer = (props) => {
  const [store, setStore] = useState(false);
  const callbacks = {
    setStore,
  };
  const states = {
    store,
  };
  return <App states={states} callbacks={callbacks} />;
};
export default AppContainer;
