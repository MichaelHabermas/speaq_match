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

// numbers 2
// card 11 pulled from above
import card_12 from "./assets/cards/numbers_2/card_12.png";
import card_13 from "./assets/cards/numbers_2/card_13.png";
import card_14 from "./assets/cards/numbers_2/card_14.png";
import card_15 from "./assets/cards/numbers_2/card_15.png";
import card_16 from "./assets/cards/numbers_2/card_16.png";
import card_17 from "./assets/cards/numbers_2/card_17.png";
import card_18 from "./assets/cards/numbers_2/card_18.png";
import card_19 from "./assets/cards/numbers_2/card_19.png";
import card_20 from "./assets/cards/numbers_2/card_20.png";
import card_21 from "./assets/cards/numbers_2/card_21.png";
import card_22 from "./assets/cards/numbers_2/card_22.png";

// numbers 3
// card 10 pulled from above
// card 20 pulled from above
import card_30 from "./assets/cards/numbers_3/card_30.png";
import card_40 from "./assets/cards/numbers_3/card_40.png";
import card_50 from "./assets/cards/numbers_3/card_50.png";
import card_60 from "./assets/cards/numbers_3/card_60.png";
import card_70 from "./assets/cards/numbers_3/card_70.png";
import card_80 from "./assets/cards/numbers_3/card_80.png";
import card_90 from "./assets/cards/numbers_3/card_90.png";
import card_100 from "./assets/cards/numbers_3/card_100.png";
import card_1000 from "./assets/cards/numbers_3/card_1000.png";
import card_10000 from "./assets/cards/numbers_3/card_10000.png";

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
import animals1Cow from "./assets/cards/animals_1/animals1Cow.png";
import animals1Bird from "./assets/cards/animals_1/animals1Bird.png";
import animals1Bug from "./assets/cards/animals_1/animals1Bug.png";
import animals1Cat from "./assets/cards/animals_1/animals1Cat.png";
import animals1Chicken from "./assets/cards/animals_1/animals1Chicken.png";
import animals1Dog from "./assets/cards/animals_1/animals1Dog.png";
import animals1Fish from "./assets/cards/animals_1/animals1Fish.png";
import animals1Horse from "./assets/cards/animals_1/animals1Horse.png";
import animals1Mouse from "./assets/cards/animals_1/animals1Mouse.png";
import animals1Pig from "./assets/cards/animals_1/animals1Pig.png";
import animals1Rabbit from "./assets/cards/animals_1/animals1Rabbit.png";
import animals1Snake from "./assets/cards/animals_1/animals1Snake.png";

//shapes and colors 1
import arrow from "./assets/cards/shapes_colors_1/grey_arrow.png";
import circle from "./assets/cards/shapes_colors_1/blue_circle.png";
import cone from "./assets/cards/shapes_colors_1/brown_cone.png";
import crescent from "./assets/cards/shapes_colors_1/pink_crescent.png";
import cylinder from "./assets/cards/shapes_colors_1/green_cylinder.png";
import cube from "./assets/cards/shapes_colors_1/purple_cube.png";
import line from "./assets/cards/shapes_colors_1/black_line.png";
import oval from "./assets/cards/shapes_colors_1/white_oval.png";
import rectangle from "./assets/cards/shapes_colors_1/rainbow_rectangle.png";
import sphere from "./assets/cards/shapes_colors_1/orange_sphere.png";
import square from "./assets/cards/shapes_colors_1/red_square.png";
import triangle from "./assets/cards/shapes_colors_1/yellow_triangle.png";

// prepositions 1
import above from "./assets/cards/prepositions/above.png";
import behind from "./assets/cards/prepositions/behind.png";
import below from "./assets/cards/prepositions/below.png";
import between from "./assets/cards/prepositions/between.png";
import far from "./assets/cards/prepositions/far.png";
import in_front from "./assets/cards/prepositions/in_front.png";
import in_it from "./assets/cards/prepositions/in.png";
import near from "./assets/cards/prepositions/near.png";
import next_to from "./assets/cards/prepositions/next_to.png";
import on from "./assets/cards/prepositions/on.png";
import surrounded_by from "./assets/cards/prepositions/surrounded_by.png";
import under from "./assets/cards/prepositions/under.png";

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

// TODO: THIS NEEDS WORK...look at food_1 and numbers_1, vs LSS
const decks = {
	template: {
		locked: "true",
		deck: [
			{
				id: 1,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 2,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 3,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 4,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 5,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 6,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 7,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 8,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 9,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 10,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 11,
				image: card_0,
				languages: {
					english: "",
				},
			},
			{
				id: 12,
				image: card_0,
				languages: {
					english: "",
				},
			},
		],
	},
	food_1: {
		unlocked: true,
		completed: false,
		isSelected: false,
		deck: [
			{
				id: 1,
				image: bread,
				languages: {
					english: "a loaf of bread",
					spanish: "una barra de pan",
					french: "une pâte de pain",
					italian: "una fetta di pane",
					german: "ein Teig",
					russian: "буханка хлеба",
				},
				quality: ["food", "brown", "soft"],
			},
			{
				id: 2,
				image: cheese,
				languages: {
					english: "a piece of cheese",
					spanish: "un pedazo de queso",
					french: "un morceau de fromage",
					italian: "una fetta di formaggio",
					german: "ein Stück Käse",
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
					russian: "стакан с водой",
				},
			},
		],
	},
	numbers_1: {
		locked: "false",
		deck: [
			{
				id: 1,
				image: card_0,
				languages: {
					english: "a zero",
					spanish: "uno cero",
					french: "un zéro",
					italian: "un zero",
					german: "eins null",
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
					russian: "одиннадцать",
				},
			},
		],
	},
	numbers_2: {
		locked: "false",
		deck: [
			{
				id: 1,
				image: card_11,
				languages: {
					english: "an eleven",
					spanish: "uno once",
					french: "un onze",
					italian: "un undici",
					german: "eins elf",
					russian: "одиннадцать",
				},
			},
			{
				id: 2,
				image: card_12,
				languages: {
					english: "a twelve",
					spanish: "uno doce",
					french: "un douze",
					italian: "un dodici",
					german: "eins zwölf",
					russian: "двенадцать",
				},
			},
			{
				id: 3,
				image: card_13,
				languages: {
					english: "a thirteen",
					spanish: "uno trece",
					french: "un treize",
					italian: "un tretti",
					german: "eins dreizehn",
					russian: "тринадцать",
				},
			},
			{
				id: 4,
				image: card_14,
				languages: {
					english: "a fourteen",
					spanish: "uno catorce",
					french: "un quatorze",
					italian: "un quattordici",
					german: "eins vierzehn",
					russian: "четырнадцать",
				},
			},
			{
				id: 5,
				image: card_15,
				languages: {
					english: "a fifteen",
					spanish: "uno quince",
					french: "un quinze",
					italian: "un quindici",
					german: "eins fünfzehn",
					russian: "пятнадцать",
				},
			},
			{
				id: 6,
				image: card_16,
				languages: {
					english: "a sixteen",
					spanish: "uno dieciséis",
					french: "un seize",
					italian: "un sedici",
					german: "eins sechzehn",
					russian: "шестнадцать",
				},
			},
			{
				id: 7,
				image: card_17,
				languages: {
					english: "a seventeen",
					spanish: "uno diecisiete",
					french: "un dix-sept",
					italian: "un diciassette",
					german: "eins siebzehn",
					russian: "семнадцать",
				},
			},
			{
				id: 8,
				image: card_18,
				languages: {
					english: "an eighteen",
					spanish: "uno dieciocho",
					french: "un dix-huit",
					italian: "un diciotto",
					german: "eins achtzehn",
					russian: "восемнадцать",
				},
			},
			{
				id: 9,
				image: card_19,
				languages: {
					english: "an nineteen",
					spanish: "uno diecinueve",
					french: "un dix-neuf",
					italian: "un diciannove",
					german: "eins neunzehn",
					russian: "девятнадцать",
				},
			},
			{
				id: 10,
				image: card_20,
				languages: {
					english: "a twenty",
					spanish: "uno veinte",
					french: "un vingt",
					italian: "un venti",
					german: "eins zwanzig",
					russian: "двадцать",
				},
			},
			{
				id: 11,
				image: card_21,
				languages: {
					english: "a twenty-one",
					spanish: "uno veintiuno",
					french: "un vingt-et-un",
					italian: "un ventuno",
					german: "eins einundzwanzig",
					russian: "двадцать один",
				},
			},
			{
				id: 12,
				image: card_22,
				languages: {
					english: "an twenty-two",
					spanish: "uno veintidós",
					french: "un vingt-deux",
					italian: "un ventidue",
					german: "eins zweiundzwanzig",
					russian: "двадцать два",
				},
			},
		],
	},
	numbers_3: {
		locked: "false",
		deck: [
			{
				id: 1,
				image: card_10,
				languages: {
					english: "a ten",
					spanish: "un diez",
					french: "un dix",
					italian: "un dieci",
					german: "eins zehn",
					russian: "десять",
				},
			},
			{
				id: 2,
				image: card_20,
				languages: {
					english: "a twenty",
					spanish: "un veinte",
					french: "un vingt",
					italian: "un venti",
					german: "eins zwanzig",
					russian: "двадцать",
				},
			},
			{
				id: 3,
				image: card_30,
				languages: {
					english: "a thirty",
					spanish: "un treinta",
					french: "un trente",
					italian: "un trenta",
					german: "eins dreißig",
					russian: "тридцать",
				},
			},
			{
				id: 4,
				image: card_40,
				languages: {
					english: "a fourty",
					spanish: "un cuarenta",
					french: "un quarante",
					italian: "un quaranta",
					german: "eins vierzig",
					russian: "сорок",
				},
			},
			{
				id: 5,
				image: card_50,
				languages: {
					english: "a fifty",
					spanish: "un cincuenta",
					french: "un cinquante",
					italian: "un cinquanta",
					german: "eins fünfzig",
					russian: "пятьдесят",
				},
			},
			{
				id: 6,
				image: card_60,
				languages: {
					english: "a sixty",
					spanish: "un sesenta",
					french: "un soixante",
					italian: "un sessanta",
					german: "eins sechzig",
					russian: "шестьдесят",
				},
			},
			{
				id: 7,
				image: card_70,
				languages: {
					english: "a seventy",
					spanish: "un setenta",
					french: "un soixante-dix",
					italian: "un settanta",
					german: "eins siebzig",
					russian: "семьдесят",
				},
			},
			{
				id: 8,
				image: card_80,
				languages: {
					english: "an eighty",
					spanish: "un ochenta",
					french: "un quatre-vingt",
					italian: "un ottanta",
					german: "eins achtzig",
					russian: "восемьдесят",
				},
			},
			{
				id: 9,
				image: card_90,
				languages: {
					english: "an ninety",
					spanish: "un noventa",
					french: "un quatre-vingt-dix",
					italian: "un novanta",
					german: "eins neunzig",
					russian: "девяносто",
				},
			},
			{
				id: 10,
				image: card_100,
				languages: {
					english: "a hundred",
					spanish: "un cien",
					french: "un cent",
					italian: "un cento",
					german: "eins hundert",
					russian: "сто",
				},
			},
			{
				id: 11,
				image: card_1000,
				languages: {
					english: "a thousand",
					spanish: "un mil",
					french: "un mille",
					italian: "un mille",
					german: "eins tausend",
					russian: "тысяча",
				},
			},
			{
				id: 12,
				image: card_10000,
				languages: {
					english: "a ten thousand",
					spanish: "un diez mil",
					french: "un dix mille",
					italian: "un dieci mille",
					german: "eins zehn-tausend",
					russian: "десять тысяч",
				},
			},
		],
	},
	"shapes_&_colors": {
		locked: "false",
		deck: [
			{
				id: 1,
				image: arrow,
				languages: {
					english: "a grey arrow",
					spanish: "una flecha gris",
					french: "une flèche grise",
					italian: "una freccia grigia",
					german: "eine graue Pfeil",
					russian: "серая стрелка",
				},
			},
			{
				id: 2,
				image: circle,
				languages: {
					english: "a blue circle",
					spanish: "un círculo azul",
					french: "un cercle bleu",
					italian: "un cerchio blu",
					german: "ein blauer Kreis",
					russian: "синий круг",
				},
			},
			{
				id: 3,
				image: cone,
				languages: {
					english: "a brown cone",
					spanish: "un cono marrón",
					french: "un cône marron",
					italian: "un cono marrone",
					german: "ein braunes Kegel",
					russian: "конус бурый",
				},
			},
			{
				id: 4,
				image: crescent,
				languages: {
					english: "a pink crescent",
					spanish: "un creciente rosa",
					french: "un crecrescent rose",
					italian: "un crecenete rosa",
					german: "ein rosa Zwischenkreis",
					russian: "розовый крест",
				},
			},
			{
				id: 5,
				image: cylinder,
				languages: {
					english: "a green cylinder",
					spanish: "un cilindro verde",
					french: "un cylindre vert",
					italian: "un cilindro verde",
					german: "ein grüner Zylinder",
					russian: "зеленый цилиндр",
				},
			},
			{
				id: 6,
				image: cube,
				languages: {
					english: "a purple cube",
					spanish: "un cubo morado",
					french: "un cube violet",
					italian: "un cubo viola",
					german: "ein violettes Würfel",
					russian: "фиолетовый куб",
				},
			},
			{
				id: 7,
				image: line,
				languages: {
					english: "a black line",
					spanish: "una línea negra",
					french: "une ligne noire",
					italian: "una linea nera",
					german: "eine schwarze Linie",
					russian: "черная линия",
				},
			},
			{
				id: 8,
				image: oval,
				languages: {
					english: "a white oval",
					spanish: "un óvalo blanco",
					french: "un ovale blanc",
					italian: "un ovale bianco",
					german: "ein weißes Oval",
					russian: "белый овал",
				},
			},
			{
				id: 9,
				image: rectangle,
				languages: {
					english: "a rainbow rectangle",
					spanish: "un rectángulo de arcoiris",
					french: "un rectangle arc-en-ciel",
					italian: "un rettangolo arcobaleno",
					german: "ein Regenbogenrechteck",
					russian: "прямоугольник с небесами",
				},
			},
			{
				id: 10,
				image: sphere,
				languages: {
					english: "an orange sphere",
					spanish: "una esfera naranja",
					french: "une sphère orange",
					italian: "una sfera arancione",
					german: "eine orange-Kugel",
					russian: "оранжевая сфера",
				},
			},
			{
				id: 11,
				image: square,
				languages: {
					english: "a red square",
					spanish: "un cuadrado rojo",
					french: "un carré rouge",
					italian: "un quadrato rosso",
					german: "ein rotes Quadrat",
					russian: "красный квадрат",
				},
			},
			{
				id: 12,
				image: triangle,
				languages: {
					english: "a yellow triangle",
					spanish: "un triángulo amarillo",
					french: "un triangle jaune",
					italian: "un triangolo giallo",
					german: "ein gelbes Dreieck",
					russian: "желтый треугольник",
				},
			},
		],
	},
	prepositions: {
		locked: "false",
		deck: [
			{
				id: 1,
				image: above,
				languages: {
					english: "a ball above a box",
					spanish: "una bola encima de una caja",
					french: "un ballon au-dessus d'une boîte",
					italian: "una pallina sopra una scatola",
					german: "ein Ball über eine Kiste",
					russian: "мяч над коробкой",
				},
			},
			{
				id: 2,
				image: behind,
				languages: {
					english: "a ball behind a box",
					spanish: "una bola detrás de una caja",
					french: "un ballon derrière une boîte",
					italian: "una pallina dietro una scatola",
					german: "ein Ball hinter einer Kiste",
					russian: "мяч позади коробки",
				},
			},
			{
				id: 3,
				image: below,
				languages: {
					english: "a ball below a box",
					spanish: "una bola debajo de una caja",
					french: "un ballon sous une boîte",
					italian: "una pallina sotto una scatola",
					german: "ein Ball unter einer Kiste",
					russian: "мяч под коробкой",
				},
			},
			{
				id: 4,
				image: between,
				languages: {
					english: "a ball between boxes",
					spanish: "una bola entre cajas",
					french: "un ballon entre des boîtes",
					italian: "una pallina tra scatole",
					german: "ein Ball zwischen Kisten",
					russian: "мяч между коробками",
				},
			},
			{
				id: 5,
				image: far,
				languages: {
					english: "a ball far from a box",
					spanish: "una bola lejos de una caja",
					french: "un ballon loin d'une boîte",
					italian: "una pallina lontana da una scatola",
					german: "ein Ball weit von einer Kiste",
					russian: "мяч далеко от коробки",
				},
			},
			{
				id: 6,
				image: in_front,
				languages: {
					english: "a ball in front of a box",
					spanish: "una bola delante de una caja",
					french: "un ballon devant une boîte",
					italian: "una pallina in primo piano",
					german: "ein Ball vor einer Kiste",
					russian: "мяч перед коробкой",
				},
			},
			{
				id: 7,
				image: in_it,
				languages: {
					english: "a ball in a box",
					spanish: "una bola en una caja",
					french: "un ballon dans une boîte",
					italian: "una pallina in una scatola",
					german: "ein Ball in einer Kiste",
					russian: "мяч в коробке",
				},
			},
			{
				id: 8,
				image: near,
				languages: {
					english: "a ball near a box",
					spanish: "una bola cerca de una caja",
					french: "un ballon près d'une boîte",
					italian: "una pallina vicino a una scatola",
					german: "ein Ball in der Nähe einer Kiste",
					russian: "мяч в пределах коробки",
				},
			},
			{
				id: 9,
				image: next_to,
				languages: {
					english: "a ball next to a box",
					spanish: "una bola al lado de una caja",
					french: "un ballon à côté d'une boîte",

					italian: "una pallina accanto a una scatola",
					german: "ein Ball neben einer Kiste",
					russian: "мяч по боку коробки",
				},
			},
			{
				id: 10,
				image: on,
				languages: {
					english: "a ball on a box",
					spanish: "una bola sobre una caja",
					french: "un ballon sur une boîte",
					italian: "una pallina sopra una scatola",
					german: "ein Ball auf einer Kiste",
					russian: "мяч на коробке",
				},
			},
			{
				id: 11,
				image: surrounded_by,
				languages: {
					english: "a ball surrounded by boxes",
					spanish: "una bola rodeando por cajas",
					french: "un ballon entouré de boîtes",
					italian: "una pallina circondata da scatole",
					german: "ein Ball um Kisten",
					russian: "мяч окруженный коробками",
				},
			},
			{
				id: 12,
				image: under,
				languages: {
					english: "a ball under a box",
					spanish: "una bola debajo de una caja",
					french: "un ballon sous une boîte",
					italian: "una pallina sotto una scatola",
					german: "ein Ball unter einer Kiste",
					russian: "мяч под коробкой",
				},
			},
		],
	},
	animals_1: {
		locked: "false",
		deck: [
			{
				id: 1,
				image: animals1Cow,
				languages: {
					english: "a cow",
					spanish: "una vaca",
					french: "une vache",
					italian: "un cappa",
					german: "eine Kuh",
					russian: "корова",
				},
			},
			{
				id: 2,
				image: animals1Bird,
				languages: {
					english: "a bird",
					spanish: "un pájaro",
					french: "un oiseau",
					italian: "un pinguino",
					german: "ein Vogel",
					russian: "птица",
				},
			},
			{
				id: 3,
				image: animals1Bug,
				languages: {
					english: "a bug",
					spanish: "un insecto",
					french: "un insecte",
					italian: "un grillo",
					german: "ein Biest",
					russian: "грызун",
				},
			},
			{
				id: 4,
				image: animals1Cat,
				languages: {
					english: "a cat",
					spanish: "un gato",
					french: "un chat",
					italian: "un gatto",
					german: "ein Katze",
					russian: "кошка",
				},
			},
			{
				id: 5,
				image: animals1Chicken,
				languages: {
					english: "a chicken",
					spanish: "un pollito",
					french: "un poulet",
					italian: "un pollo",
					german: "ein Hähnchen",
					russian: "курица",
				},
			},
			{
				id: 6,
				image: animals1Dog,
				languages: {
					english: "a dog",
					spanish: "un perro",
					french: "un chien",
					italian: "un cane",
					german: "ein Hund",
					russian: "собака",
				},
			},
			{
				id: 7,
				image: animals1Fish,
				languages: {
					english: "a fish",
					spanish: "un pez",
					french: "un poisson",
					italian: "un pesce",
					german: "ein Fisch",
					russian: "рыба",
				},
			},
			{
				id: 8,
				image: animals1Horse,
				languages: {
					english: "a horse",
					spanish: "un caballo",
					french: "un cheval",
					italian: "un cavallo",
					german: "ein Pferd",
					russian: "лошадь",
				},
			},
			{
				id: 9,
				image: animals1Mouse,
				languages: {
					english: "a mouse",
					spanish: "un ratón",
					french: "un souris",
					italian: "un gatto",
					german: "ein Maus",
					russian: "мышь",
				},
			},
			{
				id: 10,
				image: animals1Pig,
				languages: {
					english: "a pig",
					spanish: "un cerdo",
					french: "un cochon",
					italian: "un maiale",
					german: "ein Schwein",
					russian: "свинья",
				},
			},
			{
				id: 11,
				image: animals1Rabbit,
				languages: {
					english: "a rabbit",
					spanish: "un conejo",
					french: "un lapin",
					italian: "un riccio",
					german: "ein Kaninchen",
					russian: "кролик",
				},
			},
			{
				id: 12,
				image: animals1Snake,
				languages: {
					english: "a snake",
					spanish: "una serpiente",
					french: "un serpent",
					italian: "un serpente",
					german: "ein Schlangen",
					russian: "змея",
				},
			},
		],
	},
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
			russian: {
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
			russian: {
				pre: "Я хочу ",
				post: ".",
			},
		},
	},
	4: {
		languages: {
			english: {
				pre: "Do you have ",
				post: "?",
			},
			spanish: {
				pre: "¿Tienes ",
				post: "?",
			},
			french: {
				pre: "Avez-vous ",
				post: " ?",
			},
			italian: {
				pre: "Hai ",
				post: "?",
			},
			german: {
				pre: "Haben Sie ",
				post: "?",
			},
			russian: {
				pre: "У вас ",
				post: "?",
			},
		},
	},
};
const languages = {
	english: {
		levels: {
			1: {
				pre: "",
				post: "",
				unlocked: true,
				completed: false,
			},
			2: {
				pre: "It's ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			3: {
				pre: "I want ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			4: {
				pre: "Do you have ",
				post: "?",
				unlocked: true,
				completed: false,
			},
			5: {
				pre: "Give me ",
				post: ".",
				unlocked: false,
				completed: false,
			},
		},
	},
	spanish: {
		levels: {
			1: {
				pre: "",
				post: "",
				unlocked: true,
				completed: false,
			},
			2: {
				pre: "Es ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			3: {
				pre: "Quiero ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			4: {
				pre: "Tienes ",
				post: "?",
				unlocked: true,
				completed: false,
			},
			5: {
				pre: "Dame ",
				post: ".",
				unlocked: false,
				completed: false,
			},
		},
	},
	french: {
		levels: {
			1: {
				pre: "",
				post: "",
				unlocked: true,
				completed: false,
			},
			2: {
				pre: "Il est ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			3: {
				pre: "Je veux ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			4: {
				pre: "Avez-vous ",
				post: " ?",
				unlocked: true,
				completed: false,
			},
			5: {
				pre: "Donnez-moi ",
				post: ".",
				unlocked: false,
				completed: false,
			},
		},
	},
	italian: {
		levels: {
			1: {
				pre: "",
				post: "",
				unlocked: true,

				completed: false,
			},
			2: {
				pre: "È ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			3: {
				pre: "Voglio ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			4: {
				pre: "Hai ",
				post: "?",
				unlocked: true,
				completed: false,
			},
			5: {
				pre: "Dammi ",
				post: ".",
				unlocked: false,
				completed: false,
			},
		},
	},
	german: {
		levels: {
			1: {
				pre: "",
				post: "",
				unlocked: true,
				completed: false,
			},
			2: {
				pre: "Es ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			3: {
				pre: "Ich will ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			4: {
				pre: "Haben Sie ",
				post: "?",
				unlocked: true,
				completed: false,
			},
			5: {
				pre: "Geben Sie mir ",
				post: ".",
				unlocked: false,
				completed: false,
			},
		},
	},
	russian: {
		levels: {
			1: {
				pre: "",
				post: "",
				unlocked: true,
				completed: false,
			},
			2: {
				pre: "Это ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			3: {
				pre: "Я хочу ",
				post: ".",
				unlocked: true,
				completed: false,
			},
			4: {
				pre: "У вас ",
				post: "?",
				unlocked: true,

				completed: false,
			},
			5: {
				pre: "Дайте мне ",
				post: ".",
				unlocked: false,
				completed: false,
			},
		},
	},
};

export { characters, decks, levels, languages };
