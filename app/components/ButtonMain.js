import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";
import Text from "./Text";

function AppButton({ title, onPress, color = "yellow" }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[color] }]}
			onPress={onPress}
		>
			<LinearGradient colors={["#F0FF49", "#FFF494"]} style={styles.button}>
				<Text style={styles.text} fontFam="alfa">
					{title}
				</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: colors.gold,
		borderRadius: 10,
		justifyContent: "center",
		marginVertical: 10,
		padding: 3,
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 8,
	},
	text: {
		color: colors.light_blue,
		fontSize: 50,
		paddingLeft: 90,
		paddingRight: 90,
	},
});

export default AppButton;
