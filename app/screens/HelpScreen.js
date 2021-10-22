import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	View,
	ScrollView,
	FlatList,
} from "react-native";

import card0 from "../assets/cards/numbers_1/card_0.png";
import card1 from "../assets/cards/numbers_1/card_1.png";
import card2 from "../assets/cards/numbers_1/card_2.png";
import card3 from "../assets/cards/numbers_1/card_3.png";
import card4 from "../assets/cards/numbers_1/card_4.png";
import card5 from "../assets/cards/numbers_1/card_5.png";
import HelperMenu from "../components/HelperMenu";
import Screen from "../components/Screen";
import ScreenHeader from "../components/ScreenHeader";
import Text from "../components/Text";

const cards = [
	{ id: 1, name: "uno zero", image: card0 },
	{ id: 2, name: "un uno", image: card1 },
	{ id: 3, name: "un due", image: card2 },
	{ id: 4, name: "un tre", image: card3 },
	{ id: 5, name: "un quattro", image: card4 },
	{ id: 6, name: "un cinque", image: card5 },
	{ id: 6, name: "un cinque", image: card5 },
	{ id: 6, name: "un cinque", image: card5 },
	{ id: 6, name: "un cinque", image: card5 },
	{ id: 6, name: "un cinque", image: card5 },
	{ id: 6, name: "un cinque", image: card5 },
	{ id: 6, name: "un cinque", image: card5 },
];

function HelpScreen({ navigation }) {
	return (
		<Screen screen={true} style={styles.screen}>
			<ScreenHeader
				navRight={() => navigation.goBack()}
				navRightIcon={require("../assets/buttons/cancel_icon_dark.png")}
				showLeftButton={false}
				title="Help"
			/>
			<View style={styles.container}>
				{/* {helpDeck.map((deck, index) => (
							<HelperMenu
								key={index}
								onPress={() => console.log(`Card ${deck.name} pressed`)}
								name={deck.name}
								image={deck.image}
							/>
						))} */}
				{/* <FlatList
					data={cards}
					keyExtractor={card => card.id.toString()}
					renderItem={({item}) => {
						<HelperMenu
						name={item.name}
						onPress={`Card ${item.name} was pressed`}
						image={cards[0].image}
						/>
					}}
				/> */}
				<ScrollView style={styles.scrollView}>
					<View style={styles.subContainer}>
						{cards.map((deck, index) => (
							<HelperMenu
								key={index}
								onPress={() => console.log(`Card ${deck.name} pressed`)}
								name={deck.name}
								image={deck.image}
							/>
						))}
					</View>
				</ScrollView>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	// container: {
	// 	alignSelf: "center",
	// 	height: "100%",
	// 	width: "85%",
	// 	borderWidth: 1,
	// 	borderColor: "black",
	// },
	scrollView: {
		flex: 1,
		height: "100%",
		width: "100%",
	},
	container: {
		alignSelf: "center",
		bottom: 0,
		height: "70%",
		// position: "absolute",
		width: "80%",
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
