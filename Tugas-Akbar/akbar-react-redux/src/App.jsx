import store from "./store"
import FoodsMenu from "./FoodsMenu"
import FoodsPrice from "./FoodsPrice"
import DrinksMenu from "./DrinkSMenu"
import DrinksPrice from "./DrinksPrice"

export default function App() {
  function tampilkanStore() {
    console.log(store.getState())
  }

  return <>
    <h1>Latihan React Redux</h1>
    <button onClick={tampilkanStore}>Restaurant</button> 

    <br /><hr /><br />

    <FoodsMenu />

    <br /><hr /><br />

    <FoodsPrice />

    <br /><hr /><br />

    <DrinksMenu />
    
    <br /><hr /><br />

    <DrinksPrice />

  </>
}