import React from 'react';
import './MessageDisplay.scss';

import Store from '../../redux/store';

const store = Store();

export class MessageDisplayComponent extends
    React.Component {

        constructor(props) {
        
            super(props);
    
            this.state = {
                messageData : []
            }

            console.log('Wow da',store.getState());
        }

        

        componentDidMount() 
        {
            
            store.subscribe(() => {
                console.log('Wow da',store.getState());
            })
            

            this.setState({messageData : [
                {
                    id : 'qwertyu',
                    content: 'Hello',
                    from: 'dude',
                    toMessage: false,
                    seenStatus: false
                },
                {
                    id : 'qwertdf',
                    content: 'Threads - Threads can be created for any message sent or received. Below is a mock design ',
                    from: 'dude',
                    toMessage: false,
                    seenStatus: false
                },                {
                    id : 'dsgertyu',
                    content: 'Threads - Threads can be created for any message sent or received. Below is a mock design Threads - Threads can be created for any message sent or received. Below is a mock design Threads - Threads can be created for any message sent or received. Below is a mock design Threads - Threads can be created for any message sent or received. Below is a mock design ',
                    from: 'dude',
                    toMessage: false,
                    seenStatus: false
                },                {
                    id : 'dshsfertyu',
                    content: 'Hello',
                    from: '',
                    toMessage: true,
                    delivered: false
                }
            ]})
            
        }

        render() {
            return (
                <div className="message-display-container">
                    <div className="messages">

                        {this.state.messageData.map(message => {
                            return <div key={message.id} className={message.toMessage ? 'to-messages' : 'from-messages'}>
                            {message.content}
                            </div>
                        })}

                    </div>
                </div>
            )
        }
}


export default MessageDisplayComponent;  