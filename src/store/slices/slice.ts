import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserID = number;


export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UsersWithId extends User{
    id: number;
}

const initialState: UsersWithId[] = [
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

export const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUserById: (state, action: PayloadAction<UserID> ) => {
            const id = action.payload;
            return state.filter(user => user.id !== id);
        }
    },
});

export default slice.reducer;

export const { deleteUserById } = slice.actions;