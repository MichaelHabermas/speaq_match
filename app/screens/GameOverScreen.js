import React from "react";
import { StyleSheet } from "react-native";

// redux
import { connect } from "react-redux";

// components
import NavButtonSection from "../components/NavButtonSection";
import Screen from "../components/Screen";

function GameOverScreen({ navigation }) {
	return (
		<Screen style={styles.screen} screen={true}>
			<NavButtonSection navigation={navigation} />
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {},
});

const mapStateToProps = state => ({
	gameState: state.matchAndMemory,
});

export default connect(mapStateToProps)(GameOverScreen);
