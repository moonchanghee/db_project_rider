import React, { useState } from 'react';
import App from './App';
import produce from 'immer';

const AppContainer = () => {
  const webSocket = new WebSocket('ws://192.168.64.94:8080/echo');
  const [store, setStore] = useState(false);
  const [data, setData] = useState([{}]);
  const [endlist, setendlist] = useState([{}]);
  const [session, setsession] = useState();
  const [check, setcheck] = useState(false);
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
    setsession,
    setStore,
    add,
    deleteItem,
    setendlist,
    setcheck,
  };
  const states = {
    session,
    store,
    data,
    webSocket,
    endlist,
    check,
  };
  return <App states={states} callbacks={callbacks} />;
};
export default AppContainer;
