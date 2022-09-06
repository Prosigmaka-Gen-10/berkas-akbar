import { useEffect, useState } from 'react';
import './App.css';

const productsFromDatabase = [
    {
        id: 1001,
        name: 'Nasi Goreng',
        price: 13000
    },
    {
        id: 1002,
        name: 'Nasi Telor',
        price: 8000
    },
    {
        id: 1003,
        name: 'Nasi Uduk',
        price: 6000
    },
]

export default function CrudLocal() {
    const originalForm = {
        name: '',
        price: ''
    }
    const [products, setProducts] = useState([])
    const [fromInput, setFormInput] = useState({ ...originalForm })
    const [isUpdate, setIsUpdate] = useState(false)

    function prepareUpdate(products) {
        setFormInput({ ...products })
        setIsUpdate(true)
    }

    function handleInput(event, propertyName) {
        const currentFormInput = { ...fromInput }
        currentFormInput[propertyName] = event.target.value
        setFormInput(currentFormInput)
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (isUpdate) {
            updateProduct()
        } else {
            createProduct()
        }

        setFormInput({ ...originalForm })
    }

    function createProduct() {
        const timestampNow = new Date().getTime()

        const payload = {
            ...fromInput,
            id: timestampNow
        }
        const currentProducts = [...products]
        currentProducts.push(payload)
        setProducts(currentProducts)
    }

    function updateProduct() {
        const currentProducts = [...products]
        const productIndex = currentProducts.findIndex(
            (product) => product.id === fromInput.id

        )

        if (productIndex === -1) {
            alert('product tidak ada')
        }
        else {
            const payload = { ...formInput }

            currentProducts.splice(productIndex, 1, payload)
            setProducts(currentProducts)
        }

        setIsUpdate(false)
    }

    function handleDelete(productIndex) {
        const currentProducts = [...products]
        currentProducts.splice(productIndex, 1)
        setProducts(currentProducts)
    }

    function deleteAll() {
        setProducts([])
    }

    useEffect(() => {
        setProducts(productsFromDatabase)
    }, [])

    return (
        <>
            <h2>Daftar Produk:</h2>

            <button onClick={deleteAll}>
                Delete All
            </button>

            <ul>
                {products.map((product, productIndex) =>
                    <li key={product.id}>
                        {product.name} | Rp. {product.price}
                        &nbsp;&nbsp;

                        <button onClick={() => prepareUpdate(product)}>
                            Update
                        </button>
                        &nbsp;&nbsp;

                        <button onClick={() => handleDelete(productIndex)}>
                            Delete
                        </button>
                    </li>
                )}
            </ul>

            <br /><hr /><br />
            {/* ========== form produk ============= */}

            <h2>Form Produk:</h2>

            <form onSubmit={(event) => handleSubmit(event)}>
                <label>
                    Nama Produk: <br />
                    <input
                        type="text"
                        value={formInput.name}
                        onChange={(event) => handleInput(event, 'name')}
                        required />
                </label>

                <br /><br />

                <label>
                    Harga Produk: <br />
                    <input
                        type="number"
                        value={formInput.price}
                        onChange={(event) => handleInput(event, 'price')}
                        required
                        min="500" />
                </label>

                <br /><br />

                <button>
                    Submit
                </button>
            </form>
        </>
    );
}