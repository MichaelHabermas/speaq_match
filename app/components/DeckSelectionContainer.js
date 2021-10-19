import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "../components/Text";

function DeckSelectionContainer(props) {
	return (
		<View style={styles.container}>
			<Text>Deck</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
});

export default DeckSelectionContainer;
