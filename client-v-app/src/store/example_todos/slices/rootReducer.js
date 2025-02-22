import { combineReducers} from "@reduxjs/toolkit";

import todosReducer from './todos.slice.js'
import filtersReducer from './filters.slice.js'

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer,

})

export default rootReducer;