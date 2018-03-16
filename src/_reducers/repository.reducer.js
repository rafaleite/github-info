import { ACTIONS } from "../constants";

const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const repository = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.LOAD_REPOSITORY_REQUEST:
            return {
                isFetching: true,
                data: [],
                error: false
            }
        case ACTIONS.LOAD_REPOSITORY_SUCCESS:
            return {
                isFetching: false,
                data: action.data,
                error: false
            }
        case ACTIONS.LOAD_REPOSITORY_FAILURE:
            return {
                isFetching: false,
                data: action.data,
                error: false
            }
        default:
            return state
    }
}

export default repository