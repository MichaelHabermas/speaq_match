import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

function NavButton({ icon, onPress, style }) {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.overContainer, style]}>
			<LinearGradient colors={["#F0FF49", "#FFF494"]} style={styles.container}>
				<Image source={icon} style={styles.icon} />
			</LinearGradient>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	overContainer: {
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	container: {},
	icon: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default NavButton;
