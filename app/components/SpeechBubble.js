import React from "react";
import { View, StyleSheet, Image } from "react-native";

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
		marginBottom: Platform.OS === "ios" ? -35 : 0, // adjust to Constant
		position: "absolute",
		width: "100%",
	},
	speakerImage: {
		height: "100%",
		resizeMode: "contain",
		width: "100%",
	},
	speakerTextContainer: {
		alignSelf: "center",
		fontSize: 30,
		height: "55%",
		justifyContent: "center",
		position: "absolute",
		width: "96%",
	},
	speakerText: {
		fontSize: 30,
		height: "100%",
		justifyContent: "center",
		lineHeight: 40,
		paddingTop: 5,
		textAlign: "center",
	},
});

export default SpeechBubble;
