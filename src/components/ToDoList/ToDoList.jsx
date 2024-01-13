import { connect, useSelector } from "react-redux";
import styles from './style.module.css';
import ToDoItem from "../ToDoItem/ToDoItem";
import AddItem from "../AddItem";
import Filter  from "../Filter";
const ToDoList = (props) => {
    const current = useSelector(state=>state.filter.currentFilter);
    const tasks = useSelector(state=>{
        switch(current){
            case 'All':
                return state.todos.tasks
            case 'Active':
                return state.todos.tasks.filter(task=>!task.completed)
            case 'Completed':
                return state.todos.tasks.filter(task=>task.completed)
            default :
                return state.todos.tasks
        }
    });
    return(
        <> 
            <h3 align="center">To Do Lists</h3>
            <Filter/>
            <AddItem/>
            {
                tasks.map(task=>{
                    return(
                        <ToDoItem key={task.id} task={task}/>
                    )    
                })
            }
        </>
    )
}

export default ToDoList;