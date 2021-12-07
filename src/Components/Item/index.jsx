import React from 'react';
import './styles.scss';

const Item = ({character}) => {
    //console.log(character);
    return (
        <div className = "item"> 
            <img src = {character.image} alt="character"/>
            <p> Nombre: {character.name}</p>
        </div>
    )
}

export default Item
