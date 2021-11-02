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
const initialCardText = {
	cardText: "",
	unchosen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	currentCardIdx: Math.floor(Math.random() * 12),
};

function GamePlayScreen({ gameState, navigation }) {
	const [streak, setStreak] = useState(0);
	const [currentGameSettings, setCurrentGameSettings] = useState({
		deckName: gameState.gameSettings.currentDeckName,
		deck: gameState.gameSettings.currentDeck,
	});
	const [currentCardText, setCurrentCardText] = useState(initialCardText);

	useEffect(() => {
		resetStreak();
	}, []);

	const preText = levels[gameState.gameSettings.currentLevel].languages[gameState.gameSettings.languageToLearn].pre
	const postText = levels[gameState.gameSettings.currentLevel].languages[gameState.gameSettings.languageToLearn].post

	const cardIdxRandomizer = () =>
		Math.floor(Math.random() * currentCardText.unchosen.length);

	const resetStreak = () => {
		const randomCardIdx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][
			cardIdxRandomizer()
		];
		setCurrentCardText({
			cardText:
				decks[currentGameSettings.deckName].deck[randomCardIdx].languages[
					gameState.gameSettings.languageToLearn
				],
			unchosen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].filter(
				num => num != randomCardIdx
			),
		});
		const shuffledDeck = deckShuffle(decks[currentGameSettings.deckName].deck);
		setCurrentGameSettings({ ...currentGameSettings, deck: shuffledDeck });
		setStreak(0);
	};

	const handleCardTap = cardText => {
		// prevent over-selecting on game over
		if (streak >= 12) return;
		if (cardText === currentCardText.cardText) {
			// game over condition
			if (streak >= 11) {
				setTimeout(() => {
					navigation.navigate("GameOver");
					resetStreak();
				}, 1000);
			} else {
				const randomCardIdx = currentCardText.unchosen[cardIdxRandomizer()];
				setCurrentCardText({
					...currentCardText,
					cardText:
						decks[currentGameSettings.deckName].deck[randomCardIdx].languages[
							gameState.gameSettings.languageToLearn
						],
					unchosen: currentCardText.unchosen.filter(
						num => num != randomCardIdx
					),
				});
				setStreak(streak + 1);
			}
		} else {
			resetStreak();
		}
	};

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
				language={gameState.gameSettings.languageToLearn}
				handleCardTap={handleCardTap}
				deck={decks[currentGameSettings.deckName].deck}
			/>

			<SpeechBubble
				character={characters[1]}
				text={`${preText}${currentCardText.cardText}${postText}`}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
	gameState: state.matchAndMemory,
});

export default connect(mapStateToProps)(GamePlayScreen);
