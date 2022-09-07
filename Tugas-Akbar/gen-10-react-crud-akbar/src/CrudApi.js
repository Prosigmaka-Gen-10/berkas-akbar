import axios from "axios"
import { useEffect, useState } from "react"


export default function CrudApi() {

    const originalForm = {
        noMenu: 0,
        menu: '',
        harga: ''
    }

    const [food, setFood] = useState([])
    const [formInput, setFormInput] = useState({ ...originalForm })

    async function getListFood() {
        axios.get('http://localhost:3001/food')
            .then((res) => {
                setFood(res.data)
            })
            .catch(error => {
                console.log(error)
                alert('Terjadi Masalah Saat Memproses Data')
            })
        }
        function tambahFood() {
            axios.post('http://localhost:3001/food', formInput)
            .then(() => {
                getListFood()
            })
            .catch(error => {
                console.log(error) 
                alert ('Terjadi Masalah, Data belum bisa diproses')
            })
        }
        
        function updateFood () {
            axios.put('http://localhost:3001/food/' + formInput.id, formInput)
            .then(() => {
                getListFood()
            })
            .catch(error => {
                console.log(error) 
                alert ('Terjadi Masalah, Data belum bisa diproses')
            })
        }
    
        function deleteFood (foodId) {
            axios.delete('http://localhost:3001/food/' + foodId)
            .then(() => {
                getListFood()
            })
            .catch(error => {
                console.log(error) 
                alert (error.message)
            })
        }
    
        function handleSubmit (event) {
            event.preventDefault()
            if( formInput.id) {
    
                updateFood()
    
            } else {
    
                tambahFood()
    
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
            getListFood()
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
            {food.map (food => 
            <li key={food.id}>
                Nomor Menu : {food.noMenu} | Menu : {food.menu} | Harga : {food.harga}
    
                &nbsp;&nbsp;
                <button onClick={() => prepareUpdate(food)}>
                    Update
                </button>
    
                &nbsp;&nbsp;
                <button onClick={() => deleteFood(food.id)}>
                    Delete
                </button>
            </li>
            )}
        </ul>
        </>
    }