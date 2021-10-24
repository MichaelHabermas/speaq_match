import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// components
import HelpMenuItem from "../components/HelpMenuItem";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";

// assets
import card0 from "../assets/cards/numbers_1/card_0.png";
import card1 from "../assets/cards/numbers_1/card_1.png";
import card2 from "../assets/cards/numbers_1/card_2.png";
import card3 from "../assets/cards/numbers_1/card_3.png";
import card4 from "../assets/cards/numbers_1/card_4.png";
import card5 from "../assets/cards/numbers_1/card_5.png";

// temporary data structures
import { decks } from "../test_data";
// const cards = [
// 	{ id: 1, name: "uno zero", image: card0 },
// 	{ id: 2, name: "un uno", image: card1 },
// 	{ id: 3, name: "un due", image: card2 },
// 	{ id: 4, name: "un tre", image: card3 },
// 	{ id: 5, name: "un quattro", image: card4 },
// 	{ id: 6, name: "un cinque", image: card5 },
// 	{ id: 7, name: "un cinque", image: card5 },
// 	{ id: 8, name: "un cinque", image: card5 },
// 	{ id: 9, name: "un cinque", image: card5 },
// 	{ id: 10, name: "un cinque", image: card5 },
// 	{ id: 11, name: "un cinque", image: card5 },
// 	{ id: 12, name: "un cinque", image: card5 },
// ];

const language = "french";

const initialDeck = decks.food_1.map(card => {
	return {
		id: card.id,
		image: card.image,
		name: card.languages[language],
	};
});

// food_1: [
// 	{
// 		id: 1,
// 		image: bread,
// 		languages: {
// 			english: "a loaf of bread",
// 			spanish: "una barra de pan",
// 			french: "une pâte de pain",
// 			italian: "una fetta di pane",
// 			german: "ein Teig",
// 			russian: "буханка хлеба",
// 		},
// 	},
// ];

function HelpScreen({ navigation }) {
	const [deck, setDeck] = useState(initialDeck);

	console.log(deck);

	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navRight={() => navigation.goBack()}
				navRightIcon={require("../assets/buttons/cancel_icon_dark.png")}
				showLeftButton={false}
				title="Help"
			/>

			<View style={styles.container}>
				<ScrollView>
					<View style={styles.subContainer}>
						{deck.map((card, index) => (
							<HelpMenuItem
								key={index}
								onPress={() => console.log(`Card ${card.name} pressed`)}
								card={card}
							/>
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

export default HelpScreen;
