import React, { useEffect, useState } from "react";
import { WebsocketMockAdapter } from "./core/emmiter";

import "./App.css";

function App({ websocket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const websocket = new WebsocketMockAdapter((data) => {
      messages.push(data);
      setMessages(messages);
    }, 3000);
  }, []);

  const getUsers = () => console.log(websocket.getUsers());

  return (
    <div className="App">
      <span>JS Junior Task</span>
      <button onClick={getUsers}>get users</button>
    </div>
  );
}

export default App;
