import React from "react";
import { Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import {
	useFonts,
	AlfaSlabOne_400Regular,
} from "@expo-google-fonts/alfa-slab-one";
import { BowlbyOneSC_400Regular } from "@expo-google-fonts/bowlby-one-sc";

import defaultStyles from "../config/styles";

function AppText({ children, fontFam = "alfa", style, ...otherProps }) {
	const [fontsLoaded] = useFonts({
		AlfaSlabOne_400Regular,
		BowlbyOneSC_400Regular,
	});

	const fontyFont =
		fontFam == "alfa" ? "AlfaSlabOne_400Regular" : "BowlbyOneSC_400Regular";

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<Text
			style={[
				styles.text,
				style,
				{ fontFamily: fontyFont || "AlfaSlabOne_400Regular" },
			]}
			{...otherProps}
		>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		color: defaultStyles.colors.white,
		textShadowColor: "rgba(0, 0, 0, 0.25)",
		textShadowOffset: {
			width: 2,
			height: 2,
		},
		textShadowRadius: 8,
	},
});

export default AppText;
