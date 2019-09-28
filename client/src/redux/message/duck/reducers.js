import types from './types'

const INITIAL_STATE = {}

const messagesReducer = (state = INITIAL_STATE, action) => {
    switch( action.type) {
        case types.SET_RECIPIENT:
            return {
                ...state,
                recipient: action.recipient
            }
        default:
            return {
                ...state
            }
    }
}

export default messagesReducer;