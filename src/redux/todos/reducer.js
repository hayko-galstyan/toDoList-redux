import initialState from './state';
function reducer(state=initialState,action) {
    switch(action.type){
        case "COMPLETE_TASK":
            console.log(action.payload)
            return {
                tasks:state.tasks.map(task=>
                    task.id === action.payload ? {...task,completed:true} : task
                )
            }
        case "ACTIVE_TASK":
            return {
                tasks:state.tasks.map(task=>
                    task.id  === action.payload ? {...task,completed:false} : task
                )
            }
        case "DELETE_TASK":
            return {
                tasks:state.tasks.filter(task=>task.id!==action.payload)
            }
        case "ADD_ITEM":
            return {
                tasks:[
                    {
                        id:state.tasks.length+1,
                        text:action.payload,
                        completed:false
                    },
                    ...state.tasks
                ]
            }
        default :
            return state;
    }
} 
export default reducer;