import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";

import defaultStyles from "../config/styles";

function LevelCard({ number, onPress, chosen }) {
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
		backgroundColor: defaultStyles.colors.white,
		borderRadius: 15,
		height: 150,
		marginRight: 10,
		marginBottom: 10,
		width: 105,
	},
	text: {
		color: defaultStyles.colors.light_blue,
		fontSize: 60,
		textAlign: "center",
		textShadowColor: "rgba(0, 0, 0, 0.0)",
		textShadowOffset: {
			width: 0,
			height: 0,
		},
		textShadowRadius: 0,
		width: "100%",
	},
});

export default LevelCard;
