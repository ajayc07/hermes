import React from 'react';
import './ChatList.scss';

import GroupMessageComponent from '../Groups/Groups.js';
import DirectMessageComponent from '../DM/DirectMessage.js';
import ThreadMessageComponent from '../Threads/Threads.js';

export class ChatListComponent extends
    React.Component {
    render() {
        return (
            <div className="chat-list-container">
                <div className="app-tittle">
                    Hermes
                </div>
                <div className="chat-list">
                    <GroupMessageComponent/>
                    <DirectMessageComponent/>
                    <ThreadMessageComponent/>
                </div>
            </div>
        )
    }
}

export default ChatListComponent;