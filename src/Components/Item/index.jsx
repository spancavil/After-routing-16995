import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Item = ({product}) => {

    //console.log(product);
    return (
        <div className = "item">
            <NavLink to = {`/item/${product.id}`}> 
            <img src = {product.image} alt="product"/>
            </NavLink>
            <p>{product.title}</p>
        </div>
    )
}

export default Item
