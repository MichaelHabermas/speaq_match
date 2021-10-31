import React from "react";
import { View, ScrollView, StyleSheet, Platform } from "react-native";

import DeckCard from "./DeckCard";

function DeckSelectionContainer({ handleDeckSelection, deckCards }) {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.subContainer}>
					{deckCards.map((deck, index) => (
						<DeckCard
							key={index}
							handleDeckSelection={handleDeckSelection}
							name={deck.name}
							isSelected={deck.isSelected}
						/>
					))}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		bottom: 0,
		height: "70%",
		marginBottom: Platform.OS === "ios" ? -35 : 0,
		position: "absolute",
		width: "80%",
	},
	subContainer: {
		height: "100%",
		width: "100%",
	},
});

export default DeckSelectionContainer;
