export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            let url = `https://todos-project-api.herokuapp.com/todos`
            const response =  await fetch(url, {
                    method: 'get',
                    headers: new Headers({
                      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNywiZXhwIjoxNjIwNDgxMTU2fQ.Nxr2GH0AKfDVA-3774LnCn-6UvgjOKru52vcDjjZNqw',
                    }),
            })
            const item = await response.json()
            dispatch({
                type: 'FETCH_LIST_KANBAN',
                payload: item
            })
        } catch (error) {
            console.log(error)
        }
    }
}