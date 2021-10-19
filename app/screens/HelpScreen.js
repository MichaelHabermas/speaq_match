import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

function HelpScreen({ navigation }) {
	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={() => console.log("button 1 pressed")}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
				navRight={() => console.log("button 2 pressed")}
				navRightIcon={require("../assets/buttons/cancel_icon_dark.png")}
				showLeftButton={false}
				title="Help"
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		width: "100%",
	},
});

export default HelpScreen;
