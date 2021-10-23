import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

// redux
import { connect } from "react-redux";
import { setProfile } from "../../store/profileAction";

// components
import ButtonMain from "../components/ButtonMain";
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import OptionsButton from "../components/OptionsButton";
import Text from "../components/Text";
import VertScrollSelector from "../components/VertScrollSelector";

const initialProfile = {
	gender: "",
	language_to_learn: "french",
};

// TODO: will need to get this from the data
const scrollOptions = [
	"English",
	"Spanish",
	"French",
	"Italian",
	"German",
	"Russian",
	"Portuguese",
	"Mandarin",
	"Japanese",
	"Korean",
	"Hindi",
	"Arabic",
];

function UserProfileScreen({ navigation, gameState, dispatch }) {
	const [newProfile, setNewProfile] = useState(initialProfile);

	console.log("profile screen state", gameState);

	const handleSaveProfile = () => {
		dispatch(setProfile(newProfile));
		navigation.navigate("LevelSelect");
	};

	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={() => navigation.goBack()}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
				showRightButton={false}
				title="User Profile"
				titleOffset={20}
			/>
			<View style={styles.optionsContainer}>
				<View style={styles.optionLabel}>
					<Text style={styles.optionText} fontFam="bowlby">
						Gender
					</Text>
					<TouchableOpacity
						onPress={() => {
							// TODO: insert modal for gender info
							console.log(" Gender help is pushed");
						}}
						style={styles.genderInfoButton}
					>
						<Image
							style={styles.genderHelp}
							source={require("../assets/buttons/help_icon_light.png")}
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.genderButtons}>
					<OptionsButton
						name="Male"
						onPress={() => {
							// TODO: toggle the gender button
							console.log("male button pressed");
						}}
					/>
					<OptionsButton
						name="Female"
						onPress={() => {
							// TODO: toggle the gender button
							console.log("female button pressed");
						}}
					/>
				</View>
			</View>

			<View style={styles.optionsContainer}>
				<View style={styles.optionLabel}>
					<Text style={styles.optionText} fontFam="bowlby">
						Language
					</Text>
				</View>
				<View style={styles.languageField}>
					<VertScrollSelector
						scrollOptions={scrollOptions}
						style={styles.languageSelector}
					/>
				</View>
			</View>

			<ButtonMain
				onPress={handleSaveProfile}
				style={styles.saveButton}
				title="Save"
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {},
	genderButtons: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "100%",
	},
	genderHelp: {
		height: "100%",
		resizeMode: "contain",
		width: "100%",
	},
	genderInfoButton: {
		backgroundColor: defaultStyles.colors.gold,
		borderRadius: 13,
		height: 26,
		position: "absolute",
		right: -20,
		top: 0,
		width: 26,
	},
	languageField: {
		width: "80%",
	},
	languageSelector: {
		width: "100%",
	},
	optionsContainer: {
		alignItems: "center",
		marginVertical: 30,
	},
	optionLabel: {},
	optionText: {
		color: defaultStyles.colors.white,
		fontSize: 50,
	},
	saveButton: {
		marginTop: 80,
		width: "100%",
	},
});

const mapStateToProps = state => ({
	gameState: state.matchAndMemory,
});

export default connect(mapStateToProps)(UserProfileScreen);
