export const fetchTasks = (id) => {
    return async (dispatch) => {
        try {
            let url = `https://todos-project-api.herokuapp.com/todos/${id}/items/`
            const response =  await fetch(url, {
                    method: 'get',
                    headers: new Headers({
                      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNywiZXhwIjoxNjIwNDgxMTU2fQ.Nxr2GH0AKfDVA-3774LnCn-6UvgjOKru52vcDjjZNqw',
                    }),
            })
            const item = await response.json()
            console.log(item)
            dispatch({
                type: 'FETCH_TASKS',
                payload: item
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const createTask = (id, data) => {
    return async (dispatch) => {
        try {
            let url = `https://todos-project-api.herokuapp.com/todos/${id}/items/`
            const response =  await fetch(url, {
                    method: 'post',
                    headers: new Headers({
                      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNywiZXhwIjoxNjIwNDgxMTU2fQ.Nxr2GH0AKfDVA-3774LnCn-6UvgjOKru52vcDjjZNqw',
                      'Content-Type': 'application/json; charset=UTF-8'
                    }),
                    body: JSON.stringify({
                        name: data.name,
                        progress_percentage: data.progress_percentage
                    })
            })
            const item = await response.json()
            console.log(response)
            console.log(item)
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateTask = (idKanban, idTask, data) => {
    return async (dispatch) => {
        try {
            let url = `https://todos-project-api.herokuapp.com/todos/${idKanban}/items/${idTask}`
            const response =  await fetch(url, {
                    method: 'PATCH',
                    headers: {
                      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNywiZXhwIjoxNjIwNDgxMTU2fQ.Nxr2GH0AKfDVA-3774LnCn-6UvgjOKru52vcDjjZNqw',
                      'Content-Type': 'application/json; charset=UTF-8',
                    },
                    body: JSON.stringify({
                        name: data.name,
                        progress_percentage: data.progress_percentage,
                        target_todo_id: data.todo_id
                    })
            })
            const item = await response.json()
            console.log(response)
            console.log(item)
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteTask = (idKanban, idTask) => {
    return async (dispatch) => {
        try {
            let url = `https://todos-project-api.herokuapp.com/todos/${idKanban}/items/${idTask}`
            const response =  await fetch(url, {
                    method: 'delete',
                    headers: new Headers({
                      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNywiZXhwIjoxNjIwNDgxMTU2fQ.Nxr2GH0AKfDVA-3774LnCn-6UvgjOKru52vcDjjZNqw',
                      'Content-Type': 'application/json; charset=UTF-8'
                    })
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
}