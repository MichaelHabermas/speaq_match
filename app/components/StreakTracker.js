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
		marginBottom: 20,
		marginTop: 30,
		paddingHorizontal: 30,
		paddingVertical: 5,
	},
	streakText: {
		fontSize: 25,
		textAlign: "center",
	},
});

export default StreakTracker;
