import React, { useState } from 'react';
import App from './App';
import produce from 'immer';

const AppContainer = () => {
  const [store, setStore] = useState(false);
  const [data, setData] = useState([{}]);
  const add = (id, gu, dong, price) => {
    let newData = produce(data, (draft) => {
      draft.push({ id: id, gu: gu, dong: dong, price: price });
    });
    setData(newData);
  };

  const deleteItem = (id) => {
    let index = data.findIndex((todo) => todo.id === id);
    let newData = produce(data, (draft) => {
      draft.splice(index, 1);
    });
    setData(newData);
  };
  const callbacks = {
    setStore,
    add,
    deleteItem,
  };
  const states = {
    store,
    data,
  };
  return <App states={states} callbacks={callbacks} />;
};
export default AppContainer;
