import React from 'react';
import './AddGroup.scss';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addGroup } from '../../redux/actions';


export class AddGroupComponent extends
    React.Component {

    constructor(props) {
        super(props);
        this.state = { groupName: ''  , groupMember: '', redirect: false , allMembers: [], selectedMember: []};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMemberChange = this.handleMemberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() 
    {
        this.setState({allMembers : [
            {
                id : "dude01",
                name : "Goku",
            },
            {
                id : "dude02",
                name : "Naruto",
            },
            {
                id : "dude03",
                name : "Luffy",
            }
        ]})
        
    }

    handleNameChange(event) {
        this.setState({ groupName: event.target.value });
    }

    handleMemberChange(event) {
        this.setState({ groupMember: event.target.value });
    }

    handleSubmit(event) {

        this.props.addGroup(this.state);
        this.setState({
            redirect: true
        })
        event.preventDefault();
    }

    selectItem(person) {

        let selected = this.state.selectedMember;

        if(person) {
            selected = selected.concat(person)
            this.setState({selectedMember : selected})
        }

        this.setState({groupMember : ''})
        
    }

    render() {

        const redirect = this.state.redirect;

        if (redirect) {
            return <Redirect to='/home' />
        }

        return (
            <div className="add-group-container">
                <div className="header">
                    NEW GROUP
                </div>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="gName">Name</label>
                            <input type="text"  id="gName" value={this.state.groupName} onChange={this.handleNameChange} />
                            <label htmlFor="gMember">Members to be added</label>
                            <input type="text" placeholder="Search by name" id="gMember" value={this.state.groupMember} onChange={this.handleMemberChange} />
                            {this.state.selectedMember.length ? ' Added : ' + this.state.selectedMember.map((person) => person.name) : ''}
                            <div className="suggestion-container">{this.state.groupMember ? <div className="suggestions">
                                                         {this.state.allMembers.map(person => {
                                                             return <li key={person.id} onClick={() => this.selectItem(person)}>
                                                                {person.name}
                                                            </li>
                                                        })}
                                                    </div>: ''}
                            </div>
                        </div>
                        <div className="button-container">
                            <button onClick={(e) => this.handleSubmit(e)} >Cancel</button>
                            <button onClick={(e) => this.handleSubmit(e)} >Create Group</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addGroup: (state) => {
            console.log('State' , state);
            dispatch(addGroup(state))
        }
    }
}

export default connect (null,mapDispatchToProps)(AddGroupComponent);