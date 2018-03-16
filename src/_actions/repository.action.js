import { ACTIONS } from "../constants";

export const loadRepositoryRequest = () => {
    return { type: ACTIONS.LOAD_REPOSITORY_REQUEST }
}

export const loadRepositorySuccess = (data) => {
    return {
        type: ACTIONS.LOAD_REPOSITORY_SUCCESS,
        data
    }
}

export const loadRepositoryFailure = () => {
    return {
        type: ACTIONS.LOAD_REPOSITORY_FAILURE
    }
}