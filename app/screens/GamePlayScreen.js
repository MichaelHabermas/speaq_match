import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
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
		width: "100%",
		height: 170,
		position: "absolute",
		bottom: 0,
		marginBottom: Platform.OS == "android" ? 0 : -40,
	},
	speakerImage: {
		resizeMode: "contain",
		width: "100%",
		height: "100%",
	},
	speakerTextContainer: {
		width: "96%",
		height: "55%",
		alignSelf: "center",
		position: "absolute",
		justifyContent: "center",
		fontSize: 30,
	},
	speakerText: {
		fontSize: 30,
		textAlign: "center",
		height: "100%",
		justifyContent: "center",
		lineHeight: 40,
		paddingTop: 5,
	},
});

export default GamePlayScreen;
