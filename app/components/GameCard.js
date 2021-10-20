import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

function GameCard({ card, onPress, inStreak = false }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Image
				style={styles.card}
				source={require("../assets/cards/card_front.png")}
			/>
			{inStreak ? (
				<Image
					style={styles.card}
					source={require("../assets/cards/card_back.png")}
				/>
			) : (
				<Image style={styles.card} source={card.image} />
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		// marginBottom: 10,
		// marginRight: 10,
		borderColor: "green",
		borderWidth: 1,
		width: "30%",
		height: "25%",
		// padding: 5,
	},
	card: {
		position: "absolute",

		resizeMode: "contain",
		width: "100%",
		height: "100%",
	},
	cardBack: {},
	cardFace: {
		position: "absolute",
	},
});

export default GameCard;
