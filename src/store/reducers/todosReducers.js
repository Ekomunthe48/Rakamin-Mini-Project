const initialState = {
    kanbanList: []
}

const kanbanListReducers =  (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LIST_KANBAN':
            return {
                ...state,
                kanbanList: action.payload
            }
        default:
            return state
    }
}

export default kanbanListReducers