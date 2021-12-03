import React from 'react';
import ItemCount from '../ItemCount';
import './styles.scss';

const ItemDetail = ({product}) => {

    const handleBuy = (qty) => {
        console.log(qty);
    }

    return (
        <div className="itemDetail">
            <img src ={product.image} alt="chardetail"/>
            <div className="list">
                <p>{product.title}</p>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <ItemCount stock = {10} onAdd = {(qty) => handleBuy (qty)} />
            </div>
        </div>
    )
}

export default ItemDetail
