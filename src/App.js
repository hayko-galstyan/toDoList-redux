import ToDoList from "./components/ToDoList";
import styles from './App.module.css';

function App() {
  return(
    <div className={styles.app}>
      <ToDoList/>
    </div>
  )
}

export default App;