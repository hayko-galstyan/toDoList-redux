export function makeCompleted(id) {
    return{
        type:'COMPLETE_TASK',
        payload:id
    }
}

export function makeActiveAgain(id){
    return{
        type:"ACTIVE_TASK",
        payload:id
    }
}

export function deleteTaskItem(id) {
    return{
        type:"DELETE_TASK",
        payload:id
    }
}

export function addItem(text) {
    return{
        type:'ADD_ITEM',
        payload:text
    }
}
