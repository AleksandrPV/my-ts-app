
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';

//api
import { postsApi } from '../api/postsApi';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        counter: counterReducer,
        user: userReducer,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

