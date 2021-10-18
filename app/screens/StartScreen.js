import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

import Button from "../components/Button";

function StartScreen({ naviagation }) {
	return (
		<ImageBackground
			source={require("../assets/bg.png")}
			style={styles.background}
		>
			{/* <Button title="Start" onPress={() => props.navigation.navigate("Game")} /> */}
			<Button title="Start" onPress={() => console.log("Button works")} />
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default StartScreen;
