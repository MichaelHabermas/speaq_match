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
	{ name: "a zero", image: require("../assets/cards/numbers_1/card_0.png") },
	{ name: "a one", image: require("../assets/cards/numbers_1/card_1.png") },
	{ name: "a two", image: require("../assets/cards/numbers_1/card_2.png") },
	{ name: "a three", image: require("../assets/cards/numbers_1/card_3.png") },
	{ name: "a four", image: require("../assets/cards/numbers_1/card_4.png") },
	{ name: "a five", image: require("../assets/cards/numbers_1/card_5.png") },
	{ name: "a six", image: require("../assets/cards/numbers_1/card_6.png") },
	{ name: "a seven", image: require("../assets/cards/numbers_1/card_7.png") },
	{ name: "an eight", image: require("../assets/cards/numbers_1/card_8.png") },
	{ name: "a nine", image: require("../assets/cards/numbers_1/card_9.png") },
	{ name: "a ten", image: require("../assets/cards/numbers_1/card_10.png") },
	{
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
			{/* <View style={styles.streakContainer}>
				<Text style={styles.streakText}>Streak: 3</Text>
			</View> */}

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
