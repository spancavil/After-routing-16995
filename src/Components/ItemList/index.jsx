import React from 'react';
import Item from '../Item';
import './styles.scss'

const ItemList = ({products}) => {

    //console.log(products);

    return (
        <div className= "itemList">
            {products.map(product => {
                return <Item product = {product} key={product.id}/>
            })}
        </div>
    )
}

export default ItemList
