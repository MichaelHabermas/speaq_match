import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import defaultStyles from "../config/styles";
import Text from "../components/Text";

function OptionsButton({ onPress, name, style }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.container, style]}>
				<Text fontFam="alfa" style={styles.text}>
					{name}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: defaultStyles.colors.white,
		borderRadius: 50,
		height: 60,
		width: 160,
	},
	text: {
		color: defaultStyles.colors.light_blue,
		fontSize: 30,
		textShadowColor: "rgba(0, 0, 0, 0.0)",
		textShadowOffset: {
			height: 0,
			width: 0,
		},
		textShadowRadius: 0,
	},
});

export default OptionsButton;
