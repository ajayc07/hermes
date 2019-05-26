import React from 'react';
import './Threads.scss';

export class ThreadMessageComponent extends
    React.Component {

        constructor(props) {

            super(props);
    
            this.state = {
                threads: []
            }
        }
    
        componentDidMount() 
        {
            this.setState({threads : [
                {
                    id : "thread099",
                    name : "One piece",
                },
                {
                    id : "thread878",
                    name : "Dragon Ball",
                }
            ]})
            
        }
        render() {
            return (
                <div className="thread-container">
                    <div className="thread-header">
                        <h3>All Threads</h3>
                    </div>                
                    <ul className="thread-list">
                        {this.state.threads.map(thread => {
                                return <li key={thread.id}>
                                            {thread.name}
                                    </li>
                        })}
                    </ul>
                </div>
            )
        }
}

export default ThreadMessageComponent;