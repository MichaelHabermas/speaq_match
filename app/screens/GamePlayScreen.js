import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

function GamePlayScreen({ navigation }) {
	return (
		<Screen style={styles.screen}>
			<ScreenHeader
				navLeft={() => console.log("options button pressed")}
				navLeftIcon={require("../assets/buttons/options_icon_light.png")}
				navRight={() => console.log("help button pressed")}
				navRightIcon={require("../assets/buttons/help_icon_light.png")}
				showTitle={false}
				style={styles.header}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	// screen: { width: "100%" },
	// header: { width: "100%", height: "100%", backgroundColor: "transparent" },
});

export default GamePlayScreen;
