import store from "./store"
import {useSelector} from "react-redux"

export default function MenuMinuman() {
	const daftarminuman = useSelector(state => state.drinks.menu)
	let count = 0

	function handleChangeMenuMinuman() {
		count = count + 1
		if (count % 2 !== 0) {
			store.dispatch({
				type: 'changeMenuMinuman',
				value: 'Es Teh'
			})
		} else {
			store.dispatch({
				type: 'changeMenuMinuman',
				value: 'Es Jeruk'
			})
		}
		
	}

	return <>
		This page is Merk Laptop page<br />
		and the brand of this laptop is {daftarminuman}
		<br />
		<br />
		<button onClick={handleChangeMenuMinuman}>Change Menu</button>
	</>
}