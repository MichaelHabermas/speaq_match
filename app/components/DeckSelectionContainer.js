import React from "react";
import { View, ScrollView, StyleSheet, Platform } from "react-native";

import DeckCard from "./DeckCard";

const decks = [
	{ name: "Numbers 1", unlocked: true, completed: false },
	{ name: "Numbers 2", unlocked: true, completed: false },
	{ name: "Numbers 3", unlocked: true, completed: false },
	{ name: "Food 1", unlocked: true, completed: false },
	{ name: "Food 2", unlocked: true, completed: false },
	{ name: "Food 3", unlocked: true, completed: false },
	{ name: "Animals 1", unlocked: true, completed: false },
	{ name: "Animals 2", unlocked: true, completed: false },
	{ name: "Animals 3", unlocked: true, completed: false },
	{ name: "Transportation", unlocked: true, completed: false },
	{ name: "Nature", unlocked: true, completed: false },
	{ name: "Shapes & Colors", unlocked: true, completed: false },
];

function DeckSelectionContainer(props) {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.subContainer}>
					{decks.map((deck, index) => (
						<DeckCard
							key={index}
							onPress={() => console.log(`Card ${deck.name} pressed`)}
							name={deck.name}
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
		position: "absolute",
		width: "80%",
		marginBottom: Platform.OS === "ios" ? -35 : 0,
	},
	subContainer: {
		height: "100%",
		width: "100%",
	},
});

export default DeckSelectionContainer;
