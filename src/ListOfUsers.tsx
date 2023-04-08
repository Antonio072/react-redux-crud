import { useUserActions } from "./store/slices/UseUserActions";
import { useAppDispatch, useAppSelector } from "./store/store";

export function ListOfUsers() {
	const users = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();

	const removeUser = (id: number) => {
		useUserActions();
	};

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>
					<h3>{user.name}</h3>
					<p>{user.email}</p>
					<button>Editar</button>
					<button onClick={() => removeUser(user.id)}>Delete</button>
				</div>
			))}
		</div>
	);
}
