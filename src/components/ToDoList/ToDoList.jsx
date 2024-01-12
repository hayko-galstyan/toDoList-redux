import { connect } from "react-redux";
import styles from './style.module.css';
import ToDoItem from "../ToDoItem/ToDoItem";
import AddItem from "../AddItem";
const ToDoList = (props) => {
    return(
        <> 
            <h3 align="center">To Do Lists</h3>
            <AddItem/>
            {
                props.tasks.map(task=>{
                    return(
                        <ToDoItem key={task.id} task={task}/>
                    )    
                })
            }
        </>
    )
}
const mapStateProps = (state) => {
    return {
        tasks:state.tasks,
        count:state.count
    }
}
export default connect(mapStateProps)(ToDoList);