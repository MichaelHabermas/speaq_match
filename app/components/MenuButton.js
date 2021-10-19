import React from "react";
import {
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import Text from "../components/Text";

import defaultStyles from "../config/styles";

function MenuButton({ chosen, onPress, title }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				{chosen && (
					<Image
						style={styles.club}
						source={require("../assets/club_orange.png")}
					/>
				)}
				<Text style={styles.selectionItem} fontFam="bowlby">
					{title}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	club: {
		position: "absolute",
	},
	container: { alignItems: "center", justifyContent: "center" },
	selectionItem: {
		color: defaultStyles.colors.white,
		fontSize: 40,
	},
});

export default MenuButton;
