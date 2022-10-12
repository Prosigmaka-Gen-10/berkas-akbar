import { combineReducers, createStore} from "redux"


import foodsReducer from './foodsReducer'
import drinksReducer from './drinksReducer'

const rootReducer = combineReducers({
	foods: foodsReducer
	,drinks: drinksReducer
})

const strore = createStore(rootReducer)


export default strore