import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Item = ({character}) => {
    //console.log(character);
    return (
        <div className = "item">
            <NavLink to = {`/item/${character.id}`}> 
            <img src = {character.image} alt="character"/>
            </NavLink>
            <p> Nombre: {character.name}</p>
        </div>
    )
}

export default Item
