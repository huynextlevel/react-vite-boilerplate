import {
  GET_TOKEN,
  SET_COUNTER,
  RESET_APP_STATE
} from 'src/store/actions'

import { AppState, AppActions } from 'src/store/types/app'

const initialState: AppState = {
  token: '',
  counter: 0
}

const reducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case GET_TOKEN:
      return { ...state, token: action.token }
    case SET_COUNTER:
      return { ...state, counter: action.counter }
    case RESET_APP_STATE:
      return initialState
    default:
      return state
  }
}

export default reducer