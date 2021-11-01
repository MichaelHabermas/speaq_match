import React from "react";
import { View, StyleSheet } from "react-native";

// redux
import { connect } from "react-redux";
import { increaseLevel } from "../../store/MandMActions";

// component
import NavButton from "./NavButton";

// assets
import home from "../assets/buttons/home_icon_dark.png";
import replay from "../assets/buttons/replay_icon_dark.png";
import next from "../assets/buttons/forward_icon_dark.png";

function NavButtonSection({ navigation, dispatch }) {
	const handleNavigation = (route, shouldProgress) => {
		if (shouldProgress) {
			dispatch(increaseLevel());
		}
		navigation.navigate(route);
	};

	return (
		<View style={styles.container}>
			<View style={styles.buttonsContainer}>
				<NavButton
					icon={home}
					onPress={() => handleNavigation("Start", true)}
					positionAndSize={styles.navButtonPos}
					shape={styles.navButton}
				/>
				<NavButton
					icon={replay}
					onPress={() => handleNavigation("GamePlay", false)}
					positionAndSize={styles.navButtonPos}
					shape={styles.navButton}
				/>
				<NavButton
					icon={next}
					onPress={() => handleNavigation("GamePlay", true)}
					GamePlay
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

const mapStateToProps = state => ({
	gameState: state.matchAndMemory,
});

export default connect(mapStateToProps)(NavButtonSection);
