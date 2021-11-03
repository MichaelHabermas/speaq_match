import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

// redux
import { connect } from "react-redux";

function GameCard({ card, handleCardTap, languageToLearn, inStreak = false }) {
	return (
		<TouchableOpacity
			onPress={() => handleCardTap(card.languages[languageToLearn])}
			style={styles.container}
		>
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

const mapStateToProps = state => ({
	languageToLearn: state.matchAndMemory.gameSettings.languageToLearn,
});

export default connect(mapStateToProps)(GameCard);
