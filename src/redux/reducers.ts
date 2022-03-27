import { combineReducers } from 'redux'
import { userReducer } from 'redux/slices/userSlice'

const reducer = combineReducers({
  user: userReducer,
})

export default reducer
