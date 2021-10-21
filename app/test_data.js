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

// animals1

//shapes and colors 1

// prepositions 1

const characters = [
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

const decks = {
	food_1: [
		{
			id: 1,
			image: bread,
			languages: {
				english: "a loaf of bread",
				spanish: "una barra de pan",
				french: "une pâte de pain",
				italian: "una fetta di pane",
				german: "ein Teig",
				portuguese: "uma folha de pano",
				russian: "буханка хлеба",
				polish: "łódka pączka",
				greek: "απόδια",
				farsi: "خورشید",
				egyption: "جعلة الخبز",
				chinese: "一块面包",
				japanese: "パンケーキ",
				mandarin: "一块面包",
				hebrew: "עוף בעזה",
				galiec: "pączek",
				arabic: "حبة الخبز",
				korean: "빵",
				vietnamese: "một bánh bao",
				thai: "ข้าวกล้อง",
				indonesian: "sebu",
				tagalog: "isang bawang",
				malay: "sebu",
				filipino: "isang bawang",
			},
		},
		{
			id: 2,
			image: cheese,
			languages: {
				english: "a piece of cheese",
				spanish: "un trozo de queso",
				french: "un morceau de fromage",
				italian: "una fetta di formaggio",
				german: "ein Stück Käse",
				portuguese: "um pedaço de frango",
				russian: "кусок сыра",
			},
		},
		{
			id: 3,
			image: chicken,
			languages: {
				english: "a piece of chicken",
				spanish: "un trozo de pollo",
				french: "un morceau de poulet",
				italian: "una fetta di pollo",
				german: "ein Stück Käse",
				portuguese: "um pedaço de frango",
				russian: "кусок сыра",
			},
		},
		{
			id: 4,
			image: coffee,
			languages: {
				english: "a cup of coffee",
				spanish: "una taza de café",
				french: "une tasse de café",
				italian: "una tazza di caffè",
				german: "ein Tasse Kaffee",
				portuguese: "uma tigela de café",
				russian: "купочка кофе",
			},
		},
		{
			id: 5,
			image: egg,
			languages: {
				english: "an egg",
				spanish: "un huevo",
				french: "un oeuf",
				italian: "un uovo",
				german: "ein Ei",
				portuguese: "um ovo",
				russian: "яйцо",
			},
		},
		{
			id: 6,
			image: fish,
			languages: {
				english: "a piece of fish",
				spanish: "un trozo de pescado",
				french: "un morceau de poisson",
				italian: "una fetta di pesce",
				german: "ein Stück Fisch",
				portuguese: "um pedaço de peixe",
				russian: "кусок рыбы",
			},
		},
		{
			id: 7,
			image: meat,
			languages: {
				english: "a piece of meat",
				spanish: "un trozo de carne",
				french: "un morceau de viande",
				italian: "una fetta di carne",
				german: "ein Stück Fleisch",
				portuguese: "um pedaço de carne",
				russian: "кусок мяса",
			},
		},
		{
			id: 8,
			image: milk,
			languages: {
				english: "a glass of milk",
				spanish: "una copa de leche",
				french: "un verre de lait",
				italian: "una tazza di latte",
				german: "ein Glas Milch",
				portuguese: "uma copa de leite",
				russian: "стакан с молоком",
			},
		},
		{
			id: 9,
			image: rice,
			languages: {
				english: "a bowl of rice",
				spanish: "una cesta de arroz",
				french: "un plat de riz",
				italian: "una fetta di riso",
				german: "ein Stück Reis",
				portuguese: "uma folha de arroz",
				russian: "кусок риса",
			},
		},
		{
			id: 10,
			image: tea,
			languages: {
				english: "a cup of tea",
				spanish: "una taza de té",
				french: "une tasse de thé",
				italian: "una tazza di tè",
				german: "ein Tasse Tee",
				portuguese: "uma tigela de chá",
				russian: "купочка чая",
			},
		},
		{
			id: 11,
			image: vegetables,
			languages: {
				english: "a bunch of vegetables",
				spanish: "un trozo de verduras",
				french: "un morceau de légumes",
				italian: "una fetta di verdure",
				german: "ein Stück Gemüse",
				portuguese: "um pedaço de vegetais",
				russian: "кусок овощей",
			},
		},
		{
			id: 12,
			image: water,
			languages: {
				english: "a glass of water",
				spanish: "una copa de agua",
				french: "un verre d'eau",
				italian: "una tazza di acqua",
				german: "ein Glas Wasser",
				portuguese: "uma copa de água",
				russian: "стакан с водой",
			},
		},
	],
	numbers_1: [
		{
			id: 1,
			image: card_0,
			languages: {
				english: "a zero",
				spanish: "uno cero",
				french: "un zéro",
				italian: "un zero",
				german: "eins null",
				portuguese: "um zero",
				russian: "ноль",
			},
		},
		{
			id: 2,
			image: card_1,
			languages: {
				english: "a one",
				spanish: "uno uno",
				french: "un un",
				italian: "un uno",
				german: "eins eins",
				portuguese: "um um",
				russian: "один",
			},
		},
		{
			id: 3,
			image: card_2,
			languages: {
				english: "a two",
				spanish: "uno dos",
				french: "un deux",
				italian: "un due",
				german: "eins zwei",
				portuguese: "um dois",
				russian: "два",
			},
		},
		{
			id: 4,
			image: card_3,
			languages: {
				english: "a three",
				spanish: "uno tres",
				french: "un trois",
				italian: "un tre",
				german: "eins drei",
				portuguese: "um três",
				russian: "три",
			},
		},
		{
			id: 5,
			image: card_4,
			languages: {
				english: "a four",
				spanish: "uno cuatro",
				french: "un quatre",
				italian: "un quattro",
				german: "eins vier",
				portuguese: "um quatro",
				russian: "четыре",
			},
		},
		{
			id: 6,
			image: card_5,
			languages: {
				english: "a five",
				spanish: "uno cinco",
				french: "un cinq",
				italian: "un cinque",
				german: "eins fünf",
				portuguese: "um cinco",
				russian: "пять",
			},
		},
		{
			id: 7,
			image: card_6,
			languages: {
				english: "a six",
				spanish: "uno seis",
				french: "un six",
				italian: "un sei",
				german: "eins sechs",
				portuguese: "um seis",
				russian: "шесть",
			},
		},
		{
			id: 8,
			image: card_7,
			languages: {
				english: "a seven",
				spanish: "uno siete",
				french: "un sept",
				italian: "un sette",
				german: "eins sieben",
				portuguese: "um sete",
				russian: "семь",
			},
		},
		{
			id: 9,
			image: card_8,
			languages: {
				english: "an eight",
				spanish: "uno ocho",
				french: "un huit",
				italian: "un otto",
				german: "eins acht",
				portuguese: "um oito",
				russian: "восемь",
			},
		},
		{
			id: 10,
			image: card_9,
			languages: {
				english: "a nine",
				spanish: "uno nueve",
				french: "un neuf",
				italian: "un nove",
				german: "eins neun",
				portuguese: "um nove",
				russian: "девять",
			},
		},
		{
			id: 11,
			image: card_10,
			languages: {
				english: "a ten",
				spanish: "uno diez",
				french: "un dix",
				italian: "un dieci",
				german: "eins zehn",
				portuguese: "um dez",
				russian: "десять",
			},
		},
		{
			id: 12,
			image: card_11,
			languages: {
				english: "an eleven",
				spanish: "uno once",
				french: "un onze",
				italian: "un undici",
				german: "eins elf",
				portuguese: "um onze",
				russian: "одиннадцать",
			},
		},
	],
	animals_1: [],
	shapes_colors_1: [],
	prepositions: [],
};

const levels = {
	1: {
		languages: {
			english: {
				pre: "",
				post: "",
			},
			spanish: {
				pre: "",
				post: ".",
			},
			french: {
				pre: "",
				post: "",
			},
			italian: {
				pre: "",
				post: "",
			},
			german: {
				pre: "",
				post: "",
			},
			portuguese: {
				pre: "",
				post: "",
			},
			russian: {
				pre: "",
				post: "",
			},
			polish: {
				pre: "",
				post: "",
			},
			greek: {
				pre: "",
				post: "",
			},
			farsi: {
				pre: "",
				post: "",
			},
			egyption: {
				pre: "",
				post: "",
			},
			chinese: {
				pre: "",
				post: "",
			},
			japanese: {
				pre: "",
				post: "",
			},
			mandarin: {
				pre: "",
				post: "",
			},
			hebrew: {
				pre: "",
				post: "",
			},
			galiec: {
				pre: "",
				post: "",
			},
			arabic: {
				pre: "",
				post: "",
			},
			korean: {
				pre: "",
				post: "",
			},
			vietnamese: {
				pre: "",
				post: "",
			},
			thai: {
				pre: "",
				post: "",
			},
			indonesian: {
				pre: "",
				post: "",
			},
			tagalog: {
				pre: "",
				post: "",
			},
			malay: {
				pre: "",
				post: "",
			},
			filipino: {
				pre: "",
				post: "",
			},
		},
	},
	2: {
		languages: {
			english: {
				pre: "It's ",
				post: ".",
			},
			spanish: {
				pre: "Es ",
				post: ".",
			},
			french: {
				pre: "Il est ",
				post: ".",
			},
			italian: {
				pre: "È ",
				post: ".",
			},
			german: {
				pre: "Es ",
				post: ".",
			},
			portuguese: {
				pre: "É ",
				post: ".",
			},
			russian: {
				pre: "Это ",
				post: ".",
			},
			polish: {
				pre: "To ",
				post: ".",
			},
		},
	},
	3: {
		languages: {
			english: {
				pre: "I want ",
				post: ".",
			},
			spanish: {
				pre: "Quiero ",
				post: ".",
			},
			french: {
				pre: "Je veux ",
				post: ".",
			},
			italian: {
				pre: "Voglio ",
				post: ".",
			},
			german: {
				pre: "Ich will ",
				post: ".",
			},
			portuguese: {
				pre: "Eu quero ",
				post: ".",
			},
			russian: {
				pre: "Я хочу ",
				post: ".",
			},
		},
	},
};

export { characters, decks, levels };
