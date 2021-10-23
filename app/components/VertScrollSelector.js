import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// redux
import { connect } from "react-redux";

// components
import Text from "../components/Text";

// styling
import defaultStyles from "../config/styles";

// temp variables
const CARD_WIDTH = 190;
const SPACING_FOR_CARD_INSET = 60;

function VertScrollSelector({ gameState, scrollOptions, style }) {
	return (
		<View style={[styles.container, style]}>
			<ScrollView
				contentContainerStyle={{
					// contentInset alternative for Android
					paddingHorizontal:
						Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
				}}
				contentInset={{
					// iOS ONLY
					top: 0,
					left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
					bottom: 0,
					right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
				}}
				decelerationRate="fast"
				horizontal // Change the direction to horizontal
				showsHorizontalScrollIndicator={false}
				snapToAlignment="center"
				snapToInterval={CARD_WIDTH + 10} // Calculate the size for a card including marginLeft and marginRight
			>
				{scrollOptions.map((option, index) => {
					return (
						<View key={index} style={styles.option}>
							<Text style={styles.optionText}>{option}</Text>
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.white,
		borderRadius: 50,
		height: 60,
		justifyContent: "center",
		width: 100,
	},
	option: {
		alignItems: "center",
		backgroundColor: "transparent",
		justifyContent: "center",
		marginHorizontal: 5,
		width: CARD_WIDTH,
	},
	optionText: {
		color: defaultStyles.colors.light_blue,
		fontSize: 30,
		textShadowColor: "rgba(0, 0, 0, 0.0)",
		textShadowOffset: {
			height: 0,
			width: 0,
		},
		textShadowRadius: 0,
	},
});

const mapStateToProps = state => ({
	gameState: state.matchAndMemory,
});

export default connect(mapStateToProps)(VertScrollSelector);
