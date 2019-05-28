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