import store from "./store"
import { useSelector } from 'react-redux'

export default function PriceDrinks() {
	const drinksPrice = useSelector(state => state.drinks.price)
	let count = 0

	function handleChangePriceDrinks() {
		count = count + 1
		if(count % 2 !== 0){
			store.dispatch({
				type: 'changePriceDrinks',
				value: "10.000"
			})
		}else{
			store.dispatch({
				type: 'changePriceDrinks',
				value: "20.000"
			})
		}
	}

	return <>
		Halaman daftar minuman <br />
		Harga minuman Rp. {drinksPrice},-
		<br />
		<br />
		<button onClick={handleChangePriceDrinks}>Change Price</button>
	</>
}