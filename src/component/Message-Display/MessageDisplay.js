import React from 'react';
import './MessageDisplay.scss';

import { connect } from 'react-redux';
import { dmMockMessage } from '../../mocks/dm-mock';
import { gMockMessage } from '../../mocks/g-mock';

export class MessageDisplayComponent extends
    React.Component {

        constructor(props) {
        
            super(props);
    
            this.state = {
                messageData : [],
                isDataLoaded: false,
                currentSelectedId: '',
                groupMember: []
            }

        }

        

        componentWillUpdate(nextProps, nextState) 
        {   

            if (nextState.isDataLoaded) {
                this.setState({isDataLoaded : false})
            }
            switch (nextProps.fromStore.selectedItems.type) {
            
                case 'dm' :
                    dmMockMessage.map((msg) => {
            
                        if (msg.personId === nextProps.fromStore.selectedItems.id && !this.state.isDataLoaded && this.state.currentSelectedId !== nextProps.fromStore.selectedItems.id ) {
                            
                            this.setState({currentSelectedId : msg.personId})
                            this.state.isDataLoaded = true;
                            this.setState({messageData : msg.messages && msg.messages.length > 0? msg.messages : []})
                        } 
                    });
                    break;

                case 'group' :
                    gMockMessage.map((msg) => {
                        
                        if (msg.gId === nextProps.fromStore.selectedItems.id && !this.state.isDataLoaded && this.state.currentSelectedId !== nextProps.fromStore.selectedItems.id ) {
                            
                            this.setState({groupMember : msg.groupMember})
                            this.setState({currentSelectedId : msg.gId})
                            this.state.isDataLoaded = true;
                            this.setState({messageData : msg.messages && msg.messages.length > 0? msg.messages : []})
                        } else {

                            gMockMessage.push({
                                gId : nextProps.fromStore.selectedItems.id,
                                groupMember: nextProps.fromStore.selectedItems.members,
                                messages : []
                            })
                            
                        }
                    });
                    break;
            }
            
            
        }

        render() {

            const {messageItems , selectedItems} = {...this.props.fromStore};
            

            if ( messageItems.type === 'message' && messageItems.id) {
                this.state.messageData.push(messageItems)
            }
            
            return (    
                <div className="message-display-container">
                    
                    <div className="message-header"> 
                        {selectedItems && (selectedItems.type === 'group' || selectedItems.type === 'dm' || selectedItems.type === 'thread') ? selectedItems.name : ''}
                        <div className="group-member">{selectedItems.type === 'group' && this.state.groupMember.length > 0 ? this.state.groupMember.map((member) => member.name + ' ') + ',You' : ''}</div>
                    </div>

                    <div className="messages">
                        {this.state.messageData.map(message => {
                            return <div key={message.id} className={message.toMessage ? 'to-messages' : 'from-messages'}>
                             <div className="group-send-by">{selectedItems.type === 'group' ? (message.from ? message.from : 'You') : ''}</div>
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