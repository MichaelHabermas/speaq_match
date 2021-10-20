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
	container: {},
});

export default CardsContainer;
