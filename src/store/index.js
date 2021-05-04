import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import kanbanListReducers from './reducers/todosReducers'

const rootReducer = combineReducers({
    kanban: kanbanListReducers,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store