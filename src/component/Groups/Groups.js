import React from 'react';
import './Groups.scss';

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
                    name : "Saiyans",
                    members: ['dude01' , 'dude03' ,'dude09']
                },
                {
                    id : "group02",
                    name : "Leaf Village",
                    members: ['dude01' , 'dude04' ,'dude06']
                },
                {
                    id : "group01",
                    name : "Straw Hats"
                    ,members: ['dude01' , 'dude057' ,'dude034']
                }
            ]})
            
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
                                return <li key={group.id}>
                                            {group.name}
                                        </li>
                        })}
                    </ul>
                </div>
            )
        }
}

export default GroupMessageComponent;