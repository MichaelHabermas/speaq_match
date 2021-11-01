import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

// redux
import { connect } from "react-redux";

// components
import CardsContainer from "../components/CardsContainer";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import SpeechBubble from "../components/SpeechBubble";
import StreakTracker from "../components/StreakTracker";

// logic
import { deckShuffle } from "../gameLogic";

// TODO: get this from the server/dynamically
import { characters, decks, levels } from "../test_data";
const initialGameSettings = {
	level: 3,
	language: "italian",
	deckName: "numbers_2",
	deck: {},
};
const initialCardText = {
	pre: "",
	post: "",
	cardText: "",
	unchosen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

function GamePlayScreen({ gameState, navigation }) {
	const [streak, setStreak] = useState(0);
	const [gameSettings, setGameSettings] = useState(initialGameSettings);
	const [currentCardText, setCurrentCardText] = useState(initialCardText);

	useEffect(() => {
		// TODO: get deck info for gameSettings dynamically from the server/dynamically
		resetGame();
		// const randomCardIdx = Math.floor(Math.random() * 12);
		// setCurrentCardText({
		// 	pre: levels[gameSettings.level].languages[gameSettings.language].pre,
		// 	post: levels[gameSettings.level].languages[gameSettings.language].post,
		// 	cardText:
		// 		decks[gameSettings.deckName].deck[randomCardIdx].languages[
		// 			gameSettings.language
		// 		],
		// 	unchosen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		// });
		// const shuffledDeck = deckShuffle(decks[gameSettings.deckName].deck);
		// setGameSettings({ ...gameSettings, deck: shuffledDeck });
	}, []);

	// TODO: get questions from the store dynamically

	const resetGame = () => {
		const randomCardIdx = Math.floor(Math.random() * 12);
		setCurrentCardText({
			pre: levels[gameSettings.level].languages[gameSettings.language].pre,
			post: levels[gameSettings.level].languages[gameSettings.language].post,
			cardText:
				decks[gameSettings.deckName].deck[randomCardIdx].languages[
					gameSettings.language
				],
			unchosen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		});
		const shuffledDeck = deckShuffle(decks[gameSettings.deckName].deck);
		setGameSettings({ ...gameSettings, deck: shuffledDeck });
	};

	const handleCardTap = cardText => {
		if (streak >= 12) return;
		// TODO: fix the if condition
		if (cardText === currentCardText.cardText) {
			// 1.  increase only if card choice matches bubble text
			setStreak(streak + 1);
		} else {
			// 2. reset streak if card choice doesn't match bubble text
			resetGame();
			setStreak(0);
		}
	};

	// game over condition
	// TODO: disable all buttons while waiting for transition
	if (streak === 12) {
		setTimeout(() => {
			setStreak(0);
			navigation.navigate("GameOver");
		}, 2000);
	}

	// TODO: need a better loading mechanism
	if (!characters || !decks || !levels) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
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

			<CardsContainer
				language={gameSettings.language}
				handleCardTap={handleCardTap}
				deck={decks[gameSettings.deckName].deck}
			/>

			<SpeechBubble
				character={characters[1]}
				text={`${currentCardText.pre}${currentCardText.cardText}${currentCardText.post}`}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
	gameState: state.matchAndMemory,
});

export default connect(mapStateToProps)(GamePlayScreen);
