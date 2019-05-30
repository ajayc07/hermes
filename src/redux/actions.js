export function addMessage(data) {

    return { 
        type: 'ADD_NEW_MESSAGE',
        payload: data 
    }
}

export function selectItem(data) {

    return { 
        type: 'SELECT_ITEM',
        payload: data 
    }
}

export function addGroup(data) {

    return { 
        type: 'ADD_NEW_GROUP',
        payload: data 
    }
}