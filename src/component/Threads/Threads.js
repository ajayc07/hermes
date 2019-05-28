import React from 'react';
import './Threads.scss';

import { connect } from 'react-redux';
import { selectItem } from '../../redux/actions';

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
                    type : 'thread'
                },
                {
                    id : "thread878",
                    name : "Dragon Ball",
                    type : 'thread'
                }
            ]})
            
        }

        selectItem(selectedThread) {
       
            const currentselectedThread = this.state.threads.find((thread) => {
                if(thread.id === selectedThread.id) {
                    return selectedThread;
                }
            })
            
            this.setState({selectedThread : currentselectedThread});
            this.props.selectItem(currentselectedThread);
         }

        render() {
            return (
                <div className="thread-container">
                    <div className="thread-header">
                        <h3>All Threads</h3>
                    </div>                
                    <ul className="thread-list">
                        {this.state.threads.map(thread => {
                                return <li key={thread.id} className= {(this.props.fromStore.type ==='thread' && thread.id === this.props.fromStore.id) ? 'selected-li' : ''} onClick={() => this.selectItem(thread)}>
                                            {thread.name}
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

export default connect (mapStateToProps,mapDispatchToProps)(ThreadMessageComponent);