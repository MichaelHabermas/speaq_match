import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

function NavButton({ icon, onPress, positionAndSize, shape }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.overContainer, positionAndSize]}
		>
			<LinearGradient
				colors={["#F0FF49", "#FFF494"]}
				style={[styles.container, shape]}
			>
				<Image source={icon} style={styles.icon} />
			</LinearGradient>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	overContainer: {
		height: 69,
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
		width: 69,
	},
	container: { borderRadius: 35 },
	icon: {
		height: "100%",
		width: "100%",
	},
});

export default NavButton;
