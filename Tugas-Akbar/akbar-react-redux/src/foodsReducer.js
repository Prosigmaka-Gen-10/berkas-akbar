export const initialState = {
	menu: 'Sate Ayam',
	price: "50.000"
}

export default function foodsReducer(state = initialState, action) {
	switch (action.type) {
		case 'changeMenu':
			return { ...state, menu: action.value }
		case 'changePrice':
			return { ...state, price: action.value }
		default:
			return state
	}

}