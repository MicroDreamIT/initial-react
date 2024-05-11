import {useState} from "react";

const Navbar = ({products, handleDelete}) => {
    return (
        products.map((p)=>(
            <li key={p.id}>
                {p.title}
                <button onClick={()=>handleDelete(p.id)}>delete</button>
            </li>
        ))
    )
}

export default Navbar;
