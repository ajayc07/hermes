import React from 'react';
import './DirectMessage.scss';

export class DirectMessageComponent extends
    React.Component {

    selectedPerson = null;

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
                id : "dude03",
                name : "Luffy"
            }
        ]})
        
    }

    selectDM(selectedPerson) {
        this.state.dmMessage.map((person) => {
            if(person.id === selectedPerson.id) {
                this.state.selectedPerson = person;
            }
        })
        console.log('Legends', this.state.selectedPerson);
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
                            return <li key={person.id} onClick={() => this.selectDM(person)}>
                                        {person.name}
                                    </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default DirectMessageComponent;