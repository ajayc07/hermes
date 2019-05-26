import React from 'react';
import './MessagePanel.scss';

import MessageDisplayComponent from '../Message-Display/MessageDisplay.js';
import SendMessageComponent from '../Send-Message/SendMessage.js';

export class MessagePanelComponent extends
    React.Component {
    render() {
        return (
            <div className="message-panel-container">
                <MessageDisplayComponent/>
                <SendMessageComponent/>
            </div>
        )
    }
}

export default MessagePanelComponent;