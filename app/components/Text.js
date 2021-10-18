import React from "react";
import { Text } from "react-native";
import AppLoading from "expo-app-loading";
import {
	useFonts,
	AlfaSlabOne_400Regular,
} from "@expo-google-fonts/alfa-slab-one";
import { BowlbyOneSC_400Regular } from "@expo-google-fonts/bowlby-one-sc";

function AppText({ children, fontFam, style, ...otherProps }) {
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
			style={[style, { fontFamily: fontyFont || "AlfaSlabOne_400Regular" }]}
			{...otherProps}
		>
			{children}
		</Text>
	);
}

export default AppText;
