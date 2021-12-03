import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount';
import './styles.scss';

const ItemDetail = ({product}) => {

    const {addItem} = useContext(CartContext)

    const [buy, setBuy] = useState(false);
    const [cantidad, setCantidad] = useState(0);

    const handleBuy = (qty) => {
        setBuy(true);
        setCantidad(qty);
    }

    const handlePurchase = () => {
        addItem(product);
    }

    return (
        <div className="itemDetail">
            <img src ={product.image} alt="chardetail"/>
            <div className="list">
                <p>{product.title}</p>
                <p>{product.category}</p>
                <p>{product.description}</p>
                {!buy ?
                <ItemCount stock = {10} onAdd = {(qty) => handleBuy (qty)} />
                :
                <button onClick = {handlePurchase}>Purchase</button>
                }
            </div>
        </div>
    )
}

export default ItemDetail
