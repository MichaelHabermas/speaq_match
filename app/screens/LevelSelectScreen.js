import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// redux
import { connect } from "react-redux";
import { setCurrentGame } from "../../store/MandMAction";

// components
import MenuButton from "../components/MenuButton";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import LevelSelectionContainer from "../components/LevelSelectionContainer";
import DeckSelectionContainer from "../components/DeckSelectionContainer";

// styles
import defaultStyles from "../config/styles";

const initialCurrentGameSettings = {
	currentLevel: "1",
	currentDeckName: null,
};
const levelCardsTest = [
	{ level: 1, unlocked: true, completed: false, isSelected: true },
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
	{ level: 16, unlocked: true, completed: false, isSelected: false },
	{ level: 17, unlocked: true, completed: false, isSelected: false },
	{ level: 18, unlocked: true, completed: false, isSelected: false },
	{ level: 19, unlocked: true, completed: false, isSelected: false },
	{ level: 20, unlocked: true, completed: false, isSelected: false },
];

function LevelSelectScreen({ navigation, gameState }) {
	const [menuChoice, setMenuChoice] = useState(true);
	const [levelCards, setLevelCards] = useState(levelCardsTest);
	const [newGameSettings, setNewGameSettings] = useState(
		initialCurrentGameSettings
	);

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
		setNewGameSettings({ ...newGameSettings, currentDeckName: deckName });
	};

	const handleSaveCurrentGameSettings = () => {
		// currentGame;
		navigation.navigate("GamePlay");
	};

	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={handleGoBack}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
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
			{menuChoice && (
				<LevelSelectionContainer
					levelCards={levelCards}
					// newGameSettings={newGameSettings}
					handleLevelSelection={handleLevelSelection}
				/>
			)}
			{!menuChoice && (
				<DeckSelectionContainer
					// newGameSettings={newGameSettings}
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
	gameState: state.matchAndMemory,
});

export default connect(mapStateToProps)(LevelSelectScreen);
