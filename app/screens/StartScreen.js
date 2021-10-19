import React from "react";
import { StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import ButtonMain from "../components/ButtonMain";
import speaq_logo from "../assets/speaq_logo.png";

function StartScreen({ naviagation }) {
	return (
		<Screen style={styles.screen}>
			<Image source={speaq_logo} style={styles.logo} />
			<ButtonMain
				style={styles.button}
				title="Start"
				onPress={() => console.log("Button works")}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		justifyContent: "center",
		alignItems: "center",
	},
	logo: { marginBottom: 100 },
	button: {},
});

export default StartScreen;
