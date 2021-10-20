import React from "react";
import { View, StyleSheet } from "react-native";

import GameCard from "./GameCard";

function CardsContainer({ deck }) {
	return (
		<View style={styles.container}>
			{deck.map((card, index) => (
				<GameCard key={index} card={card} />
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "black",
		borderWidth: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		height: "70%",
		width: "80%",
	},
});

export default CardsContainer;
