import { useDispatch } from 'react-redux';
import styles from './style.module.css';
import { ChangeFilter } from '../../redux/Filters/action';
const Filter = (props) => {
    const dispatch = useDispatch();
    const changeFilter = (e) => {
        dispatch(ChangeFilter(e.target.value))
    }
    return(
        <div className={styles.filter}>
            <input value="All" type="checkbox" onChange={(e)=>changeFilter(e)}/>All
            <input value="Active"type="checkbox" onChange={(e)=>changeFilter(e)}/>Active
            <input value="Comleted" type="checkbox" onChange={(e)=>changeFilter(e)}/>Comleted
        </div>
    )
}
export default Filter;