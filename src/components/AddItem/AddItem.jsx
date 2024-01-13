import { useDispatch } from "react-redux";
import {useState} from 'react';
import styles from './styles.module.css';
import { addItem } from "../../redux/todos/actions";
const AddItem = () => {
    const dispatch = useDispatch();
    const [text,setText] = useState("")
    const handlePress = (e) => {
        if(e.key === 'Enter'){
            dispatch(addItem(text))
        }
    }
    return(
        <div className={styles.addItem}>
            <input
                type='text'
                placeholder='Write task'
                onChange={(e)=>setText(e.target.value)}
                onKeyPress={(e)=>handlePress(e)}
            />  
        </div>
    )
}
export default AddItem;