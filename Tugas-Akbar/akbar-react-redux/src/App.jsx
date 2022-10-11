export default function App() {
  function showStore() {
    console.log(store.getState())
  }

  return <>
    <h1>Ridwan's React-Redux</h1>
    <button onClick={showStore}>Restaurant</button> 

    <br /><hr /><br />

    <Foods />

    <br /><hr /><br />

    <PriceFoods />

    <br /><hr /><br />

    <Drinks />
    
    <br /><hr /><br />

    <PriceDrinks />

  </>
}