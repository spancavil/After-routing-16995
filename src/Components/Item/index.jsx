import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Item = ({character}) => {
    //console.log(character);
    return (
        <div className = "item">
            <Link to= {`/item/${character.id}`}> 
                <img src = {character.image} alt="character"/>
            </Link> 
            <p> Nombre: {character.name}</p>
        </div>
    )
}

export default Item
