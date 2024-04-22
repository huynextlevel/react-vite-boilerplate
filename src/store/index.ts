import { createLogger } from 'redux-logger'
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux'

import reducers from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose,
  logger = createLogger({
    predicate: () => {
      return (import.meta.env.VITE_NODE_ENV === 'development')
    },
  })

export default function configureStore() {
  const enhancers = composeEnhancers(applyMiddleware(logger))

  const store = createStore(reducers, undefined, enhancers)

  return store
}

export const appStore = configureStore()