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
    },
    newGroup : {
        type: '',
        id : '',
        name:'',
        member: []
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
                from: '',
                toMessage: true,
                seenStatus: false
            }

            return {...newState, messageItems : sendMessage};

        case 'SELECT_ITEM':
           
            newState.messageItems = initalMessageState.messageItems
            newState.newGroup = initalMessageState.newGroup
            let selectedItem = {};

            if (action.payload.type === 'group') {
                console.log('Groups' , action.payload);
                
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
            
            return {...newState, selectedItems :selectedItem};

        case 'ADD_NEW_GROUP':
            let newGroup = {};
            console.log('Payload', action.payload);
            newGroup = {
                type: 'group',
                id: 'group' + Math.random(1, 1000),
                name:  action.payload.groupName,
                members: action.payload.selectedMember
            }
            return {...newState, newGroup :newGroup};
        default:
            return state;
    }
};

export default messageReducer;