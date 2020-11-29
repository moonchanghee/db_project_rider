import React, { useState } from 'react';
import App from './App';
import produce from 'immer';

const AppContainer = () => {
  const [store, setStore] = useState(false);
  const [data, setData] = useState([
    {
      gu: 'gu',
      dong: 'dong',
      price: 'price',
    },
  ]);
  const add = (gu, dong, price) => {
    let newData = produce(data, (draft) => {
      draft.push({ gu: gu, dong: dong, price: price });
    });
    setData(newData);
  };
  const callbacks = {
    setStore,
    add,
  };
  const states = {
    store,
    data,
  };
  return <App states={states} callbacks={callbacks} />;
};
export default AppContainer;
