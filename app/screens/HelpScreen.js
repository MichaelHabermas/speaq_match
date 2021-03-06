import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Platform } from "react-native";

// redux
import { connect } from "react-redux";

// components
import HelpMenuItem from "../components/HelpMenuItem";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

// temporary data structures
import { decks } from "../test_data";

function HelpScreen({ currentDeckName, languageToLearn, navigation }) {
	const [deck, setDeck] = useState([]);

	useEffect(() => {
		const helpCards = decks[currentDeckName].deck.map(card => {
			return {
				id: card.id,
				image: card.image,
				name: card.languages[languageToLearn],
			};
		});
		setDeck(helpCards);
	}, []);

	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navRight={() => navigation.goBack()}
				navRightIcon={require("../assets/buttons/cancel_icon_dark.png")}
				showLeftButton={false}
				title="Help"
			/>

			<View style={styles.container}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.subContainer}>
						{deck.map(card => (
							<HelpMenuItem
								key={card.id}
								onPress={() => console.log(`Card ${card.name} pressed`)}
								card={card}
							/>
							// TODO: add a divider between cards
						))}
					</View>
				</ScrollView>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		bottom: 0,
		height: "90%",
		marginBottom: Platform.OS === "ios" ? -35 : 0, // TODO: fix all these with Constants
		position: "absolute",
		width: "90%",
	},
	subContainer: {
		height: "100%",
		width: "100%",
	},
	screen: {
		width: "100%",
	},
});

const mapStateToProps = state => ({
	currentDeckName: state.matchAndMemory.gameSettings.currentDeckName,
	languageToLearn: state.matchAndMemory.gameSettings.languageToLearn,
});

export default connect(mapStateToProps)(HelpScreen);
