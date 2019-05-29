import React from 'react';
import './MessageDisplay.scss';

import { connect } from 'react-redux';
import { Store } from '../../redux/store';

export class MessageDisplayComponent extends
    React.Component {

        constructor(props) {
        
            super(props);
    
            this.state = {
                messageData : []
            }

        }

        

        componentDidMount() 
        {   

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
            console.log('storeValue' , this.props.fromStore);
            const {messageItems , selectedItems} = {...this.props.fromStore};
            
            if ( messageItems.type === 'message' && messageItems.id && selectedItems.id === '') {
                this.state.messageData.push(messageItems)
            }
            
            return (    
                <div className="message-display-container">
                    
                    <div className="message-header"> 
                        {selectedItems && (selectedItems.type === 'group' || selectedItems.type === 'dm' || selectedItems.type === 'thread') ? selectedItems.name : ''}
                    </div>

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

const mapStateToProps = (state) => {

    return {
        fromStore : state
    }
}

export default connect (mapStateToProps)(MessageDisplayComponent);  