import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {useEffect, useState} from "react";

const App = () => {
    const title = `This is first version of Ad space`;

    const [products, setProducts]  = useState(
        [
            { title: 'Cabbage', id: 1 },
            { title: 'Garlic', id: 2 },
            { title: 'Apple', id: 3 },
        ]
    )

    const handleDelete = (id) => {
        const newProducts = products.filter(p=>p.id!==id)
        setProducts(newProducts)
    }

    useEffect(() => {
        fetch('http://localhost:3000/ads')
            .then(res=>{
                return res.json()
            })
            .then(data=>{
                setProducts(data)
            })
    }, []);

    return (
        <div className="App">
            {products && <Navbar products={products} handleDelete={handleDelete}></Navbar>}
            <div className="content">
                <h1>{title}</h1>
            </div>
        </div>
    );
}


export default App;
