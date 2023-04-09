import { configureStore, type Middleware } from '@reduxjs/toolkit';
import { toast } from 'sonner';
import usersReducer from './slices/slice';

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
 
 }

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
    const { type, payload } = action
    const previousState = store.getState()

    next(action)
    
    if (type === "users/deleteUserById"){
        // fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
        //     method: 'DELETE',
        // })
        // .then(response => {
        //     if(response.ok){
        //         toast.success('User deleted')
        //     }
        //     throw new Error('Error al eliminar al usuario')
        // }).catch((error) => {
            //     toast.error(`Error al eliminar al usuario: ${userIdToRemove}`)
            // })
        // store.dispatch(deleteUserById(payload))
        toast.success('User deleted')
    }


    if (type === "users/addNewUser"){
        // fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
        //     method: 'POST',
        // })
        // .then(response => {
        //     if(response.ok){toast.success('User added')}
        //     else{toast.error('User was not added')}
        // })
        toast.success('User added')
    }
}


export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;