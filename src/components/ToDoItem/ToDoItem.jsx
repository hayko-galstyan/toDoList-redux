import styles from './style.module.css';
import {useDispatch,connect} from 'react-redux';
import {makeCompleted,makeActiveAgain,deleteTaskItem} from '../../redux/todos/actions';
const ToDoItem = ({task,...props}) => {
    const {enable,disable,deleteItem} = props;
    const currentClass = task.completed ? styles.done : styles.unDone
    return(
        <div className={styles.item}>
            <div className={styles.title}>
                <h3 className={currentClass}>{task.text}</h3>
            </div>
            <div className={styles.itemButtonSection}>
            {
                task.completed 
                ? <button onClick = {()=>enable(task.id)}>Activate</button>
                : <button onClick = {()=>disable(task.id)}>Done</button>
            }
            <button onClick={()=>deleteItem(task.id)}>x</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        enable:(id)=>dispatch(makeActiveAgain(id)),
        disable:(id)=>dispatch(makeCompleted(id)),
        deleteItem:(id)=>dispatch(deleteTaskItem(id))
    }
}
export default connect(null,mapDispatchToProps)(ToDoItem);