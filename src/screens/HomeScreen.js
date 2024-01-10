import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = (props) => {
	const { navigation } = props;

	const goToPage = () => {
		navigation.navigate("Settings");
	};

	return (
		<View>
			<Text>Home</Text>
			<Text>Home</Text>
			<Text>Home</Text>
			<Text>Home</Text>
			<Button onPress={goToPage} title="Ir a settings" />
		</View>
	);
};

export default HomeScreen;
