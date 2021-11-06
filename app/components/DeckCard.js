import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import Text from "./Text";

import defaultStyles from "../config/styles";

function DeckCard({ name, handleDeckSelection, isSelected = false }) {
	return (
		<TouchableWithoutFeedback onPress={() => handleDeckSelection(name)}>
			<View style={{ marginHorizontal: 10 }}>
				<View style={[styles.container, styles.notSelectedContainer]}>
					<Text style={styles.text}>{name}</Text>
				</View>
				{isSelected && (
					<View style={[styles.container, styles.selectedContainer]}>
						<Text style={styles.text}>{name}</Text>
					</View>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		height: 70,
		justifyContent: "center",
		marginBottom: 10,
		width: "100%",
	},
	notSelectedContainer: {
		backgroundColor: defaultStyles.colors.white,
	},
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
		fontSize: 30,
		paddingHorizontal: 10,
		textAlign: "center",
		textShadowColor: "rgba(0, 0, 0, 0.0)",
		textShadowOffset: {
			height: 0,
			width: 0,
		},
		textShadowRadius: 0,
	},
});

export default DeckCard;
