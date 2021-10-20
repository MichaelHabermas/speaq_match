import React, { useState } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import MenuButton from "../components/MenuButton";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

import defaultStyles from "../config/styles";
import LevelSelectionContainer from "../components/LevelSelectionContainer";
import DeckSelectionContainer from "../components/DeckSelectionContainer";

function LevelSelectScreen({ navigation }) {
	const [menuChoice, setMenuChoice] = useState(true);
	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={() => navigation.goBack()}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
				navRight={() => navigation.navigate("GamePlay")}
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
			{menuChoice && <LevelSelectionContainer />}
			{!menuChoice && <DeckSelectionContainer />}
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

export default LevelSelectScreen;
