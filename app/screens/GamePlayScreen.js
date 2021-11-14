import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View, Animated } from "react-native";

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
const deckIndecies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function GamePlayScreen({
	currentDeckName,
	currentLevel,
	languageToLearn,
	navigation,
}) {
	const [streak, setStreak] = useState(12);
	const [speaker, setSpeaker] = useState(characters[2]);
	const [currentDeck, setCurrentDeck] = useState(decks[currentDeckName].deck);
	const [currentCardText, setCurrentCardText] = useState({
		cardText: "",
		unchosen: deckIndecies,
		currentCardIdx: Math.floor(Math.random() * 12),
	});

	const preText = levels[currentLevel].languages[languageToLearn].pre;
	const postText = levels[currentLevel].languages[languageToLearn].post;

	useLayoutEffect(() => {
		resetStreak();
	}, []);

	const handleNavButtonTap = screen => {
		if (streak > 0) navigation.navigate(screen);
	};

	const idxRandomizer = length => Math.floor(Math.random() * length);

	const resetStreak = () => {
		const randomCardIdx = deckIndecies[idxRandomizer(12)];
		setCurrentCardText({
			cardText: currentDeck[randomCardIdx].languages[languageToLearn],
			unchosen: deckIndecies.filter(num => num != randomCardIdx),
		});
        const shuffledDeck = deckShuffle(currentDeck)
		setCurrentDeck(shuffledDeck);
		setStreak(12);
	};
console.log("currentCardText.unchosen:", currentCardText.unchosen)
	const handleCardTap = cardText => {
		// prevent over-selecting cards on game over
		if (streak <= 0) return;
		if (cardText === currentCardText.cardText) {
			// game over condition
			if (streak <= 1) {
				handleGameOver();
			} else {
				const randomCardIdx =
					currentCardText.unchosen[
						idxRandomizer(currentCardText.unchosen.length)
					];
				setCurrentCardText({
					...currentCardText,
					cardText:
						decks[currentDeckName].deck[randomCardIdx].languages[
							languageToLearn
						],
					unchosen: currentCardText.unchosen.filter(
						num => num != randomCardIdx
					),
				});
				setStreak(streak - 1);
				setSpeaker(characters[idxRandomizer(characters.length)]);
			}
		} else {
			resetStreak();
		}
	};

	const handleGameOver = () => {
		setStreak(streak - 1);
		setTimeout(() => {
			navigation.navigate("GameOver");
			resetStreak();
		}, 1000);
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
				navLeft={() => handleNavButtonTap("Options")}
				navLeftIcon={require("../assets/buttons/options_icon_light.png")}
				navRight={() => handleNavButtonTap("Help")}
				navRightIcon={require("../assets/buttons/help_icon_light.png")}
				showTitle={false}
			/>

			<StreakTracker streak={streak} />

			<CardsContainer
				handleCardTap={handleCardTap}
				deck={currentDeck}
			/>

			<SpeechBubble
				character={speaker}
				text={`${preText}${currentCardText.cardText}${postText}`}
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
