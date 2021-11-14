import React from "react";
import { View, StyleSheet } from "react-native";

import GameCard from "./GameCard";

function CardsContainer({ deck, handleCardTap,  }) {
console.log(" - - - - - - - - - - - - - - - ")
	return (
		<View style={styles.container}>
			{deck.map(card => (
				<GameCard key={card.id} card={card} deck={deck} handleCardTap={handleCardTap} />
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		alignItems: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		height: "70%",
		justifyContent: "space-between",
		width: "75%",
	},
});

export default CardsContainer;
