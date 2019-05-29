import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, } from 'react-router-dom'

import ChatWrapperComponent from './component/Chat-Wrapper/ChatWrapper.js';
import AddGroupComponent from './component/Add-Group/AddGroup.js';

class App extends
  React.Component {
  render() {
    return (
      <ChatWrapperComponent/>
    );
  }
}

export default App;
