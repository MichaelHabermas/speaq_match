import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

function OptionsScreen({ navigation }) {
	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				showRightButton={false}
				navLeft={() => console.log("button 1 pressed")}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
				navRight={() => console.log("button 2 pressed")}
				navRightIcon={require("../assets/buttons/forward_icon_dark.png")}
				title="Options"
				titleOffset={60}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		width: "100%",
	},
});

export default OptionsScreen;
