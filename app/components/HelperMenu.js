import React from "react";
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";

import Text from "./Text";

import defaultStyles from "../config/styles";

function HelperMenu({ image, name, onPress, fontFam }) {
	return (
		<TouchableHighlight underlayColor="gray" onPress={onPress}>
			<View style={styles.container}>
				<Text fontFam={fontFam} style={styles.text}>{name}</Text>
				<Image source={image} style={styles.image} />
			</View>
		</TouchableHighlight>

	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		height: 70,
		justifyContent: "space-between",
		marginBottom: 10,
		width: "100%",
	},
	highlight: {
		color: "red",
	},
	text: {
		color: defaultStyles.colors.white,
		marginLeft: 15,
		fontSize: 30,
		textShadowColor: "rgba(0, 0, 0, 0.0)",
		textShadowOffset: {
			height: 0,
			width: 0,
		},
		textShadowRadius: 0,
	},
	image: {
		width: 60,
		height: 70,
	}
});

export default HelperMenu;