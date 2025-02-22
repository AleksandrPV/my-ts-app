import {createStore, compose, applyMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./slices/rootReducer.js";


let preloadedState
const persistedTodoString = localStorage.getItem('todos')

if (persistedTodoString) {
    preloadedState = {
        todos: JSON.parse(persistedTodoString)
    }
}

const middlewareEnhancer = applyMiddleware(print1, print2)

export default createStore(rootReducer, preloadedState, middlewareEnhancer)


