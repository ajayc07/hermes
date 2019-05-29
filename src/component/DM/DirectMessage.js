import React from 'react';
import './DirectMessage.scss';

import { connect } from 'react-redux';
import { selectItem } from '../../redux/actions';

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
                name : "Goku",
                type : 'dm'
            },
            {
                id : "dude02",
                name : "Naruto",
                type : 'dm'
            },
            {
                id : "dude03",
                name : "Luffy",
                type : 'dm'
            }
        ]})
        
    }

    selectItem(selectedPerson) {
       
        const currentSelectedPerson = this.state.dmMessage.find((person) => {
            if(person.id === selectedPerson.id) {
                return selectedPerson;
            }
        })
        
        this.setState({selectedPerson : currentSelectedPerson});
        this.props.selectItem(currentSelectedPerson);
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
                            return <li key={person.id}  className= {(this.props.fromStore.selectedItems.type ==='dm' && person.id === this.props.fromStore.selectedItems.id) ? 'selected-li' : ''} onClick={() => this.selectItem(person)}>
                                        {person.name}
                                    </li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
            fromStore : state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        selectItem: (state) => {
            dispatch(selectItem(state))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DirectMessageComponent);