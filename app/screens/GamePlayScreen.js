import React from "react";
import { StyleSheet, View } from "react-native";

import CardsContainer from "../components/CardsContainer";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import SpeechBubble from "../components/SpeechBubble";
import StreakTracker from "../components/StreakTracker";

import { characters, decks, questions } from "../test_data";

function GamePlayScreen({ navigation }) {
	if (!characters || !decks || !questions) {
		return <View></View>;
	}
	return (
		<Screen style={styles.screen}>
			<ScreenHeader
				navLeft={() => navigation.navigate("Options")}
				navLeftIcon={require("../assets/buttons/options_icon_light.png")}
				navRight={() => navigation.navigate("Help")}
				navRightIcon={require("../assets/buttons/help_icon_light.png")}
				showTitle={false}
				style={styles.header}
			/>

			<StreakTracker streak={0} />

			<CardsContainer deck={decks.food_1} />

			<SpeechBubble character={characters[4]} text={questions[0].question} />
		</Screen>
	);
}

const styles = StyleSheet.create({});

export default GamePlayScreen;
