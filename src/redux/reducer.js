const initalMessageState = [{}];

const messageReducer = (state = initalMessageState, action) => {

    const newState = { ...state };

    switch (action.type) {
        case 'ADD_NEW_MESSAGE':

            let sendMessage = {
                ...newState,
                type: 'message',
                id: 'message01' + Math.random(1, 1000),
                content: action.payload,
                from: 'dude',
                toMessage: true,
                seenStatus: false
            }

            return sendMessage;

        case 'SELECT_ITEM':
            console.log('Payload', action.payload);

            let selectedItem = {};

            if (action.payload.type === 'group') {

                selectedItem = {
                    ...newState,
                    id: action.payload.id,
                    members: action.payload.members,
                    name: action.payload.name,
                    type: action.payload.type,
                }
            } else if (action.payload.type === 'dm'|| action.payload.type === 'thread') {

                selectedItem = {
                    ...newState,
                    id: action.payload.id,
                    name: action.payload.name,
                    type: action.payload.type,
                }
            }

            return selectedItem;

        default:
            return state;
    }
};

export default messageReducer;