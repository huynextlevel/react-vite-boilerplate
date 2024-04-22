import {
  GET_TOKEN,
  SET_COUNTER,
  RESET_APP_STATE
} from 'src/store/actions'

export const getToken = (token: string) => ({
  type: GET_TOKEN as typeof GET_TOKEN,
  token
})

export const setCounter = (counter: number) => ({
  type: SET_COUNTER as typeof SET_COUNTER,
  counter
})

export const resetAppState = () => ({
  type: RESET_APP_STATE as typeof RESET_APP_STATE
})