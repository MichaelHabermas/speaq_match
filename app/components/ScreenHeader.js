import React from "react";
import { View, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";
import NavButton from "./NavButton";
import Text from "./Text";

function ScreenHeader({
	children,
	navLeftIcon,
	navRightIcon,
	navLeft,
	navRight,
	showLeftButton = true,
	showRightButton = true,
	showTitle = true,
	title,
	titleOffset,
}) {
	return (
		<View style={styles.container}>
			{showTitle && (
				<Text
					style={[styles.headerText, { marginTop: titleOffset }]}
					fontFam="bowlby"
				>
					{title}
				</Text>
			)}
			{showLeftButton && (
				<NavButton
					icon={navLeftIcon}
					onPress={navLeft}
					style={[styles.button, styles.leftButton]}
				/>
			)}
			{showRightButton && (
				<NavButton
					icon={navRightIcon}
					onPress={navRight}
					style={[styles.button, styles.rightButton]}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: "100%",
	},
	headerText: {
		color: defaultStyles.colors.gold,
		fontSize: 60,
		lineHeight: 55,
		paddingTop: 40,
		textAlign: "center",
		width: "80%",
	},
	button: {
		position: "absolute",
		width: 69,
		height: 69,
		borderRadius: 35,
	},
	leftButton: {
		top: 0,
		left: 20,
	},
	rightButton: {
		top: 0,
		right: 20,
	},
});

export default ScreenHeader;
