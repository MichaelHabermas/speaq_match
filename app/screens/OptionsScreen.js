import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import Text from "../components/Text";

function OptionsScreen({ navigation }) {
	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={() => console.log("button 1 pressed")}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
				showRightButton={false}
				title="Options"
				titleOffset={60}
			/>
			<Text style={styles.message}>Exit to Home?</Text>
			<Text fontFam="alfa" style={styles.subMessage}>(all progress this session will be lost)</Text>
			<TouchableOpacity onPress={() => {console.log("Exit Pressed")}}>
				<View style={styles.exitButton}>
					<Text fontFam="alfa" style={styles.buttonText}>EXIT</Text>
				</View>
			</TouchableOpacity>
		</Screen>
	);
}

const styles = StyleSheet.create({
	buttonText: {
		color: defaultStyles.colors.light_blue,
		fontSize: 30,
		textShadowColor: "rgba(0, 0, 0, 0.0)",
		textShadowOffset: {
			height: 0,
			width: 0,
		},
		textShadowRadius: 0,
	},
	exitButton: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: defaultStyles.colors.white,
		borderRadius: 50,
		height: 60,
		width: 160,
	},
	message: {
		color: defaultStyles.colors.white,
		fontSize: 45,
		marginTop: 60,
		textAlign: "center",
	},
	screen: {
		alignItems: "center",
		width: "100%",
	},
	subMessage: {
		color: "#F3FF6C",
		fontSize: 18,
		marginBottom: 100,
		textAlign: "center",
	},
});

export default OptionsScreen;
