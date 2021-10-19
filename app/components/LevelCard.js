import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";

import defaultStyles from "../config/styles";

function LevelCard({ number, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.text}>{number}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		// alignItems: "center",
		// alignContent: "center",
		backgroundColor: defaultStyles.colors.white,
		borderRadius: 15,
		height: 150,
		// justifyContent: "center",
		marginBottom: 10,
		width: 105,
	},
	text: {
		alignItems: "center",
		justifyContent: "center",
		color: defaultStyles.colors.light_blue,
		fontSize: 70,
		flex: 1,
		letterSpacing: -15,
		paddingHorizontal: 10,
		textAlign: "center",
		textShadowColor: "rgba(0, 0, 0, 0.0)",
		textShadowOffset: {
			width: 0,
			height: 0,
		},
		textShadowRadius: 0,
	},
});

export default LevelCard;
