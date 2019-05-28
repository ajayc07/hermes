import React from 'react';
import './Groups.scss';


import { connect } from 'react-redux';
import { selectItem } from '../../redux/actions';

export class GroupMessageComponent extends
    React.Component {

        constructor(props) {

            super(props);
    
            this.state = {
                gMessage: []
            }
        }
    
        componentDidMount() 
        {
            this.setState({gMessage : [
                {
                    id : "group01",
                    type: "group",
                    name : "Saiyans",
                    members: ['dude01' , 'dude03' ,'dude09']
                },
                {
                    id : "group02",
                    type: "group",
                    name : "Leaf Village",
                    members: ['dude01' , 'dude04' ,'dude06']
                },
                {
                    id : "group03",
                    type: "group",
                    name : "Straw Hats"
                    ,members: ['dude01' , 'dude057' ,'dude034']
                }
            ]})
            
        }

        selectItem(selectedGroup) {
       
            console.log('selection',this.props.fromStore);
            
            const currentselectedGroup = this.state.gMessage.find((group) => {
                if(group.id === selectedGroup.id) {
                    return selectedGroup;
                }
            })
            
            this.setState({selectedGroup : currentselectedGroup});
            this.props.selectItem(currentselectedGroup);
         }
    
        render() {
            return (
                <div className="group-container">
                    <div className="group-header">
                        <h3>Groups</h3>
                        <button className="icon">+</button>
                    </div>
                    <ul className="group-list">
                        {this.state.gMessage.map(group => {
                                return <li key={group.id} className= {(this.props.fromStore.type ==='group' && group.id === this.props.fromStore.id) ? 'selected-li' : ''} onClick={() => this.selectItem(group)}>
                                            {group.name} 
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

export default connect (mapStateToProps,mapDispatchToProps)(GroupMessageComponent);