import React from 'react';
import './ChatWrapper.scss';

import ChatListComponent from '../Chat-List/ChatList.js';
import MessagePanelComponent from '../Message-Panel/MessagePanel';



export class ChatWrapperComponent extends
    React.Component {
    render() {
        return (
            <div className="App">
                <ChatListComponent />
                <MessagePanelComponent />
            </div>
        )
    }
}

export default ChatWrapperComponent;