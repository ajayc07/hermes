import React from 'react';
import './SendMessage.scss';

import { connect } from 'react-redux';
import { addMessage } from '../../redux/actions';

export class SendMessageComponent extends
    React.Component {

    constructor(props) {
        
        super(props);

        this.state = {
            currentMessage : ''
        }

        this.addMessage = this.addMessage.bind(this);
    }

    addMessage() {
        
        if (this.state.currentMessage !== '' && this.state.currentMessage !== ' ') {

            this.props.addMessage(this.state);
            this.setState({currentMessage : ''});
        }
    }

    handleChange(event) {
        this.setState({currentMessage : event.target.value})
    }

    render() {
        return (
            <div className = "send-message-container">
                <div className = "input-button">
                    <textarea value= {this.state.currentMessage} placeholder="Type your message here" onChange= {this.handleChange.bind(this)}></textarea>
                    <button onClick={(e) => this.addMessage(this.state)} >Send</button>
                </div>
            </div>
        )
    }
    
}

const mapDispatchToProps = (dispatch) => {

    return {
        addMessage: (state) => {
            dispatch(addMessage(state.currentMessage))
        }
    }
}


export default connect(null,mapDispatchToProps)(SendMessageComponent);