import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "../components/Text";

function LevelSelectionContainer(props) {
	return (
		<View style={styles.container}>
			<Text>Levels</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
});

export default LevelSelectionContainer;
