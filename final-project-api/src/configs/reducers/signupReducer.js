import {FIND_ALL_ACCOUNT, FIND_ALL_ACCOUNT_FAILURE, FIND_ALL_ACCOUNT_SUCCESS} from "../constants/actions";

const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export const findAllAccountReducer = (state = initialState, action) => {
    // console.log("ini action", action)
    switch (action.type) {
        case FIND_ALL_ACCOUNT:
            return {
                ...state,
                isLoading: true
            };
        case FIND_ALL_ACCOUNT_SUCCESS:
            return {
                data: action.data,
                isLoading: false,
                error: null
            };
        case FIND_ALL_ACCOUNT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return {
                ...state,
                isLoading: false,
                error: null
            };
    }
}