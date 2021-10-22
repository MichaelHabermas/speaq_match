import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { useSelector } from "react-redux";

import ButtonMain from "../components/ButtonMain";
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import OptionsButton from "../components/OptionsButton";
import Text from "../components/Text";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

const initialProfile = {
	gender: "",
	language: "english",
};

function UserProfileScreen({ navigation }) {
	const [newProfile, setNewProfile] = useState(initialProfile);

	const user_profile = useSelector(state => state.user_profile);
	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navLeft={() => navigation.goBack()}
				navLeftIcon={require("../assets/buttons/back_icon_dark.png")}
				showRightButton={false}
				title="User Profile"
				titleOffset={20}
			/>
			<View style={styles.genderContainer}>
				<View style={styles.genderLabel}>
					<Text style={styles.genderText}>Gender</Text>
					<TouchableOpacity
						onPress={() => {
							console.log("help is pushed");
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
							console.log("male button pressed");
						}}
					/>
					<OptionsButton
						name="Female"
						onPress={() => {
							console.log("female button pressed");
						}}
					/>
				</View>
			</View>

			<View style={styles.genderContainer}>
				<View style={styles.genderLabel}>
					<Text style={styles.genderText}>Language</Text>
				</View>
				<View style={styles.genderButtons}>
					<OptionsButton
						name="Italian"
						onPress={() => {
							console.log("italian button pressed");
						}}
					/>
				</View>
			</View>

			<ButtonMain
				onPress={() => {
					navigation.navigate("LevelSelect");
				}}
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
		width: "100%",
		justifyContent: "space-evenly",
	},
	genderContainer: {
		alignItems: "center",
		marginVertical: 40,
	},
	genderInfoButton: {
		backgroundColor: defaultStyles.colors.gold,
		borderRadius: 13,
		position: "absolute",
		top: 0,
		right: -20,
		height: 26,
		width: 26,
	},
	genderHelp: {
		resizeMode: "contain",
		width: "100%",
		height: "100%",
	},
	genderLabel: {},
	genderText: {
		fontSize: 50,
		color: defaultStyles.colors.white,
	},
	saveButton: {
		width: "100%",
	},
});

export default UserProfileScreen;

// const mapStateToProps = state => ({
//     routers: state.router.routers,
// })

// const mapActionsToProps = {
//     updateRouterElem,
//     updateRouterArr,
// }

// export default connect(mapStateToProps, mapActionsToProps)(UserProfileScreen);
