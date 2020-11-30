import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import MainPresenter from './MainPresenter';
import io from 'socket.io-client';
// const socket = io.connect('http://192.168.64.94:8080');
//////////////////////////////////////////////////////////////
// function openSocket() {
//   // Ensures only one connection is open at a time
//   if (webSocket !== undefined && webSocket.readyState !== WebSocket.CLOSED) {
//     writeResponse('WebSocket is already opened.');
//     return;
//   }

//   // Create a new instance of the websocket
//   const webSocket = new WebSocket('ws://localhost:8080/echo');

//   /**
//    * Binds functions to the listeners for the websocket.
//    */
//   webSocket.onopen = function (event) {
//     // For reasons I can't determine, onopen gets called twice
//     // and the first time event.data is undefined.
//     // Leave a comment if you know the answer.
//     if (event.data === undefined) return;

//     writeResponse(event.data);
//   };

//   webSocket.onmessage = function (event) {
//     writeResponse(event.data);
//   };

//   webSocket.onclose = function (event) {
//     writeResponse('Connection closed');
//   };
// }
// function send() {
//   var text = document.getElementById('messageinput').value;
//   webSocket.send(text);
// }

// function closeSocket() {
//   webSocket.close();
// }

// function writeResponse(text) {
//   messages.innerHTML += '<br/>' + text;
// }
const MainContainer = () => {
  // const webSocket = new WebSocket('ws://192.168.64.94:8080/echo');
  // const [messageList, setMessageList] = useState([]);
  // const [name, setName] = useState('');
  // const [value, setValue] = useState('');
  // useEffect(() => {
  //   socket.on('receive message', (message) => {
  //     console.log(message);
  //     setMessageList((messageList) => messageList.concat(message));
  //   });
  // }, []);

  // const submit = (e) => {
  //   e.preventDefault();
  //   webSocket.onopen = function () {
  //     alert('[open] 커넥션이 만들어졌습니다.');
  //     alert('데이터를 서버에 전송해봅시다.');
  //   };
  //   webSocket.send('My name is John');
  // };
  //////////////////////////////////////////////////////////
  return <MainPresenter></MainPresenter>;
  // return (

  //   <div className="App">
  //     <section className="chat-list">
  //       {messageList.map((item, i) => (
  //         <div key={i} className="message">
  //           <p className="username">{item.name.toUpperCase()}</p>
  //           <p className="message-text">{item.message}</p>
  //         </div>
  //       ))}
  //     </section>
  //     <form className="chat-form" onSubmit={(e) => submit(e)}>
  //       <div className="chat-inputs">
  //         <input
  //           type="text"
  //           autoComplete="off"
  //           onChange={(e) => setName(e.target.value)}
  //           value={name}
  //           placeholder="유저이름"
  //         />
  //         <input
  //           type="text"
  //           autoComplete="off"
  //           onChange={(e) => setValue(e.target.value)}
  //           value={value}
  //           placeholder="메세지입력하기"
  //         />
  //       </div>
  //       <button type="submit">입력하기</button>
  //     </form>
  //   </div>
  // );
};

export default MainContainer;
