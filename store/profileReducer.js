import {
	SET_PROFILE,
	RESET_PROFILE,
	SET_CURRENT_GAME,
	SET_PROGRESS,
} from "./profileAction";

const initialState = {
	userProfile: {
		userLanguage: "english",
		gender: "female",
	},
	gameSettings: {
		languageToLearn: "italian",
		level: "3",
		currentDeck: "numbers_1",
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
	overall_progress: {
		tutorial_completed: false,
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
				languageToLearn: action.payload.languageToLearn,
			};
		case RESET_PROFILE:
			return {
				...initialState,
			};
		case SET_CURRENT_GAME:
			return {
				...state,
				gameSettings: {
					...state.gameSettings,
					level: action.payload.level,
					currentDeck: action.payload.currentDeck,
				},
			};
		case SET_PROGRESS:
			return {
				...state,
				overall_progress: {
					...state.overall_progress,
					levels: {
						...state.overall_progress.levels,
						[action.payload.level]: {
							...state.overall_progress.levels[action.payload.level],
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
