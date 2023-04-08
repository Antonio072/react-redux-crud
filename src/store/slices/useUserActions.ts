import { UserID, deleteUserById } from './slice';
import { useAppDispatch } from '../store';

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const removeUser = (id: UserID) => {
        dispatch(deleteUserById(id));
    }

    return {removeUser}
};