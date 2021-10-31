import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Platform } from "react-native";

import LevelCard from "./LevelCard";

// const levelCardsTest = [
// 	{ number: 1, unlocked: true, completed: false, isSelected: true },
// 	{ number: 2, unlocked: true, completed: false, isSelected: false },
// 	{ number: 3, unlocked: true, completed: false, isSelected: false },
// 	{ number: 4, unlocked: true, completed: false, isSelected: false },
// 	{ number: 5, unlocked: true, completed: false, isSelected: false },
// 	{ number: 6, unlocked: true, completed: false, isSelected: false },
// 	{ number: 7, unlocked: true, completed: false, isSelected: false },
// 	{ number: 8, unlocked: true, completed: false, isSelected: false },
// 	{ number: 9, unlocked: true, completed: false, isSelected: false },
// 	{ number: 10, unlocked: true, completed: false, isSelected: false },
// 	{ number: 11, unlocked: true, completed: false, isSelected: false },
// 	{ number: 12, unlocked: true, completed: false, isSelected: false },
// 	{ number: 13, unlocked: true, completed: false, isSelected: false },
// 	{ number: 14, unlocked: true, completed: false, isSelected: false },
// 	{ number: 15, unlocked: true, completed: false, isSelected: false },
// 	{ number: 16, unlocked: true, completed: false, isSelected: false },
// 	{ number: 17, unlocked: true, completed: false, isSelected: false },
// 	{ number: 18, unlocked: true, completed: false, isSelected: false },
// 	{ number: 19, unlocked: true, completed: false, isSelected: false },
// 	{ number: 20, unlocked: true, completed: false, isSelected: false },
// ];

function LevelSelectionContainer({ handleLevelSelection, levelCards }) {
	// const [levelCards, setLevelCards] = useState(levelCardsTest)

	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.subContainer}>
					{levelCards.map((levelCard, index) => (
						<LevelCard
							key={index}
							isSelected={levelCard.isSelected}
							handleLevelSelection={handleLevelSelection}
							level={levelCard.level}
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
		left: "10%", // TODO: fix with Constants (width of screen - width of container / 2) (unless this works)
		marginBottom: Platform.OS === "ios" ? -35 : 0, // TODO: fix all these with Constants
		position: "absolute",
		width: "90%",
	},
	subContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		height: "100%",
		width: "100%",
	},
});

export default LevelSelectionContainer;
