import React from 'react';
import './DirectMessage.scss';

export class DirectMessageComponent extends
    React.Component {

    constructor(props) {

        super(props);

        this.state = {
            dmMessage: []
        }
    }

    componentDidMount() 
    {
        this.setState({dmMessage : [
            {
                id : "dude01",
                name : "Goku"
            },
            {
                id : "dude02",
                name : "Naruto"
            },
            {
                id : "dude01",
                name : "Luffy"
            }
        ]})
        
    }

    render() {
        return (
            <div className="dm-container">
                <div className="dm-header">
                    <h3>Direct Message</h3>
                    <button className="icon">+</button>
                </div>
                <ul className="dm-list">
                    {this.state.dmMessage.map(person => {
                            return <li key={person.id}>
                                        {person.name}
                                    </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default DirectMessageComponent;