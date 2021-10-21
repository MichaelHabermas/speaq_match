// characters
import sasha from "./assets/speech_bubbles/sasha.png";
import toby from "./assets/speech_bubbles/toby.png";
import steven from "./assets/speech_bubbles/steven.png";
import andrea from "./assets/speech_bubbles/andrea.png";
import jessica from "./assets/speech_bubbles/jessica.png";

// numbers 1
import card_0 from "./assets/cards/numbers_1/card_0.png";
import card_1 from "./assets/cards/numbers_1/card_1.png";
import card_2 from "./assets/cards/numbers_1/card_2.png";
import card_3 from "./assets/cards/numbers_1/card_3.png";
import card_4 from "./assets/cards/numbers_1/card_4.png";
import card_5 from "./assets/cards/numbers_1/card_5.png";
import card_6 from "./assets/cards/numbers_1/card_6.png";
import card_7 from "./assets/cards/numbers_1/card_7.png";
import card_8 from "./assets/cards/numbers_1/card_8.png";
import card_9 from "./assets/cards/numbers_1/card_9.png";
import card_10 from "./assets/cards/numbers_1/card_10.png";
import card_11 from "./assets/cards/numbers_1/card_11.png";

// food 1
import bread from "./assets/cards/food_1/bread.png";
import cheese from "./assets/cards/food_1/cheese.png";
import chicken from "./assets/cards/food_1/chicken.png";
import coffee from "./assets/cards/food_1/coffee.png";
import egg from "./assets/cards/food_1/egg.png";
import fish from "./assets/cards/food_1/fish.png";
import meat from "./assets/cards/food_1/meat.png";
import milk from "./assets/cards/food_1/milk.png";
import rice from "./assets/cards/food_1/rice.png";
import tea from "./assets/cards/food_1/tea.png";
import vegetables from "./assets/cards/food_1/vegetables.png";
import water from "./assets/cards/food_1/water.png";

export const characters = [
	{
		id: 1,
		image: toby,
		gender: "male",
	},
	{
		id: 2,
		image: sasha,
		gender: "female",
	},
	{
		id: 3,
		image: steven,
		gender: "male",
	},
	{
		id: 4,
		image: andrea,
		gender: "female",
	},
	{
		id: 5,
		image: jessica,
		gender: "female",
	},
];

export const decks = {
	food_1: [
		{
			id: 1,
			name: "a zero",
			image: bread,
		},
		{
			id: 2,
			name: "a one",
			image: cheese,
		},
		{
			id: 3,
			name: "a two",
			image: chicken,
		},
		{
			id: 4,
			name: "a three",
			image: coffee,
		},
		{
			id: 5,
			name: "a four",
			image: egg,
		},
		{
			id: 6,
			name: "a five",
			image: fish,
		},
		{
			id: 7,
			name: "a six",
			image: meat,
		},
		{
			id: 8,
			name: "a seven",
			image: milk,
		},
		{
			id: 9,
			name: "an eight",
			image: rice,
		},
		{
			id: 10,
			name: "a nine",
			image: tea,
		},
		{
			id: 11,
			name: "a ten",
			image: vegetables,
		},
		{
			id: 12,
			name: "an eleven",
			image: water,
		},
	],
	numbers_1: [
		{
			id: 1,
			name: "a zero",
			image: card_0,
		},
		{
			id: 2,
			name: "a one",
			image: card_1,
		},
		{
			id: 3,
			name: "a two",
			image: card_2,
		},
		{
			id: 4,
			name: "a three",
			image: card_3,
		},
		{
			id: 5,
			name: "a four",
			image: card_4,
		},
		{
			id: 6,
			name: "a five",
			image: card_5,
		},
		{
			id: 7,
			name: "a six",
			image: card_6,
		},
		{
			id: 8,
			name: "a seven",
			image: card_7,
		},
		{
			id: 9,
			name: "an eight",
			image: card_8,
		},
		{
			id: 10,
			name: "a nine",
			image: card_9,
		},
		{
			id: 11,
			name: "a ten",
			image: card_10,
		},
		{
			id: 12,
			name: "an eleven",
			image: card_11,
		},
	],
	animals_1: [],
	shapes_colors_1: [],
	prepositions: [],
};

export const questions = [
	{
		id: 1,
		question: "Can I have an apple, please?",
	},
];

module.exports = { characters, decks, questions };
