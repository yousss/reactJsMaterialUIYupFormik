import { combineReducers } from 'redux'
import cakeReducer from './cake/reducer'
import userReducer from './user/reducer'
import buyIceCreamReducer from './iceCream/reducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: buyIceCreamReducer,
  users: userReducer,
})

export default rootReducer
