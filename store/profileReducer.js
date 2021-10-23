import {
	SET_PROFILE,
	RESET_PROFILE,
	SET_CURRENT_GAME,
	SET_PROGRESS,
} from "./profileAction";

const initialState = {
	user_profile: {
		gender: "female",
		user_language: "",
		language_to_learn: "",
	},
	game_settings: {
		level: "",
		deck: "",
	},
	game_options: {
		learnable_languages: [
			"English",
			"Spanish",
			"French",
			"German",
			"Italian",
			"Russian",
		],
	},
	profile_created: false,
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
				user_profile: {
					...state.user_profile,
					gender: action.payload.gender,
					language_to_learn: action.payload.language_to_learn,
				},
				profile_created: true,
			};
		case RESET_PROFILE:
			return {
				...initialState,
			};
		case SET_CURRENT_GAME:
			return {
				...state,
				game_settings: {
					...state.game_settings,
					level: action.payload.level,
					deck: action.payload.deck,
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
