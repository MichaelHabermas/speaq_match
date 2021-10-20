import React from "react";
import { View, StyleSheet, Image } from "react-native";

function GameCard({ card, onPress, inStreak = false }) {
	return (
		<>
			{inStreak && (
				<View style={styles.container}>
					<Image
						style={styles.cardBack}
						source={require("../assets/cards/card_back.png")}
					/>
				</View>
			)}
			{!inStreak && (
				<View style={styles.container}>
					<Image
						style={styles.card}
						source={require("../assets/cards/card_front.png")}
					/>
					<Image style={styles.face} source={card.image} />
				</View>
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
	card: { position: "absolute" },
	cardBack: {},
	cardFace: {
		position: "absolute",
	},
});

export default GameCard;
