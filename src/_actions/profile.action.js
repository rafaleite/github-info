import { ACTIONS } from "../constants";

export const loadProfileRequest = () => {
    return { type: ACTIONS.LOAD_PROFILE_REQUEST }
}

export const loadProfileSuccess = (data) => {
    return {
        type: ACTIONS.LOAD_PROFILE_SUCCESS,
        data
    }
}

export const loadProfileFailure = () => {
    return {
        type: ACTIONS.LOAD_PROFILE_FAILURE
    }
}