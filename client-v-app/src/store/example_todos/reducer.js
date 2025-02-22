const initialState = {
    todos: [
        {id: 0, text: 'Learn JS', completed: true},
        {id: 1, text: 'Learn JS', completed: false},
    ],
    filters: {
        status: 'All',
        colors: []
    }
}

//

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoAdded': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nextTodoId(state.todos),
                        text: action.payload,
                        completed: false
                    }
                ]
            }
        }
        case 'todos/Toggled': {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload) {
                        return todo
                    }
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                })
            }
        }

        case 'filters/statusFilterChanged': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
        }
        // case 'todo/colorSelected': {
        //     return {
        //         ...state,
        //         todos: state.todos.map
        //
        //
        //     }
        // }
    }
}