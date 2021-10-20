import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

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
			<View style={styles.speaker}>
				<Image style={styles.speakerImage} source={characters[4].image} />
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	speaker: {
		alignSelf: "center",
		width: "100%",
		height: 170,
		position: "absolute",
		bottom: 0,
		marginBottom: Platform.OS == "android" ? 0 : -20,
	},
	speakerImage: {
		resizeMode: "contain",
		width: "100%",
		height: "100%",
	},
});

export default GamePlayScreen;
