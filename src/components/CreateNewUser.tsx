import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../store/slices/useUserActions";

export function CreateNewUser() {
    const { addUser } = useUserActions();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name =  formData.get("name") as string
        const email =  formData.get("email") as string
        const github =  formData.get("github") as string
        addUser({ name, email, github});
        form.reset();
    };
	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Crear nuevo usuario</Title>

			<form onSubmit={handleSubmit} className="">
				<TextInput
					placeholder="Nombre"
					type="text"
					name="name"
					id="name"
					required
				/>
				<TextInput
					placeholder="Email"
					type="text"
					name="email"
					id="email"
					required
				/>
				<TextInput
					placeholder="Github"
					type="text"
					name="github"
					id="github"
					required
				/>
				<Button type="submit">Crear usuario</Button>
			</form>
		</Card>
	);
}
