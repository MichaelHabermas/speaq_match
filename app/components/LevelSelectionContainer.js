import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Platform } from "react-native";

import LevelCard from "./LevelCard";

function LevelSelectionContainer({ handleLevelSelection, levelCards }) {
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
