import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

function NavButton({ icon, onPress, style }) {
	return (
		<TouchableOpacity style={[style, styles.container]} onPress={onPress}>
			<LinearGradient colors={["#F0FF49", "#FFF494"]} style={styles.button}>
				<Image source={icon} style={styles.icon} />
			</LinearGradient>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		borderRadius: 35,
	},
	container: {
		position: "absolute",
		width: 69,
		height: 69,
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	icon: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default NavButton;
