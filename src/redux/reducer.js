const initalMessageState = {
    messageItems : {
        type: '',
        id: '',
        content: '',
        from: '',
        toMessage: false,
        seenStatus: false
    },
    selectedItems : {
        id: '',
        members: '',
        name: '',
        type: ''
    }
};

const messageReducer = (state = initalMessageState, action) => {

    const newState = { ...state };

    switch (action.type) {
        case 'ADD_NEW_MESSAGE':

            let sendMessage = {
                type: 'message',
                id: 'message01' + Math.random(1, 1000),
                content: action.payload,
                from: 'dude',
                toMessage: true,
                seenStatus: false
            }

            return {...newState,messageItems : sendMessage};

        case 'SELECT_ITEM':
            console.log('Payload', action.payload);

            let selectedItem = {};

            if (action.payload.type === 'group') {

                selectedItem = {
                    id: action.payload.id,
                    members: action.payload.members,
                    name: action.payload.name,
                    type: action.payload.type,
                }
            } else if (action.payload.type === 'dm'|| action.payload.type === 'thread') {

                selectedItem = {
                    id: action.payload.id,
                    name: action.payload.name,
                    type: action.payload.type,
                }
            }
            
            return {...newState,selectedItems :selectedItem};

        default:
            return state;
    }
};

export default messageReducer;