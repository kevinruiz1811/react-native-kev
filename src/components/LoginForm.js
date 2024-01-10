import React from "react";
import { TextInput, Text, Button, View } from "react-native";

const LoginForm = () => {
	return (
		<View>
			<TextInput placeholder="email" />
			<TextInput placeholder="password" />
            <Button title="Enviar" />
		</View>
	);
};

export default LoginForm;
