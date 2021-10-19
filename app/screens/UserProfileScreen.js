import React, { useState } from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import MenuButton from "../components/MenuButton";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

import defaultStyles from "../config/styles";
import LevelSelectionContainer from "../components/LevelSelectionContainer";
import DeckSelectionContainer from "../components/DeckSelectionContainer";

function UserProfileScreen({ navigation }) {
	const [menuChoice, setMenuChoice] = useState(true);

	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={() => console.log("button 1 pressed")}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
				showRightButton={false}
				title="User Profile"
				titleOffset={20}
			/>
			<View style={styles.selections}>
				<MenuButton
					chosen={menuChoice}
					onPress={() => setMenuChoice(true)}
					title="Level"
				/>
				<MenuButton
					chosen={!menuChoice}
					onPress={() => setMenuChoice(false)}
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

export default UserProfileScreen;
