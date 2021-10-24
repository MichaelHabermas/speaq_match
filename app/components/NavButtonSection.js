import React from "react";
import { View, StyleSheet } from "react-native";

// component
import NavButton from "./NavButton";

// assets
import home from "../assets/buttons/home_icon_dark.png";
import replay from "../assets/buttons/replay_icon_dark.png";
import next from "../assets/buttons/forward_icon_dark.png";

function NavButtonSection({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.buttonsContainer}>
				<NavButton
					icon={home}
					onPress={() => {
						console.log("home button pressed");
						navigation.navigate("Start");
					}}
					style={styles.navButton}
				/>
				<NavButton
					icon={replay}
					onPress={() => {
						console.log("replay button pressed");
						navigation.navigate("GamePlay");
					}}
					style={styles.navButton}
				/>
				<NavButton
					icon={next}
					onPress={() => {
						console.log("next button pressed");
						navigation.navigate("GamePlay");
					}}
					style={styles.navButton}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 0,
		height: "20%",
		width: "90%",
		alignSelf: "center",
		borderColor: "black",
		borderWidth: 1,
	},
	buttonsContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: "100%",
		height: "100%",
		borderColor: "green",
		borderWidth: 1,
	},
	navButton: {
		width: 100,
		height: 100,
		borderRadius: 50,
		borderColor: "blue",
		borderWidth: 1,
	},
});

export default NavButtonSection;
