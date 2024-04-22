import {
  getToken,
  setCounter,
  resetAppState
} from 'src/store/actions/app'

export interface AppState {
  token: string
  counter: number
}

export type AppActions =
  | ReturnType<typeof getToken>
  | ReturnType<typeof setCounter>
  | ReturnType<typeof resetAppState>