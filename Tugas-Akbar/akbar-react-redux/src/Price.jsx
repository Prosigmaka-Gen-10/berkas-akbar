

export default function Price() {
	const foodPrice = useSelector(state => state.foods.price)
	let count = 0

	function handleChangePrice() {
		count = count + 1
		if(count % 2 !== 0){
			store.dispatch({
				type: 'changePrice',
				value: "13.000"
			})
		}else{
			store.dispatch({
				type: 'changePrice',
				value: "20.000"
			})
		}
	}

	return <>
		This page is Price's Page <br />
		The price of this phone is Rp. {foodPrice},-
		<br />
		<br />
		<button onClick={handleChangePrice}>Change Price</button>
	</>
}