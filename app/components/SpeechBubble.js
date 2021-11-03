import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";

import Text from "./Text";

function SpeechBubble({ character, text }) {
	return (
		<View style={styles.speaker}>
			<Image style={styles.speakerImage} source={character.image} />
			<View style={styles.speakerTextContainer}>
				<Text style={styles.speakerText}>{text}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	speaker: {
		alignSelf: "center",
		bottom: 0,
		height: 170,
		marginBottom: Platform.OS === "ios" ? -40 : 0, // adjust to Constant
		position: "absolute",
		width: "100%",
	},
	speakerImage: {
		height: "100%",
		resizeMode: "contain",
		width: "100%",
	},
	speakerTextContainer: {
		alignItems: "center",
		alignSelf: "center",
		flex: 1,
		height: "56%",
		justifyContent: "center",
		position: "absolute",
		top: -3,
		width: "96%",
	},
	speakerText: {
		// TODO: make font size change dynamically for 2 or 3 lines of text
		// fontSize: 22, // ~ Max for 3 lines of text
		// lineHeight: 29, // ~ Max for 3 lines of text
		fontSize: 30, // ~ Max for 1- 2 lines of text
		lineHeight: 40, // ~ Max for 1 - 2 lines of text
		textAlign: "center",
	},
});

export default SpeechBubble;
