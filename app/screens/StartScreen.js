import React from "react";
import { StyleSheet, Image } from "react-native";

// redux
import { connect } from "react-redux";

//components
import ScreenHeader from "../components/ScreenHeader";
import Screen from "../components/Screen";
import ButtonMain from "../components/ButtonMain";

// assets
import speaq_logo from "../assets/speaq_logo.png";

function StartScreen({ navigation, profileCreated }) {
	const handleStart = () => {
		if (profileCreated) {
			navigation.navigate("LevelSelect");
		} else {
			navigation.navigate("Profile");
		}
	};

	return (
		<Screen style={styles.screen}>
			<ScreenHeader
				navLeft={() => navigation.navigate("OptionsReset")}
				navLeftIcon={require("../assets/buttons/options_icon_light.png")}
				showRightButton={false}
				showTitle={false}
			/>
			<Image source={speaq_logo} style={styles.logo} />
			<ButtonMain style={styles.button} title="Start" onPress={handleStart} />
		</Screen>
	);
}

const styles = StyleSheet.create({
	logo: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "30%",
		marginTop: "45%",
	},
	screen: {
		alignItems: "center",
		flex: 1,
		height: "100%",
		width: "100%",
	},
});

const mapStateToProps = state => ({
	profileCreated: state.matchAndMemory.profileCreated,
});

// const mapActionsToProps = {
//     updateRouterElem // unrelated example
// }

export default connect(mapStateToProps)(StartScreen);
