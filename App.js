import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import GameOverScreen from "./app/screens/GameOverScreen";
import GamePlayScreen from "./app/screens/GamePlayScreen";
import HelpScreen from "./app/screens/HelpScreen";
import LevelSelectScreen from "./app/screens/LevelSelectScreen";
import OptionsScreen from "./app/screens/OptionsScreen";
import OptionsResetScreen from "./app/screens/OptionsResetScreen";
import StartScreen from "./app/screens/StartScreen";
import UserProfileScreen from "./app/screens/UserProfileScreen";

//redux
import store from "./store/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
		}}
	>
		<Stack.Screen name="Start" component={StartScreen} />
		<Stack.Screen name="OptionsReset" component={OptionsResetScreen} />
		<Stack.Screen name="Profile" component={UserProfileScreen} />
		<Stack.Screen name="LevelSelect" component={LevelSelectScreen} />
		<Stack.Screen name="GamePlay" component={GamePlayScreen} />
		<Stack.Screen name="Options" component={OptionsScreen} />
		<Stack.Screen name="Help" component={HelpScreen} />
		<Stack.Screen name="GameOver" component={GameOverScreen} />
	</Stack.Navigator>
);

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		</Provider>
	);

	// return <StartScreen />;
	// return <UserProfileScreen />;
	// return <LevelSelectScreen />;
	// return <GamePlayScreen />;
	// return <HelpScreen />;
	// return <OptionsScreen />;
	// return <GameOverScreen />;
}

// const mapStateToProps = state => ({
// 	match: state.match,
// });

// const ActionCreators = Object.assign({}, chooseGender);

// const mapActionsToProps = dispatch => ({
// 	actions: bindActionCreators(ActionCreators, dispatch),
// });

/// other option
// const mapStateToProps = state => ({
//     routers: state.router.routers,
//     router_addr: state.router.router_addr,
// })

// const mapActionsToProps = {
//     updateRouterElem,
//     updateRouterArr,
// }

// export default connect(mapStateToProps, mapActionsToProps)(RouterCard);
