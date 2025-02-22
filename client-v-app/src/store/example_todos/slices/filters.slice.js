const initialState = {
    status: 'All',
    colors: [],
}

function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'filters/statusFilterChanged': {
            return {
                ...state.filters,
                status: action.payload
            }
        }
    }
}