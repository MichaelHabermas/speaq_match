import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

// redux
import { connect } from "react-redux";
import { setCurrentGame } from "../../store/MandMActions";

// components
import MenuButton from "../components/MenuButton";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import LevelSelectionContainer from "../components/LevelSelectionContainer";
import DeckSelectionContainer from "../components/DeckSelectionContainer";

// styles
import defaultStyles from "../config/styles";

const levelCardsTest = [
	{ level: 1, unlocked: true, completed: false, isSelected: false },
	{ level: 2, unlocked: true, completed: false, isSelected: false },
	{ level: 3, unlocked: true, completed: false, isSelected: false },
	{ level: 4, unlocked: true, completed: false, isSelected: false },
	{ level: 5, unlocked: true, completed: false, isSelected: false },
	{ level: 6, unlocked: true, completed: false, isSelected: false },
	{ level: 7, unlocked: true, completed: false, isSelected: false },
	{ level: 8, unlocked: true, completed: false, isSelected: false },
	{ level: 9, unlocked: true, completed: false, isSelected: false },
	{ level: 10, unlocked: true, completed: false, isSelected: false },
	{ level: 11, unlocked: true, completed: false, isSelected: false },
	{ level: 12, unlocked: true, completed: false, isSelected: false },
	{ level: 13, unlocked: true, completed: false, isSelected: false },
	{ level: 14, unlocked: true, completed: false, isSelected: false },
	{ level: 15, unlocked: true, completed: false, isSelected: false },
];
const deckCardsTest = [
	{ name: "Numbers 1", unlocked: true, completed: false, isSelected: false },
	{ name: "Numbers 2", unlocked: true, completed: false, isSelected: false },
	{ name: "Numbers 3", unlocked: true, completed: false, isSelected: false },
	{ name: "Food 1", unlocked: true, completed: false, isSelected: false },
	{ name: "Animals 1", unlocked: true, completed: false, isSelected: false },
	{ name: "Feelings", unlocked: true, completed: false, isSelected: false },
	{
		name: "Prepositions",
		unlocked: true,
		completed: false,
		isSelected: false,
	},
	{
		name: "Shapes & Colors",
		unlocked: true,
		completed: false,
		isSelected: false,
	},
];

function LevelSelectScreen({
	navigation,
	currentLevel,
	currentDeckName,
	dispatch,
}) {
	const [menuChoice, setMenuChoice] = useState(true);
	const [levelCards, setLevelCards] = useState(levelCardsTest);
	const [deckCards, setDeckCards] = useState(deckCardsTest);
	const [newGameSettings, setNewGameSettings] = useState({
		currentLevel: currentLevel,
		currentDeckName: currentDeckName,
	});

	useEffect(() => {
		handleLevelSelection(currentLevel);
		// needed because of the way the local temp data is structured
		if (currentDeckName) {
			handleDeckSelection(
				currentDeckName
					.split("_")
					.map(word => word[0].toUpperCase() + word.slice(1))
					.join(" ")
			);
		}
	}, []);

	const handleGoBack = () => {
		navigation.navigate("Start");
	};

	const handleLevelSelection = level => {
		setLevelCards(
			levelCards.map(card => {
				if (card.level === level) {
					return { ...card, isSelected: true };
				} else {
					return { ...card, isSelected: false };
				}
			})
		);
		setNewGameSettings({ ...newGameSettings, currentLevel: level });
	};

	const handleDeckSelection = deckName => {
		setDeckCards(
			deckCards.map(deck => {
				if (deck.name === deckName) {
					return { ...deck, isSelected: true };
				} else {
					return { ...deck, isSelected: false };
				}
			})
		);
		setNewGameSettings({ ...newGameSettings, currentDeckName: deckName });
	};

	const handleSaveCurrentGameSettings = () => {
		if (newGameSettings.currentDeckName) {
			dispatch(setCurrentGame(newGameSettings));
			navigation.navigate("GamePlay");
		}
	};

	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={handleGoBack}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
				showRightButton={
					newGameSettings.currentLevel && newGameSettings.currentDeckName
				}
				navRight={handleSaveCurrentGameSettings}
				navRightIcon={require("../assets/buttons/forward_icon_dark.png")}
				title="Level Select"
			/>
			<View style={styles.selections}>
				<MenuButton
					chosen={menuChoice}
					onPress={() => setMenuChoice(true)}
					style={styles.selectionItem}
					title="Level"
				/>
				<MenuButton
					chosen={!menuChoice}
					onPress={() => setMenuChoice(false)}
					style={styles.selectionItem}
					title="Deck"
				/>
			</View>
			{!!menuChoice && (
				<LevelSelectionContainer
					levelCards={levelCards}
					handleLevelSelection={handleLevelSelection}
				/>
			)}
			{!menuChoice && (
				<DeckSelectionContainer
					deckCards={deckCards}
					handleDeckSelection={handleDeckSelection}
				/>
			)}
		</Screen>
	);
}

const styles = StyleSheet.create({
	club: {
		position: "absolute",
	},
	screen: {},
	selections: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	selectionItem: {
		color: defaultStyles.colors.white,
		fontSize: 40,
	},
});

const mapStateToProps = state => ({
	currentLevel: state.matchAndMemory.gameSettings.currentLevel,
	currentDeckName: state.matchAndMemory.gameSettings.currentDeckName,
});

export default connect(mapStateToProps)(LevelSelectScreen);
