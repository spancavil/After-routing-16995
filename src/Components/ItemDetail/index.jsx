import React from 'react';
import './styles.scss';

const ItemDetail = ({character}) => {
    return (
        <div className="itemDetail">
            <img src ={character.image} alt="chardetail"/>
            <div className="list">
                <p>{character.name}</p>
                <p>{character.species}</p>
                <p>{character.world}</p>
            </div>
        </div>
    )
}

export default ItemDetail
