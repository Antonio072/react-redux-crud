import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/slice';

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
    console.log(store.getState())
    console.log('>ACTION',action) 
    next(action)
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
 
 }

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: [persistanceLocalStorageMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;