import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { offline } from '@redux-offline/redux-offline'
import config from '@redux-offline/redux-offline'
import { exerciseReducer } from './exercises'
import { muscleReducer } from './muscles'

//const persistConfig = {
//  key: 'root',
//  storage
//}
//console.log(exerciseReducer)
const rootReducer = combineReducers({
  exercises: exerciseReducer,
  muscles: muscleReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)

//const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer, middleware)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

const store = createStore(rootReducer, middleware, offline(config))
export default store
export * from './exercises'
export * from './muscles'
