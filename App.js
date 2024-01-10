import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

// import NavigationStack from "./src/navigator/NavigationStack";
// import NavigationTab from "./src/navigator/NavigationTab";
import NavigationDrawer from "./src/navigator/NavigationDrawer";

export default function App() {
	return (
		<NavigationContainer>
			<NavigationDrawer></NavigationDrawer>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
