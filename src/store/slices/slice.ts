import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UserID = number;
const DEFAULT_STATE: UsersWithId[] = [
    {
        id: 1,
        name: 'John Doe',
        email: '',
        github: 'johndoe',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: '',
        github: 'janedoe',
    },
    {
        id: 3,
        name: 'John Smith',
        email: '',
        github: 'johnsmith',
    }
];

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UsersWithId extends User{
    id: number;
}

const initialState: UsersWithId[] = (() => {
    const localState = localStorage.getItem('reduxState');
    if (localState) {
        const parsedState = JSON.parse(localState);
        if (parsedState.users) {
            return parsedState.users;
        }
    }
    return DEFAULT_STATE;
})

export const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
            const id = crypto.randomUUID();

            return [...state, { id, ...action.payload }]
        },
        deleteUserById: (state, action: PayloadAction<UserID> ) => {
            const id = action.payload;
            return state.filter(user => user.id !== id);
        },
        rollbackUser: (state, action: PayloadAction<UsersWithId>) => {
            const isUserAlreadyInState = state.some(user => user.id === action.payload.id);
            if (!isUserAlreadyInState) {
                return [...state, action.payload];
            }
        }
    },
});

export default slice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = slice.actions;