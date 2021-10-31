export const SET_PROFILE = "SET_PROFILE";
export const RESET_PROFILE = "RESET_PROFILE";
export const SET_CURRENT_GAME = "SET_CURRENT_GAME";
export const SET_PROGRESS = "SET_PROGRESS";

export const setProfile = profile => {
	return { type: SET_PROFILE, payload: profile };
};

export const resetProfile = () => {
	return { type: RESET_PROFILE };
};

export const setCurrentGame = currentGameSetting => {
	return { type: SET_CURRENT_GAME, payload: currentGameSetting };
};

export const setProgress = updatedProgress => {
	return { type: SET_PROGRESS, payload: updatedProgress };
};
