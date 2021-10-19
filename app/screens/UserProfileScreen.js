import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import Text from "../components/Text";

import defaultStyles from "../config/styles";

function UserProfileScreen({ navigation }) {
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
				<Image
					style={styles.club}
					source={require("../assets/club_orange.png")}
				/>
				<TouchableHighlight onPress={() => console.log("Level button pressed")}>
					<Text style={styles.selectionItem} fontFam="bowlby">
						Level
					</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => console.log("Deck button pressed")}>
					<Text style={styles.selectionItem} fontFam="bowlby">
						Deck
					</Text>
				</TouchableHighlight>
			</View>
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
