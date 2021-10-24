import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

// components
import Text from "./Text";

// styles
import defaultStyles from "../config/styles";

function HelpMenuItem({ card, onPress, fontFam }) {
	return (
		<TouchableOpacity underlayColor="gray" onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text fontFam={fontFam} style={styles.text}>
						{card.name}
					</Text>
				</View>

				<View onPress={onPress} style={styles.card}>
					<Image
						style={styles.cardBack}
						source={require("../assets/cards/card_front.png")}
					/>
					<Image style={styles.cardImage} source={card.image} />
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		height: 150,
		justifyContent: "space-between",
		width: "100%",
	},
	text: {
		color: defaultStyles.colors.white,
		fontSize: 25,
	},
	textContainer: {
		height: "100%",
		justifyContent: "center",
		width: "70%",
	},
	card: {
		height: "100%",
		marginRight: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
		transform: [{ rotate: "10deg" }],
		width: "25%",
	},
	cardBack: {
		height: "100%",
		position: "absolute",
		resizeMode: "contain",
		width: "100%",
	},
	cardImage: {
		height: "100%",
		position: "absolute",
		resizeMode: "contain",
		width: "100%",
	},
});

export default HelpMenuItem;
