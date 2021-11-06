import React, { useState, useEffect } from "react";
import {
	Alert,
	Modal,
	StyleSheet,
	TouchableOpacity,
	View,
	Image,
	Pressable,
} from "react-native";

// redux
import { connect } from "react-redux";
import { setProfile } from "../../store/MandMActions";

// components
import ButtonMain from "../components/ButtonMain";
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import OptionsButton from "../components/OptionsButton";
import Text from "../components/Text";
import VertScrollSelector from "../components/VertScrollSelector";

// TODO: will need to get this from the data
const scrollOptions = [
	"English",
	"Spanish",
	"French",
	"Italian",
	"German",
	"Russian",
];

function UserProfileScreen({ dispatch, navigation, gender, userLanguage }) {
	const [newProfile, setNewProfile] = useState({
		gender: gender,
		userLanguage: userLanguage,
		languageToLearn: null,
	});
	const [isFemale, setIsFemale] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		setNewProfile({
			gender: gender,
			userLanguage: userLanguage,
			languageToLearn: null,
		});
	}, []);

	console.log("newProfile: ", newProfile);

	const handleSelectGender = gender => {
		setIsFemale(gender === "female");
		setNewProfile({
			...newProfile,
			gender: gender,
		});
	};

	const handleSaveProfile = () => {
		dispatch(setProfile(newProfile));
		navigation.navigate("LevelSelect");
	};

	return (
		<Screen screen={true} style={styles.screen}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>
							Some languages affect the words or conjugations they use depending
							on the gender of the speaker and/or the responder.
						</Text>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.textStyle}>Close</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
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
							setModalVisible(!modalVisible);
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
						isSelected={isFemale}
						onPress={() => handleSelectGender("female")}
					>
						Female
					</OptionsButton>
					<OptionsButton
						isSelected={!isFemale}
						onPress={() => handleSelectGender("male")}
					>
						Male
					</OptionsButton>
				</View>
			</View>

			{/* TODO: create selection for user's known language */}

			<View style={styles.optionsContainer}>
				<View style={styles.optionLabel}>
					<Text style={styles.optionText} fontFam="bowlby">
						Learning
					</Text>
				</View>
				<View style={styles.languageField}>
					<VertScrollSelector
						scrollOptions={scrollOptions}
						style={styles.languageSelector}
						setNewProfile={setNewProfile}
						profile={newProfile}
					/>
				</View>
			</View>

			{newProfile.languageToLearn && (
				<ButtonMain
					onPress={handleSaveProfile}
					style={styles.saveButton}
					title="Save"
				/>
			)}
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
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "#FFEB5C",
		borderRadius: 20,
		padding: 15,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
		paddingHorizontal: 10,
	},
	modalText: {
		marginBottom: 15,
		// textAlign: "center",
		fontSize: 30,
	},
});

const mapStateToProps = state => ({
	gender: state.matchAndMemory.userProfile.gender,
	userLanguage: state.matchAndMemory.userProfile.userLanguage,
	languageToLearn: state.matchAndMemory.gameSettings.languageToLearn,
});

export default connect(mapStateToProps)(UserProfileScreen);
