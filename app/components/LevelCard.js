import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import Text from "./Text";

import defaultStyles from "../config/styles";

function LevelCard({ handleLevelSelection, level, isSelected }) {
	return (
		<TouchableWithoutFeedback onPress={() => handleLevelSelection(level)}>
			<View>
				<View style={[styles.container, styles.notSelectedContainer]}>
					<Text style={styles.text}>{level}</Text>
				</View>
				{isSelected && (
					<View style={[styles.container, styles.selectedContainer]}>
						<Text style={styles.text}>{level}</Text>
					</View>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		height: 150,
		marginRight: 10,
		marginBottom: 10,
		width: 105,
	},
	notSelectedContainer: { backgroundColor: defaultStyles.colors.white },
	selectedContainer: {
		backgroundColor: defaultStyles.colors.gold,
		position: "absolute",
		shadowColor: "#000",
		shadowOffset: {
			width: 4,
			height: 4,
		},
		shadowOpacity: 0.2,
		shadowRadius: 5,
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
