import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./app/screens/StartScreen";
import HomeScreen from "./app/screens/HomeScreen";
import DetailsScreen from "./app/screens/DetailsScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerStyle: { backgroundColor: "rebeccapurple" },
			headerTintColor: "white",
			headerFontFamily: "AlfaSlabOne_400Regular",
		}}
	>
		<Stack.Screen name="Home" component={HomeScreen} />
		<Stack.Screen name="Details" component={DetailsScreen} />
	</Stack.Navigator>
);

export default function App() {
	// return (
	// 	<NavigationContainer>
	// 		<StackNavigator />
	// 	</NavigationContainer>
	// );
	return <StartScreen />;
}
