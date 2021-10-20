import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";

import CardsContainer from "../components/CardsContainer";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import StreakTracker from "../components/StreakTracker";
import Text from "../components/Text";

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
		id: 7,
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

			<View style={styles.speaker}>
				<Image style={styles.speakerImage} source={characters[4].image} />
				<View style={styles.speakerTextContainer}>
					<Text style={styles.speakerText}>
						Can I have an apple, pretty please?
					</Text>
				</View>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	speaker: {
		alignSelf: "center",
		bottom: 0,
		height: 170,
		marginBottom: Platform.OS === "ios" ? -35 : 0,
		position: "absolute",
		width: "100%",
	},
	speakerImage: {
		height: "100%",
		resizeMode: "contain",
		width: "100%",
	},
	speakerTextContainer: {
		alignSelf: "center",
		fontSize: 30,
		height: "55%",
		justifyContent: "center",
		position: "absolute",
		width: "96%",
	},
	speakerText: {
		fontSize: 30,
		height: "100%",
		justifyContent: "center",
		lineHeight: 40,
		paddingTop: 5,
		textAlign: "center",
	},
});

export default GamePlayScreen;
