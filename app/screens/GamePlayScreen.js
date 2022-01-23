import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Animated } from "react-native";

// redux
import { connect } from "react-redux";

// components
import GameCardsContainer from "../components/GameCardsContainer";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import SpeechBubble from "../components/SpeechBubble";
import StreakTracker from "../components/StreakTracker";

// logic
import { deckShuffle, idxRandomizer } from "../gameLogic";

// TODO: get this from the server/dynamically
import { characters, decks, languages } from "../test_data";

// setup
const deckIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const initialIndex = idxRandomizer(12);

function GamePlayScreen({
	currentDeckName,
	currentLevel,
	languageToLearn,
	navigation,
}) {
	const [streak, setStreak] = useState(12);
	const [speaker, setSpeaker] = useState(characters[2]);
	const [currentDeck, setCurrentDeck] = useState(decks[currentDeckName].deck);
	const [currentRequestText, setCurrentRequestText] = useState({
		cardText: currentDeck[initialIndex].languages[languageToLearn],
		unchosen: deckIndices.filter(num => num != initialIndex),
		currentCardIndex: initialIndex,
	});

	const preText = languages[languageToLearn].levels[currentLevel].pre;
	const postText = languages[languageToLearn].levels[currentLevel].post;

	useEffect(() => {
		resetStreak();
	}, []);

	useEffect(() => {
		setBubbleText();
	}, [currentDeck, currentRequestText.unchosen]);

	const handleNavButtonTap = screen => {
		if (streak > 0) navigation.navigate(screen);
	};

	const shuffleAndSet = () => {
		const shuffledDeck = deckShuffle(currentDeck);
		setCurrentDeck(shuffledDeck);
		setStreak(12);
	};

	const determineNextCard = (array = deckIndices) => {
		const randomCardIdx =
			array.length == 12
				? idxRandomizer(array.length)
				: currentRequestText.unchosen[idxRandomizer(array.length)];

		setCurrentRequestText({
			...currentRequestText,
			currentCardIndex: randomCardIdx,
			// cardText: currentDeck[randomCardIdx].languages[languageToLearn],
			unchosen: array.filter(num => num != randomCardIdx),
		});
	};

	const setBubbleText = () => {
		if (streak >= 0) {
			setCurrentRequestText({
				...currentRequestText,
				cardText:
					currentDeck[currentRequestText.currentCardIndex].languages[
						languageToLearn
					],
			});
		}
	};

	const handleCardTap = cardText => {
		// prevent over-selecting cards on game over
		if (streak <= 0) return;

		if (cardText === currentRequestText.cardText) {
			if (streak <= 1) {
				handleGameOver();
			} else {
				handleCorrectCardChoice();
			}
		} else {
			resetStreak();
		}
	};

	const handleCorrectCardChoice = () => {
		determineNextCard(currentRequestText.unchosen);
		setStreak(streak - 1);
		setSpeaker(characters[idxRandomizer(characters.length)]);
	};

	const resetStreak = () => {
		shuffleAndSet();
		determineNextCard();
	};

	const handleGameOver = () => {
		setStreak(streak - 1);
		setTimeout(() => {
			navigation.navigate("GameOver");
			resetStreak();
		}, 500);
	};

	return (
		<Screen style={styles.screen}>
			<ScreenHeader
				navLeft={() => handleNavButtonTap("Options")}
				navLeftIcon={require("../assets/buttons/options_icon_light.png")}
				navRight={() => handleNavButtonTap("Help")}
				navRightIcon={require("../assets/buttons/help_icon_light.png")}
				showTitle={false}
			/>

			<StreakTracker streak={streak} />

			<GameCardsContainer handleCardTap={handleCardTap} deck={currentDeck} />

			<SpeechBubble
				character={speaker}
				text={`${preText}${currentRequestText.cardText}${postText}`}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
	currentDeckName: state.matchAndMemory.gameSettings.currentDeckName,
	currentLevel: state.matchAndMemory.gameSettings.currentLevel,
	languageToLearn: state.matchAndMemory.gameSettings.languageToLearn,
});

export default connect(mapStateToProps)(GamePlayScreen);
