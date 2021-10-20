import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";

import CardsContainer from "../components/CardsContainer";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import StreakTracker from "../components/StreakTracker";
import Text from "../components/Text";
import SpeechBubble from "../components/SpeechBubble";

const characters = [
	{
		id: 1,
		image: require("../assets/speech_bubbles/toby.png"),
		gender: "female",
	},
	{
		id: 2,
		image: require("../assets/speech_bubbles/sasha.png"),
		gender: "female",
	},
	{
		id: 3,
		image: require("../assets/speech_bubbles/steven.png"),
		gender: "male",
	},
	{
		id: 4,
		image: require("../assets/speech_bubbles/andrea.png"),
		gender: "female",
	},
	{
		id: 5,
		image: require("../assets/speech_bubbles/jessica.png"),
		gender: "male",
	},
];

const cards = [
	{
		id: 1,
		name: "a zero",
		image: require("../assets/cards/numbers_1/card_0.png"),
	},
	{
		id: 2,
		name: "a one",
		image: require("../assets/cards/numbers_1/card_1.png"),
	},
	{
		id: 3,
		name: "a two",
		image: require("../assets/cards/numbers_1/card_2.png"),
	},
	{
		id: 4,
		name: "a three",
		image: require("../assets/cards/numbers_1/card_3.png"),
	},
	{
		id: 5,
		name: "a four",
		image: require("../assets/cards/numbers_1/card_4.png"),
	},
	{
		id: 6,
		name: "a five",
		image: require("../assets/cards/numbers_1/card_5.png"),
	},
	{
		id: 7,
		name: "a six",
		image: require("../assets/cards/numbers_1/card_6.png"),
	},
	{
		id: 8,
		name: "a seven",
		image: require("../assets/cards/numbers_1/card_7.png"),
	},
	{
		id: 9,
		name: "an eight",
		image: require("../assets/cards/numbers_1/card_8.png"),
	},
	{
		id: 10,
		name: "a nine",
		image: require("../assets/cards/numbers_1/card_9.png"),
	},
	{
		id: 11,
		name: "a ten",
		image: require("../assets/cards/numbers_1/card_10.png"),
	},
	{
		id: 12,
		name: "an eleven",
		image: require("../assets/cards/numbers_1/card_11.png"),
	},
];

const questions = [
	{
		id: 1,
		question: "Can I have an apple, please?",
	},
];

function GamePlayScreen({ navigation }) {
	if (!characters) return <View></View>;
	return (
		<Screen style={styles.screen}>
			<ScreenHeader
				navLeft={() => console.log("options button pressed")}
				navLeftIcon={require("../assets/buttons/options_icon_light.png")}
				navRight={() => console.log("help button pressed")}
				navRightIcon={require("../assets/buttons/help_icon_light.png")}
				showTitle={false}
				style={styles.header}
			/>

			<StreakTracker streak={0} />

			<CardsContainer deck={cards} />

			<SpeechBubble character={characters[4]} text={questions[0].question} />
		</Screen>
	);
}

const styles = StyleSheet.create({});

export default GamePlayScreen;
