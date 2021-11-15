import React, { useLayoutEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

// redux
import { connect } from "react-redux";

import cardFront from "../assets/cards/card_front.png";
import cardBack from "../assets/cards/card_back.png";

function GameCard({ card, handleCardTap, languageToLearn, deck }) {
	const flipAnimation = useRef(new Animated.Value(0)).current;

	let flipRotation = 0;
	flipAnimation.addListener(({ value }) => (flipRotation = value));

	useLayoutEffect(() => {
		flipToBack(flipAnimation);
	}, [deck]);

	const flipToFrontStyle = {
		transform: [
			{
				rotateY: flipAnimation.interpolate({
					inputRange: [0, 180],
					outputRange: ["0deg", "180deg"],
				}),
			},
		],
	};

	const flipToBackStyle = {
		transform: [
			{
				rotateY: flipAnimation.interpolate({
					inputRange: [0, 180],
					outputRange: ["180deg", "360deg"],
				}),
			},
		],
	};

	const flipToFront = flipAnimationProp => {
		Animated.timing(flipAnimationProp, {
			toValue: 180,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	const flipToBack = flipAnimationProp => {
		Animated.timing(flipAnimationProp, {
			toValue: 0,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	const handleCardPress = () => {
		if (!card.isFlipped) {
			flipToFront(flipAnimation);
			card.isFlipped = true;
			handleCardTap(card.languages[languageToLearn]);
		}
	};

	return (
		<Pressable style={styles.container} onPress={handleCardPress}>
			<Animated.Image
				style={{ ...styles.card, ...styles.cardBack, ...flipToBackStyle }}
				source={cardBack}
			/>
			<Animated.Image
				style={{ ...styles.card, ...styles.cardFront, ...flipToFrontStyle }}
				source={cardFront}
			/>
			<Animated.Image
				style={{ ...styles.card, ...styles.cardFront, ...flipToFrontStyle }}
				source={card.image}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "25%",
		paddingHorizontal: 1,
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.2,
		shadowRadius: 3,
		width: "33%",
	},
	// need this for the non animated build
	card: {
		height: "100%",
		position: "absolute",
		resizeMode: "contain",
		width: "100%",
	},
	// need these for the animated build
	cardFront: {
		position: "absolute",
		backfaceVisibility: "hidden",
	},
	cardBack: {},
});

const mapStateToProps = state => ({
	languageToLearn: state.matchAndMemory.gameSettings.languageToLearn,
});

export default connect(mapStateToProps)(GameCard);
