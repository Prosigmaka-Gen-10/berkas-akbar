export const initialStateDrinks = {
	menu: 'Es Teler',
	price: "70.000"
}

export default function drinksReducer(state = initialStateDrinks, action) {
	switch (action.type) {
		case 'changeMenuDrinks':
			return { ...state, menu: action.value }
		case 'changePriceLaptop':
			return { ...state, price: action.value }
		default:
			return state
	}

}