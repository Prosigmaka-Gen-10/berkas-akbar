

export default function MenuMakanan() {
	const daftarmakanan = useSelector(state => state.foods.menu)
	let count = 0

	function handleChangeMenu() {
		count = count + 1
		if (count % 2 !== 0) {
			store.dispatch({
				type: 'changeMerk',
				value: 'OPPO'
			})
		} else {
			store.dispatch({
				type: 'changeMerk',
				value: 'SAMSUNG'
			})
		}
		
	}

	return <>
		This page is Merk's page<br />
		and the brand of this smartphone is {daftarmakanan}
		<br />
		<br />
		<button onClick={handleChangeMenu}>Change Menu</button>
	</>
}