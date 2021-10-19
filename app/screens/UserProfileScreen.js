import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

function UserProfileScreen({ navigation }) {
	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={() => console.log("button 1 pressed")}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
				showRightButton={false}
				title="User Profile"
				titleOffset={40}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {},
});

export default UserProfileScreen;
