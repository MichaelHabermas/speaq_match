import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./app/screens/StartScreen";
import HomeScreen from "./app/screens/HomeScreen";
import DetailsScreen from "./app/screens/DetailsScreen";
import LevelSelectScreen from "./app/screens/LevelSelectScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
		}}
	>
		<Stack.Screen name="Start" component={StartScreen} />
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
	return <LevelSelectScreen />;
}
