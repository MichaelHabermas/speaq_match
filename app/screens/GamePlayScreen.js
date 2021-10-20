import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

const characters = [
	{
		id: 1,
		image: require("../assets/speech_bubbles/toby_bubble.png"),
		gender: "female",
	},
	{
		id: 2,
		image: require("../assets/speech_bubbles/sasha_bubble.png"),
		gender: "female",
	},
	{
		id: 3,
		image: require("../assets/speech_bubbles/steven_bubble.png"),
		gender: "male",
	},
	{
		id: 4,
		image: require("../assets/speech_bubbles/andrea_bubble.png"),
		gender: "female",
	},
	// {
	// 	id: 4,
	// 	image: require("../assets/speech_bubbles/steven_bubble.png"),
	// 	gender: "male",
	// },
	//
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
				<Image source={characters[0].image} />
				<Image source={characters[1].image} />
				<Image source={characters[2].image} />
				{/* <Image source={characters[3].image} /> */}
				{/* <Image source={characters[4].image} /> */}
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	speaker: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
});

export default GamePlayScreen;
