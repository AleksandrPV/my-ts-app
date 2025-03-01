// features/todosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodo {
    id: string;
    text: string;
    completed: boolean;
    color: string;
}

interface ITodosState {
    todos: ITodo[];
}

const initialState: ITodosState = {
    todos: [
        {id: '0', text: 'начать учиться вебразработке', completed: true, color: 'red'},
        {id: '1', text: 'Выучить реакт', completed: false, color: 'red'},
        {id: '2', text: 'Выучить редакс', completed: false, color: 'red'},
        {id: '3', text: 'практиковаться', completed: false, color: 'red'},
    ],

};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: ITodo = {
                id: Date.now().toString(),
                text: action.payload,
                completed: false,
                color: '',
            };
            state.todos.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        setColor: (state, action: PayloadAction<string>) => {

            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                console.log("payload ");
            }
        }
    },
});

export const { addTodo, toggleTodo, deleteTodo, setColor } = todosSlice.actions;

export default todosSlice.reducer;