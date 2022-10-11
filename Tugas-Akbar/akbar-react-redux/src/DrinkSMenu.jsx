

export default function MenuMinuman() {
	const daftarminuman = useSelector(state => state.minuman.menu)
	let count = 0

	function handleChangeMenuMinuman() {
		count = count + 1
		if (count % 2 !== 0) {
			store.dispatch({
				type: 'changeMerkLaptop',
				value: 'LENOVO'
			})
		} else {
			store.dispatch({
				type: 'changeMerkLaptop',
				value: 'THINKPAD'
			})
		}
		
	}

	return <>
		This page is Merk Laptop page<br />
		and the brand of this laptop is {daftarminuman}
		<br />
		<br />
		<button onClick={handleChangeMerkLaptop}>Change Merk</button>
	</>
}