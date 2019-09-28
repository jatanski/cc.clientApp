import types from './types';

const setRecipient = recipient => ({ type: types.SET_RECIPIENT, recipient})

export default {
    setRecipient
}