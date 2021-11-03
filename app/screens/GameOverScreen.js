import React from "react";
import { StyleSheet, View } from "react-native";

// redux
import { connect } from "react-redux";

// components
import NavButtonSection from "../components/NavButtonSection";
import Screen from "../components/Screen";
import Text from "../components/Text";

function GameOverScreen({
	navigation,
	currentDeckName,
	currentLevel,
	languageToLearn,
}) {
	return (
		<Screen style={styles.screen} screen={true}>
			<View style={styles.gameOverTextContainer}>
				<Text style={styles.gameOverText}>Level {currentLevel} Complete!</Text>
				<Text style={styles.gameOverText}>Language: {languageToLearn}</Text>
				<Text style={styles.gameOverText}>Deck: {currentDeckName}</Text>
				<Text style={styles.gameOverText}>Next Level: {currentLevel + 1}</Text>
			</View>
			<NavButtonSection navigation={navigation} />
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {},
	gameOverTextContainer: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	gameOverText: { fontSize: 35, marginVertical: 20 },
});

const mapStateToProps = state => ({
	currentDeckName: state.matchAndMemory.gameSettings.currentDeckName,
	currentLevel: state.matchAndMemory.gameSettings.currentLevel,
	languageToLearn: state.matchAndMemory.gameSettings.languageToLearn,
});

export default connect(mapStateToProps)(GameOverScreen);
