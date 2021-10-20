import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";

function StreakTracker({ streak = 0 }) {
	return (
		<View style={styles.streakContainer}>
			<Text style={styles.streakText}>Streak: {streak}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	streakContainer: {
		alignSelf: "center",
		backgroundColor: "red",
		borderRadius: 40,
		paddingHorizontal: 30,
		paddingVertical: 5,
		marginTop: 30,
		marginBottom: 20,
	},
	streakText: {
		textAlign: "center",
		fontSize: 25,
	},
});

export default StreakTracker;
