import React from "react";
import { View, StyleSheet } from "react-native";

import GameCard from "./GameCard";

function CardsContainer({ deck }) {
	return (
		<View style={styles.container}>
			{deck.map((card, index) => (
				<GameCard
					key={card.id}
					card={card}
					onPress={() => console.log(`${card.languages.german} pressed`)}
				/>
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
