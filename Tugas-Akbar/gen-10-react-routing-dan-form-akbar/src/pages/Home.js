import { useState, useEffect } from "react";

const Home = () => {
    const [users, setUsers] = useState([]);
    useState(() => {
        fetch("https://fakerapi.it/api/v1/products?_quantity=1&_taxes=12&_categories_type=uuid")
            .then((resp) => resp.json())
            .then((data) => setUsers(data))
            .catch(err => console.log(err))
    })
    return <h1>Home Page</h1>;
};

export default Home;