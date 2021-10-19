import React from "react";
import Constants from "expo-constants";
import { StyleSheet, ImageBackground, SafeAreaView, View } from "react-native";

import speaq_logo from "../assets/speaq_logo.png";

function Screen({ children, style }) {
	return (
		<ImageBackground
			source={require("../assets/bg.png")}
			style={styles.background}
		>
			<SafeAreaView style={[styles.screen, style]}>
				<View style={[styles.view, style]}>{children}</View>
			</SafeAreaView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
	view: {
		flex: 1,
	},
});

export default Screen;
