import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {useState} from "react";

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

    return (
        <div className="App">
            <Navbar products={products} handleDelete={handleDelete}></Navbar>
            <div className="content">
                <h1>{title}</h1>
            </div>
        </div>
    );
}


export default App;
