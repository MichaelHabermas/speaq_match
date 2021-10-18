import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Text from "../components/Text";
import defaultStyles from "../config/styles";

const HomeScreen = ({ navigation }) => {
	return (
		<Screen>
			<Text style={styles.title} fontFam="alfa">
				Alfa ALFA
			</Text>
			<Text style={styles.subTitle} fontFam="bowlby">
				Bowlby BOWLBY
			</Text>
			<Text style={styles.subTitle} fontFam="bowlby">
				Bowlby BOWLBY
			</Text>
		</Screen>
	);
};

const styles = StyleSheet.create({
	title: {
		marginBottom: 7,
		fontSize: 80,
		color: defaultStyles.colors.gold,
		// textShadow: defaultStyles.shadows.text.outerShadow,
	},
	subTitle: {
		color: defaultStyles.colors.light_blue,
		fontSize: 60,
		// textShadow: defaultStyles.shadows.text.innerShadow,
	},
});

export default HomeScreen;
