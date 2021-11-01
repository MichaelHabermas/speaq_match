export const SET_PROFILE = "SET_PROFILE";
export const RESET_PROFILE = "RESET_PROFILE";
export const INCREASE_LEVEL = "INCREASE_LEVEL";
export const SET_CURRENT_GAME = "SET_CURRENT_GAME";
export const SET_PROGRESS = "SET_PROGRESS";

export const setProfile = profile => {
	return { type: SET_PROFILE, payload: profile };
};
export const resetProfile = () => {
	return { type: RESET_PROFILE };
};
export const increaseLevel = () => {
	return { type: INCREASE_LEVEL };
};
export const setCurrentGame = currentGameSettings => {
	const convertToDeckKey = deckName => {
		return deckName.toLowerCase().split(" ").join("_");
	};
	currentGameSettings.currentDeckName = convertToDeckKey(
		currentGameSettings.currentDeckName
	);
	return { type: SET_CURRENT_GAME, payload: currentGameSettings };
};
export const setProgress = updatedProgress => {
	return { type: SET_PROGRESS, payload: updatedProgress };
};
