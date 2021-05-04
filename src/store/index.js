import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import taskReducers from './reducers/tasksReducers'
import kanbanListReducers from './reducers/todosReducers'

const rootReducer = combineReducers({
    kanban: kanbanListReducers,
    task: taskReducers,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store