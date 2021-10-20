import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

function HelpScreen({ navigation }) {
	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navRight={() => navigation.goBack()}
				navRightIcon={require("../assets/buttons/cancel_icon_dark.png")}
				showLeftButton={false}
				title="Help"
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		// width: "100%",
	},
});

export default HelpScreen;
