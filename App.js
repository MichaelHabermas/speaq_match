import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
	// if (!fontsLoaded) {
	// 	return <AppLoading />;
	// }
	// from the custom App we return the component we assigned to RootApp.
	// return (
	// 	<NavigationContainer>
	// 		<StackNavigator />
	// 	</NavigationContainer>
	// );
	return <HomeScreen />;
}
