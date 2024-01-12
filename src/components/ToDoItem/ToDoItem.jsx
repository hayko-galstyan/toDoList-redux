import styles from './style.module.css';
import {connect} from 'react-redux';
import {makeCompleted,makeActiveAgain,deleteTaskItem} from '../../redux/actions';
const ToDoItem = ({task,...props}) => {
    const {dispatch} = props;
    const currentClass = task.completed ? styles.done : styles.unDone
    return(
        <div className={styles.item}>
            <div className={styles.title}>
                <h3 className={currentClass}>{task.text}</h3>
            </div>
            <div className={styles.itemButtonSection}>
            {
                task.completed 
                ? <button onClick = {()=>dispatch(makeActiveAgain(task.id))}>unDone</button>
                : <button onClick = {()=>dispatch(makeCompleted(task.id))}>Done</button>
            }
            <button onClick={()=>dispatch(deleteTaskItem(task.id))}>Delete</button>
            </div>
        </div>
    )
}
export default connect()(ToDoItem);