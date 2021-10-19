import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import DeckCard from "./DeckCard";

const decks = [
	{name: "Numbers 1", unlocked: true, completed: false},
	{name: "Numbers 2", unlocked: true, completed: false},
	{name: "Numbers 3", unlocked: true, completed: false},
	{name: "Food 1", unlocked: true, completed: false},
	{name: "Food 2", unlocked: true, completed: false},
	{name: "Food 3", unlocked: true, completed: false},
	{name: "Animals 1", unlocked: true, completed: false},
	{name: "Animals 2", unlocked: true, completed: false},
	{name: "Animals 3", unlocked: true, completed: false},
	{name: "Transportation", unlocked: true, completed: false},
	{name: "Nature", unlocked: true, completed: false},
	{name: "Shapes & Colors", unlocked: true, completed: false},
]

function DeckSelectionContainer(props) {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollView}>
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
	scrollView: {
		width: "100%",
		height: "100%",
		flex: 1,
	},
	container: {
		alignSelf: "center",
		height: "70%",
		width: "80%",
		position: "absolute",
		bottom: 0,
	},
	subContainer: {
		height: "100%",
		width: "100%",
	},
});

export default DeckSelectionContainer;
