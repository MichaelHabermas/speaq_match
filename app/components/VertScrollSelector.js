import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// redux
import { connect } from "react-redux";

// components
import Text from "../components/Text";

// styling
import defaultStyles from "../config/styles";

function VertScrollSelector({ style, gameState }) {
	return (
		<View style={[styles.container, style]}>
			<ScrollView horizontal={true} style={styles.scrollBar}>
				<Text fontFam="alfa" style={styles.text}>
					English Spanish French Italian German Russian
				</Text>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: defaultStyles.colors.white,
		borderRadius: 50,
		height: 60,
		justifyContent: "center",
		width: 160,
	},
	scrollBar: {},
	text: {
		color: defaultStyles.colors.medium,
		alignSelf: "center",

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
