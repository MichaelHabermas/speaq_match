import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// redux
import { connect } from "react-redux";

// components
import MenuButton from "../components/MenuButton";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import LevelSelectionContainer from "../components/LevelSelectionContainer";
import DeckSelectionContainer from "../components/DeckSelectionContainer";

// styles
import defaultStyles from "../config/styles";

function LevelSelectScreen({ navigation, gameState }) {
	const [menuChoice, setMenuChoice] = useState(true);

	console.log("profile: ", gameState);

	const handleGoBack = () => {
		navigation.navigate("Start");
	};

	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={handleGoBack}
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

const mapStateToProps = state => ({
	gameState: state.matchAndMemory,
});

// const mapActionsToProps = {
// 	dispatch,
// };

export default connect(mapStateToProps)(LevelSelectScreen);
