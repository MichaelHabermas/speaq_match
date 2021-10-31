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
					// TODO: action to increase the current game level and return to home
					icon={home}
					onPress={() => {
						navigation.navigate("Start");
					}}
					positionAndSize={styles.navButtonPos}
					shape={styles.navButton}
				/>
				<NavButton
					// TODO:  action to reset the current game
					icon={replay}
					onPress={() => {
						navigation.navigate("GamePlay");
					}}
					positionAndSize={styles.navButtonPos}
					shape={styles.navButton}
				/>
				<NavButton
					// TODO: action to increase the current game level
					icon={next}
					onPress={() => {
						navigation.navigate("GamePlay");
					}}
					positionAndSize={styles.navButtonPos}
					shape={styles.navButton}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonsContainer: {
		alignItems: "center",
		flexDirection: "row",
		height: "100%",
		justifyContent: "space-evenly",
		width: "100%",
	},
	container: {
		alignSelf: "center",
		bottom: 0,
		height: "20%",
		position: "absolute",
		width: "90%",
	},
	navButton: {
		borderRadius: 50,
	},
	navButtonPos: {
		height: 100,
		shadowOffset: {
			width: 3,
			height: 3,
		},
		shadowOpacity: 0.3,
		shadowRadius: 5,
		width: 100,
	},
});

export default NavButtonSection;
