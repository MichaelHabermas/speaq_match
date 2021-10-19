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
	title,
	titleOffset,
}) {
	return (
		<View style={styles.container}>
			<Text
				style={[styles.headerText, { marginTop: titleOffset }]}
				fontFam="bowlby"
			>
				{title}
			</Text>
			{showLeftButton && (
				<NavButton
					icon={navLeftIcon}
					onPress={navLeft}
					style={styles.leftButton}
				/>
			)}
			{showRightButton && (
				<NavButton
					icon={navRightIcon}
					onPress={navRight}
					style={styles.rightButton}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { alignItems: "center", width: "100%" },
	headerText: {
		color: defaultStyles.colors.gold,
		fontSize: 60,
		lineHeight: 55,
		paddingTop: 40,
		textAlign: "center",
		textShadowColor: "rgba(0, 0, 0, 0.3)",
		textShadowOffset: {
			width: 2,
			height: 2,
		},
		textShadowRadius: 8,
		width: "80%",
	},
	leftButton: { left: 20 },
	rightButton: { right: 20 },
});

export default ScreenHeader;
