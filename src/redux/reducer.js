const initalMessageState = [{
    id : '',
    content: '',
    from: '',
    toMessage: false,
    seenStatus: false
}];

const messageReducer = (state = initalMessageState, action) => {

    switch (action.type) {
        case 'ADD_NEW_MESSAGE':

           let sendMessage = {
                id : 'qwertdf',
                content: action.payload,
                from: 'dude',
                toMessage: false,
                seenStatus: false
            }
            
            return state.concat([sendMessage]);

        default:
            return state;
    }
};

export default messageReducer;