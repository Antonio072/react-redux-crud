import { UserID, addNewUser, deleteUserById } from './slice';
import { useAppDispatch } from '../store';

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const removeUser = (id: UserID) => {
        dispatch(deleteUserById(id));
    }

    const addUser = ({name, email, github}) => {
        dispatch(addNewUser({name, email, github}));
    }

    return {addUser, removeUser}
};