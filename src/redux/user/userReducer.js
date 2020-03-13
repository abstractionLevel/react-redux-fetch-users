import { FETCH_USERS_SUCCESS , FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from './userType'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case  FETCH_USERS_FAILURE:
            return {
                ...state,
                users: [],
                error: action.payload
            }
        default: return state

    }
}

export default reducer
