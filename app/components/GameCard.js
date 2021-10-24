import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

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
		height: "25%",
		paddingHorizontal: 1,
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
		width: "33%",
	},
	card: {
		height: "100%",
		position: "absolute",
		resizeMode: "contain",
		width: "100%",
	},
});

export default GameCard;
