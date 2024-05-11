import {useState} from "react";

const Navbar = ({products, handleDelete}) => {
    return (
        products.map((p, i)=>(
            <li key={i}>
                {p.title}
                <button onClick={()=>handleDelete(p.id)}>delete</button>
            </li>
        ))
    )
}

export default Navbar;
