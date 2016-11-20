/**
 * Created by zh355245849 on 2016/11/20.
 */
import {combineReducers} from 'redux'
import TodoReducer from './TodoReducer'
import UserReducer from './UserReducer'
const rootReducer = combineReducers({
    todos: TodoReducer,
    user: UserReducer
})
export default rootReducer