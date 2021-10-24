import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// redux
import { connect } from "react-redux";

// components
import CardsContainer from "../components/CardsContainer";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import SpeechBubble from "../components/SpeechBubble";
import StreakTracker from "../components/StreakTracker";

// TODO: get this from the server/dynamically
import { characters, decks, levels } from "../test_data";

function GamePlayScreen({ gameState, navigation }) {
	const [streak, setStreak] = useState(0);

	// TODO: get questions from the store dynamically
	// TODO:  'streak' may need to be part of the redux store

	const level = 2;
	const language = "french";
	const deck = "food_1";

	const card = decks[deck][0].languages[language];
	const pre = levels[level].languages[language].pre;
	const post = levels[level].languages[language].post;

	// for testing purposes, 2 and 3 lines of text
	// const post = ", please do it. I like";
	// const post = ", please do it. I like that. asdf arg aw ase aesa asdv awe ";

	const handleStreakChange = () => {
		if (streak >= 12) return;
		// TODO:fix the if condition
		if (card) {
			// 1.  increase only if card choice matches bubble text
			setStreak(streak + 1);
		} else {
			// 2. reset streak if card choice doesn't match bubble text
			setStreak(0);
		}
	};

	if (streak === 12) {
		setTimeout(() => {
			setStreak(0);
			navigation.navigate("GameOver");
		}, 2000);
	}

	// TODO: need a better loading mechanism
	if (!characters || !decks || !levels) {
		return <View></View>;
	}
	return (
		<Screen style={styles.screen}>
			<ScreenHeader
				navLeft={() => navigation.navigate("Options")}
				navLeftIcon={require("../assets/buttons/options_icon_light.png")}
				navRight={() => navigation.navigate("Help")}
				navRightIcon={require("../assets/buttons/help_icon_light.png")}
				showTitle={false}
			/>

			<StreakTracker streak={streak} />

			<CardsContainer onPress={handleStreakChange} deck={decks.food_1} />

			<SpeechBubble character={characters[1]} text={`${pre}${card}${post}`} />
		</Screen>
	);
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
	gameState: state.matchAndMemory,
});

export default connect(mapStateToProps)(GamePlayScreen);
