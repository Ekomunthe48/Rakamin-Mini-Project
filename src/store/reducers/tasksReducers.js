let initialState = {
    taskLists: []
}

const taskReducers =  (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TASKS':
            return {
                ...state,
                taskLists: action.payload
            }
        default:
            return state
    }
}

export default taskReducers