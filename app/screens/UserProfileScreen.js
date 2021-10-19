import React from "react";
import { View, StyleSheet } from "react-native";

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
				<Text style={styles.selectionItem} fontFam="bowlby">
					Level
				</Text>
				<Text style={styles.selectionItem} fontFam="bowlby">
					Deck
				</Text>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {},
	selections: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	selectionItem: {
		color: defaultStyles.colors.white,
		fontSize: 40,
	},
});

export default UserProfileScreen;
