import React from 'react';
import './App.scss';


import ChatListComponent from './component/Chat-List/ChatList.js';
import MessagePanelComponent from './component/Message-Panel/MessagePanel.js';



function App() {
  return (

      <div className="App">
        <ChatListComponent/>
        <MessagePanelComponent/>
      </div>

  );
}

export default App;
