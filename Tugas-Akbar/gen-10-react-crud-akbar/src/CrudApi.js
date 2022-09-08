import axios from "axios"
import { useEffect, useState } from "react"


export default function CrudApi() {

    const originalForm = {
        noMenu: 0,
        menu: '',
        harga: ''
    }

    const [foods, setFoods] = useState([])
    const [formInput, setFormInput] = useState({ ...originalForm })

    async function getListFoods() {
        axios.get('http://localhost:3001/food')
            .then((res) => {
                setFoods(res.data)
            })
            .catch(error => {
                console.log(error)
                alert('Terjadi Masalah Saat Memproses Data')
            })
        }
        function tambahFoods() {
            axios.post('http://localhost:3001/food', formInput)
            .then(() => {
                getListFoods()
            })
            .catch(error => {
                console.log(error) 
                alert ('Terjadi Masalah, Data belum bisa diproses')
            })
        }
        
        function updateFoods () {
            axios.put('http://localhost:3001/food/' + formInput.id, formInput)
            .then(() => {
                getListFoods()
            })
            .catch(error => {
                console.log(error) 
                alert ('Terjadi Masalah, Data belum bisa diproses')
            })
        }
    
        function deleteFoods (foodId) {
            axios.delete('http://localhost:3001/food/' + foodId)
            .then(() => {
                getListFoods()
            })
            .catch(error => {
                console.log(error) 
                alert (error.message)
            })
        }
    
        function handleSubmit (event) {
            event.preventDefault()
            if( formInput.id) {
    
                updateFoods()
    
            } else {
    
                tambahFoods()
    
            }
        
            setFormInput({...originalForm})
        }
    
        function handleInput (event, propName){
            const currentFormInput = {...formInput}
            currentFormInput[propName] = event.target.value
            setFormInput(currentFormInput)
            
        }
    
        function prepareUpdate (food) {
             setFormInput({...food})
        }
        
        useEffect(() => {
            getListFoods()
        }, [])
    
        return<>
    
        <form onSubmit={event => handleSubmit(event)}>
        <h2> Form Food </h2>
        <label>
            Nomor Menu :
            <input type="text"
            value={formInput.noMenu} 
            onChange={event => handleInput(event, 'noMenu')}
            />
        </label>
        <br/>
        <br/>
        <label>
            Menu :
            <input type="text"
            value={formInput.menu} 
            onChange={event => handleInput(event, 'menu')}
            />
        </label>
        <br/>
        <br/>
        <label>
            Harga :
            <input type="text"
            value={formInput.harga} 
            onChange={event => handleInput(event, 'harga')}
            />
        </label>
        <br/>
        <br/>
        <button>
            submit
        </button>
        </form>
        <br/><hr/><br/>
        
        <h2>
            Daftar Makanan :
        </h2>
        <ul>
            {foods.map (food => 
            <li key={food.id}>
                Nomor Menu : {foods.noMenu} | Menu : {foods.menu} | Harga : {foods.harga}
    
                &nbsp;&nbsp;
                <button onClick={() => prepareUpdate(food)}>
                    Update
                </button>
    
                &nbsp;&nbsp;
                <button onClick={() => deleteFoods(food.id)}>
                    Delete
                </button>
            </li>
            )}
        </ul>
        </>
    }