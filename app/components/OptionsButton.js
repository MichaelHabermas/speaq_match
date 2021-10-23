import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import defaultStyles from "../config/styles";
import Text from "../components/Text";

function OptionsButton({
	children,
	isSelected,
	onPress,
	style,
	...otherProps
}) {
	return (
		<>
			<TouchableWithoutFeedback onPress={onPress}>
				<View style={[styles.container, style]}>
					<Text fontFam="alfa" style={styles.text}>
						{children}
					</Text>
					{isSelected && (
						<View style={[styles.container, styles.selectedContainer, style]}>
							<Text fontFam="alfa" style={styles.text}>
								{children}
							</Text>
						</View>
					)}
				</View>
			</TouchableWithoutFeedback>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: defaultStyles.colors.white,
		borderRadius: 50,
		height: 60,
		width: 160,
	},
	selectedContainer: {
		position: "absolute",
		backgroundColor: defaultStyles.colors.gold,
		shadowColor: "#000",
		shadowOffset: {
			width: 3,
			height: 3,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	text: {
		color: defaultStyles.colors.light_blue,
		fontSize: 30,
		textShadowColor: "rgba(0, 0, 0, 0.0)",
		textShadowOffset: {
			height: 0,
			width: 0,
		},
		textShadowRadius: 0,
	},
});

export default OptionsButton;
