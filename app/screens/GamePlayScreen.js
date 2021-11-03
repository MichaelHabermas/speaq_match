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

function GamePlayScreen({
	currentDeckName,
	currentLevel,
	languageToLearn,
	navigation,
}) {
	const [streak, setStreak] = useState(0);
	const [speaker, setSpeaker] = useState(characters[2]);
	const [currentDeck, setCurrentDeck] = useState(decks[currentDeckName].deck);
	const [currentCardText, setCurrentCardText] = useState({
		cardText: "",
		unchosen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		currentCardIdx: Math.floor(Math.random() * 12),
	});

	const preText = levels[currentLevel].languages[languageToLearn].pre;
	const postText = levels[currentLevel].languages[languageToLearn].post;

	useEffect(() => {
		resetStreak();
	}, []);

	const cardIdxRandomizer = length => Math.floor(Math.random() * length);

	const resetStreak = () => {
		const randomCardIdx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][
			cardIdxRandomizer(currentCardText.unchosen.length)
		];
		setCurrentCardText({
			cardText: currentDeck[randomCardIdx].languages[languageToLearn],
			unchosen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].filter(
				num => num != randomCardIdx
			),
		});
		setCurrentDeck(deckShuffle(currentDeck));
		setStreak(0);
	};

	const handleCardTap = cardText => {
		// prevent over-selecting cards on game over
		if (streak >= 12) return;
		if (cardText === currentCardText.cardText) {
			// game over condition
			if (streak >= 11) {
				setTimeout(() => {
					navigation.navigate("GameOver");
					resetStreak();
				}, 1000);
			} else {
				const randomCardIdx =
					currentCardText.unchosen[
						cardIdxRandomizer(currentCardText.unchosen.length)
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
				setStreak(streak + 1);
				setSpeaker(characters[cardIdxRandomizer(4)]);
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

			<CardsContainer handleCardTap={handleCardTap} deck={currentDeck} />

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
