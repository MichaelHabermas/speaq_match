import {
	SET_PROFILE,
	RESET_PROFILE,
	INCREASE_LEVEL,
	SET_CURRENT_GAME,
	SET_PROGRESS,
} from "./MandMActions";

const initialState = {
	userProfile: {
		userLanguage: "english",
		gender: null,
	},
	gameSettings: {
		languageToLearn: null,
		currentLevel: null,
		currentDeckName: null,
		currentDeck: {},
	},
	gameOptions: {
		learnableLanguages: [
			"English",
			"Spanish",
			"French",
			"German",
			"Italian",
			"Russian",
		],
	},
	profileCreated: false,
	overallProgress: {
		tutorialCompleted: false,
		levels: {
			//TODO: clear and fill through a data call
			1: { pre: "", post: "", unlocked: true, completed: false },
			2: { pre: "", post: "", unlocked: false, completed: false },
		},
	},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return {
				...state,
				userProfile: {
					...state.userProfile,
					gender: action.payload.gender,
				},
				profileCreated: true,
				gameSettings: {
					...state.gameSettings,
					languageToLearn: action.payload.languageToLearn,
				},
			};
		case RESET_PROFILE:
			return {
				...initialState,
			};
		case INCREASE_LEVEL:
			return {
				...state,
				gameSettings: {
					...state.gameSettings,
					currentLevel: state.gameSettings.currentLevel + 1, // TODO: prevent going over highest possible level
				},
			};
		case SET_CURRENT_GAME:
			return {
				...state,
				gameSettings: {
					...state.gameSettings,
					currentLevel: action.payload.currentLevel,
					currentDeckName: action.payload.currentDeckName,
					currentDeck: action.payload.currentDeck,
				},
			};
		case SET_PROGRESS:
			return {
				...state,
				overallProgress: {
					...state.overallProgress,
					levels: {
						...state.overallProgress.levels,
						[action.payload.level]: {
							...state.overallProgress.levels[action.payload.level],
							completed: action.payload.completed,
							unlocked: action.payload.unlocked,
						},
					},
				},
			};
		default:
			return state;
	}
};

export default reducer;
