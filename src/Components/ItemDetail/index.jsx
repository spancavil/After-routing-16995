import React from 'react';
import './styles.scss'

const ItemDetail = ({character}) => {
    return (
        <div className = "itemDetail">
            <p>{character.name}</p>
        </div>
    )
}

export default ItemDetail
