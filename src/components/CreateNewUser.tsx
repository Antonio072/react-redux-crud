import { Button, Card, TextInput, Title } from "@tremor/react";

export function CreateNewUser() {
	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Crear nuevo usuario</Title>

			<form className="">
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
