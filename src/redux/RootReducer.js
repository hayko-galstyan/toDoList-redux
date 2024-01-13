import FilterReducer from './Filters/reducer';
import TodosReducer from './todos/reducer';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
    todos:TodosReducer,
    filter:FilterReducer
})